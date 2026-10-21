(async () => {

  // ============================================================
  // ⚙️ НАСТРОЙКИ
  // ============================================================

  // Фраза для поиска
  const SEARCH_PHRASE = 'новый учебный';

  // Учитывать регистр
  const CASE_SENSITIVE = false;

  // Пауза между курсами
  const DELAY = 200;

  // Количество попыток при ошибке
  const RETRIES = 3;


  // ============================================================
  // СОСТОЯНИЕ
  // ============================================================

  let stopped = false;
  let processed = 0;

  const found = [];

  const ORIGIN =
    window.location.origin;


  // ============================================================
  // КОМАНДЫ
  // ============================================================

  window.courseTemplateFinder = {

    stop() {

      stopped = true;

      console.log(
        '🛑 Остановка запрошена'
      );

    },

    download() {

      downloadCSV();

    },

    status() {

      console.log({
        'Обработано': processed,
        'Найдено': found.length,
        'Остановлен': stopped
      });

    }

  };


  // ============================================================
  // SLEEP
  // ============================================================

  function sleep(ms) {

    return new Promise(
      resolve =>
        setTimeout(
          resolve,
          ms
        )
    );

  }


  // ============================================================
  // FETCH HTML
  // ============================================================

  async function getHTML(
    url
  ) {

    let lastError;

    for (
      let attempt = 1;
      attempt <= RETRIES;
      attempt++
    ) {

      try {

        const response =
          await fetch(
            url,
            {
              credentials: 'include',
              cache: 'no-store'
            }
          );

        if (
          !response.ok
        ) {

          throw new Error(
            `HTTP ${response.status}`
          );

        }

        const html =
          await response.text();

        if (
          !html
        ) {

          throw new Error(
            'Пустой ответ'
          );

        }

        return html;

      } catch (error) {

        lastError =
          error;

        console.warn(
          `⚠️ Ошибка запроса ${attempt}/${RETRIES}:`,
          url,
          error
        );

        if (
          attempt < RETRIES
        ) {

          await sleep(
            1000 * attempt
          );

        }

      }

    }

    throw lastError;

  }


  // ============================================================
  // ПРОВЕРКА ФРАЗЫ
  // ============================================================

  function containsPhrase(
    text
  ) {

    if (
      CASE_SENSITIVE
    ) {

      return text.includes(
        SEARCH_PHRASE
      );

    }

    return text
      .toLowerCase()
      .includes(
        SEARCH_PHRASE.toLowerCase()
      );

  }


  // ============================================================
  // ПОЛУЧАЕМ ССЫЛКИ НА КУРСЫ
  // ============================================================

  function getCourseLinks() {

    const links = [];

    document
      .querySelectorAll(
        'a[href^="/@editor/courses/"]'
      )
      .forEach(
        link => {

          const href =
            link.getAttribute(
              'href'
            );

          if (
            !href
          ) {

            return;

          }

          // Берём только /@editor/courses/4
          // но не /template, /seo и т.д.

          if (
            !/^\/@editor\/courses\/\d+\/?$/.test(
              href
            )
          ) {

            return;

          }

          const clean =
            href.replace(
              /\/$/,
              ''
            );

          if (
            !links.includes(
              clean
            )
          ) {

            links.push(
              clean
            );

          }

        }
      );

    return links;

  }


  // ============================================================
  // ИЩЕМ IFRAME
  // ============================================================

  function getPreviewURL(
    templateHTML,
    templateURL
  ) {

    const doc =
      new DOMParser()
        .parseFromString(
          templateHTML,
          'text/html'
        );


    // Ищем iframe
    const iframe =
      doc.querySelector(
        'iframe'
      );


    if (
      !iframe
    ) {

      throw new Error(
        'На странице /template не найден iframe'
      );

    }


    const src =
      iframe.getAttribute(
        'src'
      );


    if (
      !src
    ) {

      throw new Error(
        'У iframe отсутствует src'
      );

    }


    // Превращаем относительный URL
    // в абсолютный

    return new URL(
      src,
      templateURL
    ).href;

  }


  // ============================================================
  // ИЩЕМ ФРАЗУ В PREVIEW
  // ============================================================

  function searchInPreview(
    previewHTML
  ) {

    const doc =
      new DOMParser()
        .parseFromString(
          previewHTML,
          'text/html'
        );


    // ----------------------------------------------------------
    // ИМЕННО ЭТА СЕКЦИЯ
    //
    // <section class="top-section top-theme-white ...">
    // ----------------------------------------------------------

    const section =
      doc.querySelector(
        'section.top-section.top-theme-white'
      );


    if (
      !section
    ) {

      return {

        found: false,

        reason:
          'Секция top-section top-theme-white не найдена'

      };

    }


    // ----------------------------------------------------------
    // Берём только текст внутри этой секции
    // ----------------------------------------------------------

    const text =
      section.textContent || '';


    return {

      found:
        containsPhrase(
          text
        ),

      text

    };

  }


  // ============================================================
  // CSV
  // ============================================================

  function downloadCSV() {

    if (
      !found.length
    ) {

      console.warn(
        '⚠️ Найденных страниц пока нет'
      );

      return;

    }


    const csv =
      [
        'url',

        ...found.map(
          url =>
            `"${url.replace(
              /"/g,
              '""'
            )}"`
        )

      ].join(
        '\r\n'
      );


    const blob =
      new Blob(
        [
          '\uFEFF' + csv
        ],
        {
          type:
            'text/csv;charset=utf-8'
        }
      );


    const blobURL =
      URL.createObjectURL(
        blob
      );


    const a =
      document.createElement(
        'a'
      );

    a.href =
      blobURL;

    a.download =
      'courses-with-new-study.csv';


    document.body.appendChild(
      a
    );

    a.click();

    a.remove();


    URL.revokeObjectURL(
      blobURL
    );


    console.log(
      `📥 Скачано: ${found.length} страниц`
    );

  }


  // ============================================================
  // ПОЛУЧАЕМ КУРСЫ
  // ============================================================

  const courseLinks =
    getCourseLinks();


  console.log(
    '========================================'
  );

  console.log(
    '🔎 ПОИСК ФРАЗЫ В PREVIEW IFRAME'
  );

  console.log(
    '========================================'
  );

  console.log(
    `Фраза: "${SEARCH_PHRASE}"`
  );

  console.log(
    `Найдено курсов: ${courseLinks.length}`
  );

  console.log(
    ''
  );

  console.log(
    'Команды:'
  );

  console.log(
    'courseTemplateFinder.stop()'
  );

  console.log(
    'courseTemplateFinder.download()'
  );

  console.log(
    'courseTemplateFinder.status()'
  );


  // ============================================================
  // ОСНОВНОЙ ЦИКЛ
  // ============================================================

  for (
    let i = 0;
    i < courseLinks.length;
    i++
  ) {

    if (
      stopped
    ) {

      break;

    }


    const coursePath =
      courseLinks[i];


    const templateURL =
      ORIGIN +
      coursePath +
      '/template';


    console.log(
      `\n[${i + 1}/${courseLinks.length}]`
    );

    console.log(
      `📄 Template: ${templateURL}`
    );


    try {

      // --------------------------------------------------------
      // 1. Получаем страницу /template
      // --------------------------------------------------------

      const templateHTML =
        await getHTML(
          templateURL
        );


      // --------------------------------------------------------
      // 2. Находим iframe
      // --------------------------------------------------------

      const previewURL =
        getPreviewURL(
          templateHTML,
          templateURL
        );


      console.log(
        `🖼️ Preview: ${previewURL}`
      );


      // --------------------------------------------------------
      // 3. Получаем содержимое iframe
      // --------------------------------------------------------

      const previewHTML =
        await getHTML(
          previewURL
        );


      // --------------------------------------------------------
      // 4. Ищем фразу именно
      //    в top-section
      // --------------------------------------------------------

      const result =
        searchInPreview(
          previewHTML
        );


      if (
        result.found
      ) {

        found.push(
          previewURL
            .replace(
              /\/preview.*$/,
              ''
            ) +
            coursePath +
            '/template'
        );


        console.log(
          '   ✅ ФРАЗА НАЙДЕНА!'
        );

      } else {

        console.log(
          '   — фраза не найдена'
        );


        if (
          result.reason
        ) {

          console.warn(
            `   ⚠️ ${result.reason}`
          );

        }

      }


    } catch (error) {

      console.error(
        '   ❌ Ошибка:',
        error
      );

    }


    processed++;


    await sleep(
      DELAY
    );

  }


  // ============================================================
  // ФИНАЛ
  // ============================================================

  console.log(
    '\n========================================'
  );

  console.log(
    '🎉 ПОИСК ЗАВЕРШЁН'
  );

  console.log(
    '========================================'
  );

  console.log(
    `Всего курсов: ${courseLinks.length}`
  );

  console.log(
    `Обработано: ${processed}`
  );

  console.log(
    `Найдено совпадений: ${found.length}`
  );


  if (
    found.length
  ) {

    console.table(
      found.map(
        url => ({
          url
        })
      )
    );


    downloadCSV();

  } else {

    console.log(
      'Совпадений не найдено.'
    );

  }

})();