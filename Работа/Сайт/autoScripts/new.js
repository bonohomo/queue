(async () => {

  // ============================================================
  // НАСТРОЙКИ
  // ============================================================

  const PRICE = "4560";
  const BASE_URL = location.origin;

  const INPUT_TIMEOUT = 60000;
  const SAVE_TIMEOUT = 60000;

  const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


  // ============================================================
  // ВЫБОР TXT
  // ============================================================

  function selectFile() {
    return new Promise(resolve => {

      const input = document.createElement("input");

      input.type = "file";
      input.accept = ".txt,text/plain";

      input.addEventListener(
        "change",
        () => resolve(input.files?.[0] ?? null),
        { once: true }
      );

      input.click();

    });
  }


  // ============================================================
  // ОЖИДАНИЕ
  // ============================================================

  async function waitFor(
    check,
    {
      timeout = 30000,
      interval = 200,
      description = "условие"
    } = {}
  ) {

    const start = Date.now();

    let lastError = null;

    while (Date.now() - start < timeout) {

      try {

        const result = check();

        if (result) {
          return result;
        }

      } catch (error) {

        /*
          Во время перехода страницы document
          может временно быть недоступен.
        */

        lastError = error;
      }

      await sleep(interval);
    }


    const error = new Error(
      `Таймаут ${timeout} мс: ${description}`
    );

    if (lastError) {
      error.cause = lastError;
    }

    throw error;
  }


  // ============================================================
  // ПОИСК КНОПКИ
  // ============================================================

  function findButtonByText(doc, text) {

    return [...doc.querySelectorAll("button")]
      .find(button =>
        button.textContent
          .replace(/\s+/g, " ")
          .trim()
          .includes(text)
      );

  }


  // ============================================================
  // УСТАНОВКА VALUE ДЛЯ REACT / MANTINE
  // ============================================================

  async function setInputValue(win, input, value) {

    // Фокусируемся
    input.focus();

    await sleep(100);

    // Выделяем текущее значение целиком
    input.select();

    await sleep(100);

    /*
      Вставляем текст так, как будто пользователь
      действительно ввёл его в поле.
    */
    const inserted = win.document.execCommand(
      "insertText",
      false,
      value
    );

    console.log(
      "⌨️ execCommand insertText:",
      inserted
    );

    // Дополнительно отправляем input
    input.dispatchEvent(
      new win.InputEvent("input", {
        bubbles: true,
        inputType: "insertText",
        data: value
      })
    );

    await sleep(200);

    // Убираем фокус — некоторые компоненты
    // применяют значение именно после blur
    input.blur();

    await sleep(200);
  }


  // ============================================================
  // ЧИТАЕМ TXT
  // ============================================================

  console.log("📂 Выбери TXT-файл...");


  const file = await selectFile();


  if (!file) {

    console.error("❌ Файл не выбран.");

    return;
  }


  const text = await file.text();


  const links = text

    .split(/\r?\n/)

    .map(line => line.trim())

    .filter(Boolean)

    .map(link => {

      try {

        const url = new URL(
          link,
          BASE_URL
        );


        /*
          Убираем возможный / в конце,
          затем добавляем /settings.
        */

        url.pathname =
          url.pathname.replace(/\/+$/, "") +
          "/settings";


        return url.href;

      } catch (error) {

        console.warn(
          "⚠️ Некорректная ссылка:",
          link
        );

        return null;
      }

    })

    .filter(Boolean);


  if (!links.length) {

    console.error(
      "❌ В файле нет корректных ссылок."
    );

    return;
  }


  console.log("");
  console.log("════════════════════════════════════");

  console.log(
    `📋 Загружено тарифов: ${links.length}`
  );

  console.log(
    `💰 Новая цена: ${PRICE}`
  );

  console.log(
    "🔗 Первый settings URL:",
    links[0]
  );

  console.log("════════════════════════════════════");


  // ============================================================
  // ОТКРЫВАЕМ WORKER
  // ============================================================

  /*
    Сразу открываем первую страницу /settings.
  */

  const worker = window.open(
    links[0],
    "tarif_worker"
  );


  if (!worker) {

    console.error(
      "❌ Браузер заблокировал новую вкладку."
    );

    return;
  }


  // ============================================================
  // ОСНОВНОЙ ЦИКЛ
  // ============================================================

  for (
    let i = 0;
    i < links.length;
    i++
  ) {

    const link = links[i];


    console.log("");
    console.log("════════════════════════════════════");

    console.log(
      `%c[${i + 1}/${links.length}] START`,
      "color:#228be6;font-weight:bold"
    );

    console.log(
      "🔗",
      link
    );


    try {

      // ========================================================
      // 1. ОТКРЫВАЕМ /settings
      // ========================================================

      if (i > 0) {

        console.log(
          `%c[${i + 1}/${links.length}] OPEN`,
          "color:#228be6;font-weight:bold",
          link
        );


        worker.location.href = link;

      } else {

        console.log(
          `%c[${i + 1}/${links.length}] OPEN`,
          "color:#228be6;font-weight:bold",
          "Первая страница уже открывается"
        );

      }

      // ========================================================
      // ЖДЁМ, ПОКА РАБОЧАЯ ВКЛАДКА РЕАЛЬНО ПЕРЕЙДЁТ
      // НА ТЕКУЩИЙ ТАРИФ
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] NAVIGATION`,
        "color:#f08c00;font-weight:bold",
        "Жду переход на нужный URL..."
      );

      await waitFor(
        () => {
          if (worker.closed) {
            throw new Error("Рабочая вкладка закрыта");
          }

          const actual = new URL(worker.location.href);
          const expected = new URL(link);

          return (
            actual.origin === expected.origin &&
            actual.pathname.replace(/\/+$/, "") ===
            expected.pathname.replace(/\/+$/, "")
          );
        },
        {
          timeout: 30000,
          interval: 100,
          description: `переход на ${link}`
        }
      );

      console.log(
        `%c[${i + 1}/${links.length}] ✓ NAVIGATION`,
        "color:#2f9e44;font-weight:bold",
        worker.location.href
      );

      // ========================================================
      // ЖДЁМ ЗАГРУЗКУ НОВОГО DOCUMENT
      // ========================================================

      await waitFor(
        () => {
          return (
            worker.document.readyState === "interactive" ||
            worker.document.readyState === "complete"
          );
        },
        {
          timeout: 30000,
          description: "загрузка новой страницы"
        }
      );

      // небольшой запас для React
      await sleep(1000);

      console.log(
        `%c[${i + 1}/${links.length}] ✓ PAGE`,
        "color:#2f9e44;font-weight:bold",
        "Новая страница загружена"
      );


      // ========================================================
      // 2. СРАЗУ ЖДЁМ НУЖНЫЙ INPUT
      //
      // Никаких проверок URL.
      // Никаких readyState.
      // Никаких кнопок "Настройки".
      //
      // Появился input = нужная страница готова.
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] WAIT`,
        "color:#f08c00;font-weight:bold",
        "Жду поле цены..."
      );


      const priceInput = await waitFor(

        () => {

          if (worker.closed) {

            throw new Error(
              "Рабочая вкладка закрыта"
            );

          }


          return worker.document.querySelector(
            'input[data-path="cardSettings.price"]'
          );

        },

        {
          timeout: INPUT_TIMEOUT,

          description:
            'не появилось поле input[data-path="cardSettings.price"]'
        }

      );


      console.log(
        `%c[${i + 1}/${links.length}] ✓ INPUT`,
        "color:#2f9e44;font-weight:bold",
        `Найдено. Значение: "${priceInput.value}"`
      );


      // ========================================================
      // 3. СОХРАНЯЕМ СТАРУЮ ЦЕНУ
      // ========================================================

      const oldValue =
        priceInput.value;


      // ========================================================
      // 4. МЕНЯЕМ ЦЕНУ
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] PRICE`,
        "color:#228be6;font-weight:bold",
        `${oldValue} → ${PRICE}`
      );


      await setInputValue(
        worker,
        priceInput,
        PRICE
      );


      // ========================================================
      // 5. ЖДЁМ, ПОКА INPUT РЕАЛЬНО ПОКАЖЕТ 4560
      // ========================================================

      await waitFor(

        () => {

          const input =
            worker.document.querySelector(
              'input[data-path="cardSettings.price"]'
            );


          if (!input) {
            return false;
          }


          const numericValue =
            input.value.replace(
              /[^\d]/g,
              ""
            );


          return numericValue === PRICE;

        },

        {
          timeout: 5000,

          description:
            `поле не приняло значение ${PRICE}`
        }

      );


      const actualInput =
        worker.document.querySelector(
          'input[data-path="cardSettings.price"]'
        );


      console.log(
        `%c[${i + 1}/${links.length}] ✓ PRICE`,
        "color:#2f9e44;font-weight:bold",
        `Теперь: "${actualInput.value}"`
      );


      // ========================================================
      // 6. ИЩЕМ СОХРАНИТЬ
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] SAVE`,
        "color:#f08c00;font-weight:bold",
        'Жду кнопку "Сохранить"...'
      );


      const saveButton = await waitFor(

        () =>
          findButtonByText(
            worker.document,
            "Сохранить"
          ),

        {
          description:
            'не появилась кнопка "Сохранить"'
        }

      );


      console.log(
        `%c[${i + 1}/${links.length}] ✓ SAVE`,
        "color:#2f9e44;font-weight:bold",
        "Кнопка найдена"
      );


      // ========================================================
      // 7. ПРОВЕРЯЕМ, ЧТО КНОПКА АКТИВНА
      // ========================================================

      if (saveButton.disabled) {

        throw new Error(
          'Кнопка "Сохранить" disabled после изменения цены. ' +
          "Вероятно, React не зарегистрировал изменение."
        );

      }


      // ========================================================
      // 8. НАЖИМАЕМ СОХРАНИТЬ
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] SAVE`,
        "color:#228be6;font-weight:bold",
        "Нажимаю..."
      );


      saveButton.click();


      // ========================================================
      // 9. ЖДЁМ DISABLED
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] WAIT`,
        "color:#f08c00;font-weight:bold",
        "Жду disabled..."
      );


      await waitFor(

        () => {

          const button =
            findButtonByText(
              worker.document,
              "Сохранить"
            );


          return (
            button &&
            button.disabled === true
          );

        },

        {
          timeout: SAVE_TIMEOUT,

          description:
            'кнопка "Сохранить" не стала disabled'
        }

      );


      // ========================================================
      // 10. УСПЕШНО
      // ========================================================

      console.log(
        `%c[${i + 1}/${links.length}] ✓ DONE`,
        "color:#2f9e44;font-weight:bold",
        `${oldValue} → ${PRICE}`
      );


      /*
        Небольшой запас после сохранения,
        чтобы не оборвать возможный запрос
        переходом на следующую страницу.
      */

      await sleep(2000);


      // ========================================================
      // 11. СЛЕДУЮЩИЙ
      // ========================================================

      if (i < links.length - 1) {

        console.log(
          `%c[${i + 1}/${links.length}] NEXT →`,
          "color:#7950f2;font-weight:bold",
          links[i + 1]
        );

      }


    } catch (error) {

      // ========================================================
      // ОШИБКА
      // ========================================================

      console.log("");
      console.log(
        "████████████████████████████████████"
      );


      console.error(
        `❌ ОШИБКА НА ${i + 1}/${links.length}`
      );


      console.error(
        "🔗 Планируемая ссылка:",
        link
      );


      try {

        console.error(
          "🌐 Фактический URL:",
          worker.location.href
        );

      } catch (e) {

        console.error(
          "🌐 URL прочитать не удалось:",
          e
        );

      }


      try {

        console.error(
          "📄 readyState:",
          worker.document.readyState
        );

      } catch { }


      try {

        const input =
          worker.document.querySelector(
            'input[data-path="cardSettings.price"]'
          );


        console.error(
          "💰 Поле цены:",
          input
            ? input.value
            : "НЕ НАЙДЕНО"
        );

      } catch { }


      try {

        const save =
          findButtonByText(
            worker.document,
            "Сохранить"
          );


        console.error(
          "💾 Кнопка сохранения:",
          save
            ? {
              disabled: save.disabled,
              text:
                save.textContent
                  .replace(/\s+/g, " ")
                  .trim()
            }
            : "НЕ НАЙДЕНА"
        );

      } catch { }


      console.error(
        "💥 Причина:",
        error
      );


      console.log("");

      console.log(
        `%c⛔ Цикл остановлен.`,
        "color:#e03131;font-weight:bold;font-size:16px"
      );


      console.log(
        `Следующие ${links.length - i - 1
        } тарифов не обрабатывались.`
      );


      console.log(
        `Для продолжения проблемная позиция: ${i + 1
        }`
      );


      return;
    }

  }


  // ============================================================
  // ГОТОВО
  // ============================================================

  console.log("");
  console.log(
    "════════════════════════════════════"
  );


  console.log(
    `%c✅ ВСЁ ГОТОВО`,
    "color:#2f9e44;font-weight:bold;font-size:18px"
  );


  console.log(
    `%cОбработано: ${links.length}/${links.length}`,
    "color:#2f9e44;font-weight:bold"
  );


  console.log(
    `%cЦена: ${PRICE}`,
    "color:#2f9e44;font-weight:bold"
  );

})();