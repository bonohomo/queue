(async () => {

  // ============================================================
  // 👇 ВСТАВЬ СЮДА ID, КОТОРЫЕ НУЖНО ПЕРЕСОБРАТЬ
  // ============================================================

  const IDS = [
    '3-5',
    '3-257',
    '5-34',
    '5-39',
    '5-48',
    '22-39'
  ];

  // ============================================================
  // НАСТРОЙКИ
  // ============================================================

  const BASE = location.origin;

  const COLUMNS = [
    'id',
    'key1',
    'key2',

    'seo.title',
    'seo.description',

    'template.h1',

    'template.link-section-title',
    'template.link-section-text',
    'template.link-section-tag',
    'template.link-section-card1',
    'template.link-section-card2',
    'template.link-section-card3',
    'template.link-section-card4',

    'template.study-section-title',
    'template.study-section-card1',
    'template.study-section-card2',
    'template.study-section-card3',
    'template.study-section-card4',

    'error'
  ];

  // ============================================================
  // ПРОВЕРКА ID
  // ============================================================

  if (!Array.isArray(IDS) || !IDS.length) {

    throw new Error(
      'Массив IDS пуст. Добавь ID в начале скрипта.'
    );
  }

  const invalidIds =
    IDS.filter(
      id =>
        !/^\d+(?:-\d+)+$/.test(
          String(id)
        )
    );

  if (invalidIds.length) {

    throw new Error(
      `Некорректные ID: ${invalidIds.join(', ')}`
    );
  }

  // Убираем дубли, сохраняя порядок

  const uniqueIds = [
    ...new Set(
      IDS.map(String)
    )
  ];

  console.log(
    `🎯 Получено ID для пересбора: ${uniqueIds.length}`
  );

  console.log(
    uniqueIds
  );

  // ============================================================
  // УПРАВЛЕНИЕ
  // ============================================================

  let stopRequested = false;

  // ============================================================
  // УТИЛИТЫ
  // ============================================================

  const sleep = ms =>
    new Promise(
      resolve =>
        setTimeout(
          resolve,
          ms
        )
    );

  function cleanText(value) {

    if (value == null) {
      return '';
    }

    return String(value)
      .replace(/\r\n/g, '\n')
      .trim();
  }

  function getField(
    doc,
    selectors
  ) {

    for (
      const selector of selectors
    ) {

      const el =
        doc.querySelector(
          selector
        );

      if (!el) {
        continue;
      }

      if (
        'value' in el
      ) {

        return cleanText(
          el.value
        );
      }

      return cleanText(
        el.textContent
      );
    }

    return '';
  }

  function parseHTML(html) {

    return new DOMParser()
      .parseFromString(
        html,
        'text/html'
      );
  }

  // ============================================================
  // ЗАГРУЗКА HTML
  // ============================================================

  async function fetchHTML(
    url,
    attempts = 3
  ) {

    let lastError;

    for (
      let attempt = 1;
      attempt <= attempts;
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

        if (!response.ok) {

          throw new Error(
            `HTTP ${response.status}`
          );
        }

        const html =
          await response.text();

        if (
          !html ||
          html.length < 1000
        ) {

          throw new Error(
            'Получен слишком короткий HTML'
          );
        }

        return html;

      } catch (error) {

        lastError = error;

        console.warn(
          `⚠️ Ошибка загрузки`,
          url,
          `попытка ${attempt}/${attempts}`,
          error
        );

        if (
          attempt < attempts
        ) {

          await sleep(
            1500 * attempt
          );
        }
      }
    }

    throw lastError;
  }

  // ============================================================
  // KEY1 / KEY2
  // ============================================================

  function extractKeys(doc) {

    const keys = [];

    // ----------------------------------------------------------
    // Основной вариант:
    //
    // /education/teenagers/adults
    // ----------------------------------------------------------

    const paragraphs = [
      ...doc.querySelectorAll('p')
    ];

    for (
      const el of paragraphs
    ) {

      const text =
        cleanText(
          el.textContent
        );

      const match =
        text.match(
          /^\/education\/([^?#\s]+)/
        );

      if (!match) {
        continue;
      }

      const parts =
        match[1]
          .replace(
            /\/+$/,
            ''
          )
          .split('/')
          .filter(Boolean);

      for (
        const part of parts
      ) {

        if (
          !keys.includes(part)
        ) {

          keys.push(part);
        }

        if (
          keys.length === 2
        ) {

          break;
        }
      }

      if (
        keys.length === 2
      ) {

        break;
      }
    }

    // ----------------------------------------------------------
    // Запасной вариант
    // ----------------------------------------------------------

    if (
      keys.length < 2
    ) {

      const bodyText =
        cleanText(
          doc.body?.innerText || ''
        );

      const matches = [
        ...bodyText.matchAll(
          /\/education\/([^\s?#]+)/g
        )
      ];

      for (
        const match of matches
      ) {

        const parts =
          match[1]
            .replace(
              /\/+$/,
              ''
            )
            .split('/')
            .filter(Boolean);

        for (
          const part of parts
        ) {

          if (
            !keys.includes(part)
          ) {

            keys.push(part);
          }

          if (
            keys.length === 2
          ) {

            break;
          }
        }

        if (
          keys.length === 2
        ) {

          break;
        }
      }
    }

    return {

      key1:
        keys[0] || '',

      key2:
        keys[1] || ''

    };
  }

  // ============================================================
  // SEO
  // ============================================================

  function extractSEO(doc) {

    return {

      title:
        getField(
          doc,
          [
            'textarea[data-path="title"]',
            'input[data-path="title"]'
          ]
        ),

      description:
        getField(
          doc,
          [
            'textarea[data-path="description"]',
            'input[data-path="description"]'
          ]
        )

    };
  }

  // ============================================================
  // TEMPLATE
  // ============================================================

  function extractTemplate(doc) {

    return {

      h1:
        getField(
          doc,
          [
            'textarea[name="params.h1"]',
            'input[name="params.h1"]',
            'textarea[data-path="h1"]',
            'input[data-path="h1"]'
          ]
        ),

      linkSectionTitle:
        getField(
          doc,
          [
            'textarea[name="params.link-section-title"]',
            'input[name="params.link-section-title"]',
            'textarea[data-path="params.link-section-title"]',
            'input[data-path="params.link-section-title"]'
          ]
        ),

      linkSectionText:
        getField(
          doc,
          [
            'textarea[name="params.link-section-text"]',
            'input[name="params.link-section-text"]',
            'textarea[data-path="params.link-section-text"]',
            'input[data-path="params.link-section-text"]'
          ]
        ),

      linkSectionTag:
        getField(
          doc,
          [
            'textarea[name="params.link-section-tag"]',
            'input[name="params.link-section-tag"]',
            'textarea[data-path="params.link-section-tag"]',
            'input[data-path="params.link-section-tag"]'
          ]
        ),

      linkSectionCard1:
        getField(
          doc,
          [
            'textarea[name="params.link-section-card1"]',
            'input[name="params.link-section-card1"]',
            'textarea[data-path="params.link-section-card1"]',
            'input[data-path="params.link-section-card1"]'
          ]
        ),

      linkSectionCard2:
        getField(
          doc,
          [
            'textarea[name="params.link-section-card2"]',
            'input[name="params.link-section-card2"]',
            'textarea[data-path="params.link-section-card2"]',
            'input[data-path="params.link-section-card2"]'
          ]
        ),

      linkSectionCard3:
        getField(
          doc,
          [
            'textarea[name="params.link-section-card3"]',
            'input[name="params.link-section-card3"]',
            'textarea[data-path="params.link-section-card3"]',
            'input[data-path="params.link-section-card3"]'
          ]
        ),

      linkSectionCard4:
        getField(
          doc,
          [
            'textarea[name="params.link-section-card4"]',
            'input[name="params.link-section-card4"]',
            'textarea[data-path="params.link-section-card4"]',
            'input[data-path="params.link-section-card4"]'
          ]
        ),

      studySectionTitle:
        getField(
          doc,
          [
            'textarea[name="params.study-section-title"]',
            'input[name="params.study-section-title"]',
            'textarea[data-path="params.study-section-title"]',
            'input[data-path="params.study-section-title"]'
          ]
        ),

      studySectionCard1:
        getField(
          doc,
          [
            'textarea[name="params.study-section-card1"]',
            'input[name="params.study-section-card1"]',
            'textarea[data-path="params.study-section-card1"]',
            'input[data-path="params.study-section-card1"]'
          ]
        ),

      studySectionCard2:
        getField(
          doc,
          [
            'textarea[name="params.study-section-card2"]',
            'input[name="params.study-section-card2"]',
            'textarea[data-path="params.study-section-card2"]',
            'input[data-path="params.study-section-card2"]'
          ]
        ),

      studySectionCard3:
        getField(
          doc,
          [
            'textarea[name="params.study-section-card3"]',
            'input[name="params.study-section-card3"]',
            'textarea[data-path="params.study-section-card3"]',
            'input[data-path="params.study-section-card3"]'
          ]
        ),

      studySectionCard4:
        getField(
          doc,
          [
            'textarea[name="params.study-section-card4"]',
            'input[name="params.study-section-card4"]',
            'textarea[data-path="params.study-section-card4"]',
            'input[data-path="params.study-section-card4"]'
          ]
        )

    };
  }

  // ============================================================
  // ОБРАБОТКА ОДНОГО ID
  // ============================================================

  async function processPair(
    id,
    index
  ) {

    const detailURL =
      `${BASE}/@editor/course-label-pairs/${id}`;

    const templateURL =
      `${BASE}/@editor/course-label-pairs/${id}/template`;

    const seoURL =
      `${BASE}/@editor/course-label-pairs/${id}/seo`;

    console.log(
      `\n📦 [${index}/${uniqueIds.length}] ${id}`
    );

    console.log(
      `   Основная: ${detailURL}`
    );

    console.log(
      `   Template: ${templateURL}`
    );

    console.log(
      `   SEO:      ${seoURL}`
    );

    const result = {

      id,

      key1: '',
      key2: '',

      'seo.title': '',
      'seo.description': '',

      'template.h1': '',

      'template.link-section-title': '',
      'template.link-section-text': '',
      'template.link-section-tag': '',
      'template.link-section-card1': '',
      'template.link-section-card2': '',
      'template.link-section-card3': '',
      'template.link-section-card4': '',

      'template.study-section-title': '',
      'template.study-section-card1': '',
      'template.study-section-card2': '',
      'template.study-section-card3': '',
      'template.study-section-card4': '',

      error: ''

    };

    try {

      // --------------------------------------------------------
      // ОСНОВНАЯ СТРАНИЦА
      // --------------------------------------------------------

      const detailHTML =
        await fetchHTML(
          detailURL
        );

      const detailDoc =
        parseHTML(
          detailHTML
        );

      // --------------------------------------------------------
      // KEYS
      // --------------------------------------------------------

      const keys =
        extractKeys(
          detailDoc
        );

      result.key1 =
        keys.key1;

      result.key2 =
        keys.key2;

      console.log(
        `   🔑 ${result.key1} + ${result.key2}`
      );

      // --------------------------------------------------------
      // SEO + TEMPLATE
      // --------------------------------------------------------

      const [
        seoHTML,
        templateHTML
      ] =
        await Promise.all([

          fetchHTML(
            seoURL
          ),

          fetchHTML(
            templateURL
          )

        ]);

      const seoDoc =
        parseHTML(
          seoHTML
        );

      const templateDoc =
        parseHTML(
          templateHTML
        );

      // --------------------------------------------------------
      // SEO
      // --------------------------------------------------------

      const seo =
        extractSEO(
          seoDoc
        );

      result[
        'seo.title'
      ] =
        seo.title;

      result[
        'seo.description'
      ] =
        seo.description;

      console.log(
        `   📝 SEO: ${
          seo.title
            ? 'OK'
            : 'ПУСТО'
        }`
      );

      // --------------------------------------------------------
      // TEMPLATE
      // --------------------------------------------------------

      const template =
        extractTemplate(
          templateDoc
        );

      result[
        'template.h1'
      ] =
        template.h1;

      result[
        'template.link-section-title'
      ] =
        template.linkSectionTitle;

      result[
        'template.link-section-text'
      ] =
        template.linkSectionText;

      result[
        'template.link-section-tag'
      ] =
        template.linkSectionTag;

      result[
        'template.link-section-card1'
      ] =
        template.linkSectionCard1;

      result[
        'template.link-section-card2'
      ] =
        template.linkSectionCard2;

      result[
        'template.link-section-card3'
      ] =
        template.linkSectionCard3;

      result[
        'template.link-section-card4'
      ] =
        template.linkSectionCard4;

      result[
        'template.study-section-title'
      ] =
        template.studySectionTitle;

      result[
        'template.study-section-card1'
      ] =
        template.studySectionCard1;

      result[
        'template.study-section-card2'
      ] =
        template.studySectionCard2;

      result[
        'template.study-section-card3'
      ] =
        template.studySectionCard3;

      result[
        'template.study-section-card4'
      ] =
        template.studySectionCard4;

      const templateFound =
        Object.values(
          template
        ).some(Boolean);

      if (
        !templateFound
      ) {

        throw new Error(
          'Не найдено ни одного поля Template'
        );
      }

      console.log(
        '   📄 Template: OK'
      );

      console.log(
        '   ✅ Готово'
      );

      return result;

    } catch (error) {

      console.error(
        `   ❌ Ошибка ${id}`,
        error
      );

      result.error =
        error?.message ||
        String(error);

      return result;
    }
  }

  // ============================================================
  // CSV
  // ============================================================

  function escapeCSV(value) {

    const str =
      value == null
        ? ''
        : String(value);

    return `"${str.replace(
      /"/g,
      '""'
    )}"`;
  }

  function downloadCSV(
    rows
  ) {

    const csv = [

      COLUMNS
        .map(escapeCSV)
        .join(';'),

      ...rows.map(
        row =>
          COLUMNS
            .map(
              column =>
                escapeCSV(
                  row[column]
                )
            )
            .join(';')
      )

    ].join('\r\n');

    const blob =
      new Blob(
        [
          '\uFEFF' + csv
        ],
        {
          type:
            'text/csv;charset=utf-8;'
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        'a'
      );

    a.href = url;

    a.download =
      `course-label-pairs-recheck-${new Date()
        .toISOString()
        .slice(0, 10)}.csv`;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(
      url
    );
  }

  // ============================================================
  // XLSX
  // ============================================================

  async function loadSheetJS() {

    if (
      window.XLSX
    ) {
      return true;
    }

    const urls = [

      'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js',

      'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'

    ];

    for (
      const url of urls
    ) {

      try {

        await new Promise(
          (resolve, reject) => {

            const script =
              document.createElement(
                'script'
              );

            script.src =
              url;

            script.onload =
              resolve;

            script.onerror =
              reject;

            document.head.appendChild(
              script
            );
          }
        );

        if (
          window.XLSX
        ) {

          return true;
        }

      } catch (e) {

        console.warn(
          'SheetJS не загрузился:',
          url
        );
      }
    }

    return false;
  }

  async function downloadXLSX(
    rows
  ) {

    if (
      !rows.length
    ) {

      console.warn(
        'Нет данных для скачивания'
      );

      return;
    }

    const loaded =
      await loadSheetJS();

    if (
      !loaded
    ) {

      console.warn(
        'SheetJS недоступен → CSV'
      );

      downloadCSV(
        rows
      );

      return;
    }

    const data =
      rows.map(
        row => {

          const result = {};

          for (
            const column of COLUMNS
          ) {

            result[column] =
              row[column] ?? '';
          }

          return result;
        }
      );

    const worksheet =
      XLSX.utils.json_to_sheet(
        data,
        {
          header:
            COLUMNS
        }
      );

    worksheet['!cols'] =
      COLUMNS.map(
        column => {

          if (
            column === 'id'
          ) {

            return {
              wch: 12
            };
          }

          if (
            column === 'key1' ||
            column === 'key2'
          ) {

            return {
              wch: 30
            };
          }

          if (
            column === 'error'
          ) {

            return {
              wch: 45
            };
          }

          return {
            wch: 45
          };
        }
      );

    worksheet['!autofilter'] = {
      ref:
        worksheet['!ref']
    };

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Recheck'
    );

    XLSX.writeFile(
      workbook,
      `course-label-pairs-recheck-${new Date()
        .toISOString()
        .slice(0, 10)}.xlsx`
    );

    console.log(
      `📊 Новая таблица скачана: ${rows.length} строк`
    );
  }

  // ============================================================
  // КОМАНДА STOP
  // ============================================================

  window.coursePairsRecheck = {

    stop: async () => {

      stopRequested =
        true;

      console.log(
        '🛑 Останавливаю обработку...'
      );

      await sleep(300);

      await downloadXLSX(
        results
      );

      console.log(
        `⏹️ Остановлено. Скачано: ${results.length} строк`
      );
    },

    download: async () => {

      await downloadXLSX(
        results
      );

    },

    status: () => {

      console.table({

        'Всего ID':
          uniqueIds.length,

        'Готово':
          results.length,

        'Осталось':
          uniqueIds.length -
          results.length,

        'Остановлен':
          stopRequested

      });

    }

  };

  // ============================================================
  // ЗАПУСК
  // ============================================================

  const results = [];

  console.log(
    '\n======================================'
  );

  console.log(
    '🔧 RECHECK ПАР РУБРИК'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Всего ID: ${uniqueIds.length}`
  );

  console.log(
    '\n🟢 Команды:'
  );

  console.log(
    'coursePairsRecheck.stop() — остановить + скачать'
  );

  console.log(
    'coursePairsRecheck.download() — скачать текущие данные'
  );

  console.log(
    'coursePairsRecheck.status() — показать статус'
  );

  // ============================================================
  // ОБРАБАТЫВАЕМ ID СТРОГО ПО ПОРЯДКУ
  // ============================================================

  for (
    let i = 0;
    i < uniqueIds.length;
    i++
  ) {

    if (
      stopRequested
    ) {

      break;
    }

    const id =
      uniqueIds[i];

    const result =
      await processPair(
        id,
        i + 1
      );

    results.push(
      result
    );

    // Небольшая пауза
    await sleep(300);
  }

  // ============================================================
  // ФИНАЛЬНЫЙ ЭКСПОРТ
  // ============================================================

  if (
    !stopRequested
  ) {

    console.log(
      '\n🎉 Все указанные ID обработаны'
    );

    await downloadXLSX(
      results
    );

  } else {

    console.log(
      '\n⏹️ Обработка была остановлена'
    );
  }

  // ============================================================
  // ИТОГ
  // ============================================================

  const errors =
    results.filter(
      row => row.error
    );

  const noKeys =
    results.filter(
      row =>
        !row.key1 ||
        !row.key2
    );

  console.log(
    '\n======================================'
  );

  console.log(
    '             РЕЗУЛЬТАТ'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Запрошено ID: ${uniqueIds.length}`
  );

  console.log(
    `Обработано: ${results.length}`
  );

  console.log(
    `Ошибок: ${errors.length}`
  );

  console.log(
    `Без обоих ключей: ${noKeys.length}`
  );

  if (
    errors.length
  ) {

    console.warn(
      '❌ Ошибки:',
      errors.map(
        row => ({
          id: row.id,
          error: row.error
        })
      )
    );
  }

  console.log(
    '======================================'
  );

})();