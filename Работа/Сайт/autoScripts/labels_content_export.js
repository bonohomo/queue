
(async () => {
  // ============================================================
  // НАСТРОЙКИ
  // ============================================================

  const BASE = location.origin;
  const LIST_URL = `${BASE}/@editor/course-labels`;
  const EXPECTED_TOTAL = 312;

  const STORAGE_KEY = 'courseLabelsExport_v4';

  const COLUMNS = [
    'id',
    'key',
    'seo.title',
    'seo.description',

    'template.h1',
    'template.anchor',
    'template.anchor-text',

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
  // УТИЛИТЫ
  // ============================================================

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  function cleanText(value) {
    if (value == null) return '';
    return String(value).replace(/\r\n/g, '\n').trim();
  }

  function getField(doc, selectors) {
    for (const selector of selectors) {
      const el = doc.querySelector(selector);

      if (el) {
        if ('value' in el) {
          return cleanText(el.value);
        }

        return cleanText(el.textContent);
      }
    }

    return '';
  }

  async function fetchHTML(url, attempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        const response = await fetch(url, {
          credentials: 'include',
          cache: 'no-store'
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();

        if (!html || html.length < 1000) {
          throw new Error('Получен слишком короткий HTML');
        }

        return html;

      } catch (error) {
        lastError = error;

        console.warn(
          `Ошибка загрузки ${url}, попытка ${attempt}/${attempts}`,
          error
        );

        if (attempt < attempts) {
          await sleep(1000 * attempt);
        }
      }
    }

    throw lastError;
  }

  function parseHTML(html) {
    return new DOMParser().parseFromString(html, 'text/html');
  }

  // ============================================================
  // ПОЛУЧАЕМ ССЫЛКИ НА РУБРИКИ
  // ============================================================

  const links = [
    ...document.querySelectorAll(
      'a[href^="/@editor/course-labels/"]'
    )
  ]
    .map(a => {
      const href = a.getAttribute('href') || '';

      const match = href.match(
        /^\/@editor\/course-labels\/(\d+)\/?$/
      );

      if (!match) return null;

      return {
        id: Number(match[1]),
        href
      };
    })
    .filter(Boolean);

  // Убираем дубли
  const uniqueLinks = [
    ...new Map(links.map(item => [item.id, item])).values()
  ].sort((a, b) => a.id - b.id);

  console.log(`Найдено ссылок: ${uniqueLinks.length}`);

  if (uniqueLinks.length !== EXPECTED_TOTAL) {
    console.warn(
      `⚠️ Ожидалось ${EXPECTED_TOTAL} ссылок, найдено ${uniqueLinks.length}`
    );
  }

  if (!uniqueLinks.length) {
    throw new Error(
      'Не найдены ссылки на рубрики. Запусти скрипт именно на странице /@editor/course-labels'
    );
  }

  // ============================================================
  // ВОССТАНОВЛЕНИЕ ПРОГРЕССА
  // ============================================================

  let state;

  try {
    state = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || 'null'
    );
  } catch {
    state = null;
  }

  if (
    !state ||
    !Array.isArray(state.results)
  ) {
    state = {
      index: 0,
      results: []
    };
  }

  console.log(
    `Продолжаем с ${state.index + 1} из ${uniqueLinks.length}`
  );

  // ============================================================
  // ПОЛУЧЕНИЕ KEY
  // ============================================================

  function extractKey(doc) {
    const educationElements = [
      ...doc.querySelectorAll('p')
    ];

    for (const el of educationElements) {
      const text = cleanText(el.textContent);

      const match = text.match(
        /^\/education\/([^/?#\s]+)\/?$/
      );

      if (match) {
        return match[1];
      }
    }

    return '';
  }

  // ============================================================
  // SEO
  // ============================================================

  function extractSEO(doc) {
    return {
      title: getField(doc, [
        'textarea[data-path="title"]',
        'input[data-path="title"]'
      ]),

      description: getField(doc, [
        'textarea[data-path="description"]',
        'input[data-path="description"]'
      ])
    };
  }

  // ============================================================
  // TEMPLATE
  // ============================================================

  function extractTemplate(doc) {
    return {
      // ----------------------------------------------------------
      // H1
      // ----------------------------------------------------------

      h1: getField(doc, [
        'textarea[name="params.h1"]',
        'input[name="params.h1"]',
        'textarea[data-path="h1"]',
        'input[data-path="h1"]'
      ]),

      // ----------------------------------------------------------
      // ANCHOR
      // ----------------------------------------------------------

      anchor: getField(doc, [
        'textarea[name="params.anchor"]',
        'input[name="params.anchor"]',
        'textarea[data-path="params.anchor"]',
        'input[data-path="params.anchor"]'
      ]),

      anchorText: getField(doc, [
        'textarea[name="params.anchor-text"]',
        'input[name="params.anchor-text"]',
        'textarea[data-path="params.anchor-text"]',
        'input[data-path="params.anchor-text"]'
      ]),

      // ----------------------------------------------------------
      // LINK SECTION
      // ----------------------------------------------------------

      linkSectionTitle: getField(doc, [
        'textarea[name="params.link-section-title"]',
        'input[name="params.link-section-title"]',
        'textarea[data-path="params.link-section-title"]',
        'input[data-path="params.link-section-title"]'
      ]),

      linkSectionText: getField(doc, [
        'textarea[name="params.link-section-text"]',
        'input[name="params.link-section-text"]',
        'textarea[data-path="params.link-section-text"]',
        'input[data-path="params.link-section-text"]'
      ]),

      linkSectionTag: getField(doc, [
        'textarea[name="params.link-section-tag"]',
        'input[name="params.link-section-tag"]',
        'textarea[data-path="params.link-section-tag"]',
        'input[data-path="params.link-section-tag"]'
      ]),

      linkSectionCard1: getField(doc, [
        'textarea[name="params.link-section-card1"]',
        'input[name="params.link-section-card1"]',
        'textarea[data-path="params.link-section-card1"]',
        'input[data-path="params.link-section-card1"]'
      ]),

      linkSectionCard2: getField(doc, [
        'textarea[name="params.link-section-card2"]',
        'input[name="params.link-section-card2"]',
        'textarea[data-path="params.link-section-card2"]',
        'input[data-path="params.link-section-card2"]'
      ]),

      linkSectionCard3: getField(doc, [
        'textarea[name="params.link-section-card3"]',
        'input[name="params.link-section-card3"]',
        'textarea[data-path="params.link-section-card3"]',
        'input[data-path="params.link-section-card3"]'
      ]),

      linkSectionCard4: getField(doc, [
        'textarea[name="params.link-section-card4"]',
        'input[name="params.link-section-card4"]',
        'textarea[data-path="params.link-section-card4"]',
        'input[data-path="params.link-section-card4"]'
      ]),

      // ----------------------------------------------------------
      // STUDY SECTION
      // ----------------------------------------------------------

      studySectionTitle: getField(doc, [
        'textarea[name="params.study-section-title"]',
        'input[name="params.study-section-title"]',
        'textarea[data-path="params.study-section-title"]',
        'input[data-path="params.study-section-title"]'
      ]),

      studySectionCard1: getField(doc, [
        'textarea[name="params.study-section-card1"]',
        'input[name="params.study-section-card1"]',
        'textarea[data-path="params.study-section-card1"]',
        'input[data-path="params.study-section-card1"]'
      ]),

      studySectionCard2: getField(doc, [
        'textarea[name="params.study-section-card2"]',
        'input[name="params.study-section-card2"]',
        'textarea[data-path="params.study-section-card2"]',
        'input[data-path="params.study-section-card2"]'
      ]),

      studySectionCard3: getField(doc, [
        'textarea[name="params.study-section-card3"]',
        'input[name="params.study-section-card3"]',
        'textarea[data-path="params.study-section-card3"]',
        'input[data-path="params.study-section-card3"]'
      ]),

      studySectionCard4: getField(doc, [
        'textarea[name="params.study-section-card4"]',
        'input[name="params.study-section-card4"]',
        'textarea[data-path="params.study-section-card4"]',
        'input[data-path="params.study-section-card4"]'
      ])
    };
  }

  // ============================================================
  // ОБРАБОТКА ОДНОЙ РУБРИКИ
  // ============================================================

  async function processItem(item, number) {
    const id = item.id;

    const detailURL =
      `${BASE}/@editor/course-labels/${id}`;

    const templateURL =
      `${BASE}/@editor/course-labels/${id}/template`;

    const seoURL =
      `${BASE}/@editor/course-labels/${id}/seo`;

    console.log(
      `\n📦 [${number}/${uniqueLinks.length}] ID ${id}`
    );

    console.log(`   Основная: ${detailURL}`);
    console.log(`   Шаблон:   ${templateURL}`);
    console.log(`   SEO:      ${seoURL}`);

    const result = {
      id,
      key: '',

      'seo.title': '',
      'seo.description': '',

      'template.h1': '',
      'template.anchor': '',
      'template.anchor-text': '',

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
      // ОСНОВНАЯ СТРАНИЦА — ОТТУДА БЕРЁМ KEY
      // --------------------------------------------------------

      console.log('   → Получаю key...');

      const detailHTML = await fetchHTML(detailURL);
      const detailDoc = parseHTML(detailHTML);

      result.key = extractKey(detailDoc);

      console.log(
        `   ✓ key: ${result.key || 'НЕ НАЙДЕН'}`
      );

      // --------------------------------------------------------
      // SEO + TEMPLATE ПАРАЛЛЕЛЬНО
      // --------------------------------------------------------

      console.log('   → Загружаю SEO + Шаблон...');

      const [seoHTML, templateHTML] = await Promise.all([
        fetchHTML(seoURL),
        fetchHTML(templateURL)
      ]);

      const seoDoc = parseHTML(seoHTML);
      const templateDoc = parseHTML(templateHTML);

      // --------------------------------------------------------
      // SEO
      // --------------------------------------------------------

      const seo = extractSEO(seoDoc);

      result['seo.title'] = seo.title;
      result['seo.description'] = seo.description;

      console.log(
        `   ✓ SEO title: ${seo.title ? 'OK' : 'ПУСТО'}`
      );

      console.log(
        `   ✓ SEO description: ${seo.description ? 'OK' : 'ПУСТО'}`
      );

      // --------------------------------------------------------
      // TEMPLATE
      // --------------------------------------------------------

      const template = extractTemplate(templateDoc);

      result['template.h1'] = template.h1;
      result['template.anchor'] = template.anchor;
      result['template.anchor-text'] = template.anchorText;

      result['template.link-section-title'] =
        template.linkSectionTitle;

      result['template.link-section-text'] =
        template.linkSectionText;

      result['template.link-section-tag'] =
        template.linkSectionTag;

      result['template.link-section-card1'] =
        template.linkSectionCard1;

      result['template.link-section-card2'] =
        template.linkSectionCard2;

      result['template.link-section-card3'] =
        template.linkSectionCard3;

      result['template.link-section-card4'] =
        template.linkSectionCard4;

      result['template.study-section-title'] =
        template.studySectionTitle;

      result['template.study-section-card1'] =
        template.studySectionCard1;

      result['template.study-section-card2'] =
        template.studySectionCard2;

      result['template.study-section-card3'] =
        template.studySectionCard3;

      result['template.study-section-card4'] =
        template.studySectionCard4;

      // Проверяем, действительно ли получили шаблон
      const templateValues = [
        template.h1,
        template.anchor,
        template.anchorText,
        template.linkSectionTitle,
        template.linkSectionText,
        template.linkSectionTag,
        template.linkSectionCard1,
        template.linkSectionCard2,
        template.linkSectionCard3,
        template.linkSectionCard4,
        template.studySectionTitle,
        template.studySectionCard1,
        template.studySectionCard2,
        template.studySectionCard3,
        template.studySectionCard4
      ];

      const templateFound =
        templateValues.some(Boolean);

      if (!templateFound) {
        throw new Error(
          'Не найдено ни одного поля Шаблона'
        );
      }

      console.log('   ✓ Шаблон получен');

      console.log(
        `   ✓ anchor: ${template.anchor ? 'OK' : 'ПУСТО'}`
      );

      console.log(
        `   ✓ anchor-text: ${template.anchorText ? 'OK' : 'ПУСТО'}`
      );

      if (!result.key) {
        console.warn('   ⚠️ key не найден');
      }

      return result;

    } catch (error) {
      console.error(
        `   ❌ Ошибка ID ${id}:`,
        error
      );

      result.error =
        error?.message ||
        String(error);

      return result;
    }
  }

  // ============================================================
  // ОСНОВНОЙ ЦИКЛ
  // ============================================================

  for (
    let i = state.index;
    i < uniqueLinks.length;
    i++
  ) {
    const item = uniqueLinks[i];

    const result = await processItem(
      item,
      i + 1
    );

    state.results.push(result);
    state.index = i + 1;

    // Сохраняем после каждой рубрики
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
      );
    } catch (e) {
      console.warn(
        'Не удалось сохранить прогресс в localStorage',
        e
      );
    }

    // Небольшая пауза между рубриками
    await sleep(300);
  }

  console.log(
    `\n🎉 Обработка завершена: ${state.results.length} рубрик`
  );

  // ============================================================
  // CSV
  // ============================================================

  function escapeCSV(value) {
    const str = value == null
      ? ''
      : String(value);

    return `"${str.replace(/"/g, '""')}"`;
  }

  function downloadCSV(rows) {
    const csv = [
      COLUMNS.map(escapeCSV).join(';'),

      ...rows.map(row =>
        COLUMNS
          .map(column => escapeCSV(row[column]))
          .join(';')
      )
    ].join('\r\n');

    const blob = new Blob(
      ['\uFEFF' + csv],
      {
        type: 'text/csv;charset=utf-8;'
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download =
      `course-labels-export-${new Date()
        .toISOString()
        .slice(0, 10)}.csv`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);

    console.log('📄 CSV скачан');
  }

  // ============================================================
  // XLSX
  // ============================================================

  async function loadSheetJS() {
    if (window.XLSX) {
      return true;
    }

    const urls = [
      'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
    ];

    for (const url of urls) {
      try {
        await new Promise((resolve, reject) => {
          const script =
            document.createElement('script');

          script.src = url;

          script.onload = resolve;
          script.onerror = reject;

          document.head.appendChild(script);
        });

        if (window.XLSX) {
          return true;
        }

      } catch (e) {
        console.warn(
          'Не удалось загрузить SheetJS:',
          url
        );
      }
    }

    return false;
  }

  async function downloadXLSX(rows) {
    const loaded = await loadSheetJS();

    if (!loaded) {
      console.warn(
        '⚠️ SheetJS недоступен. Скачиваю CSV.'
      );

      downloadCSV(rows);
      return;
    }

    const data = rows.map(row => {
      const result = {};

      for (const column of COLUMNS) {
        result[column] =
          row[column] ?? '';
      }

      return result;
    });

    const worksheet =
      XLSX.utils.json_to_sheet(
        data,
        {
          header: COLUMNS
        }
      );

    // Ширина колонок
    worksheet['!cols'] = COLUMNS.map(column => {
      if (column === 'id') {
        return { wch: 8 };
      }

      if (column === 'key') {
        return { wch: 32 };
      }

      if (column === 'error') {
        return { wch: 35 };
      }

      return { wch: 45 };
    });

    // Фильтр
    worksheet['!autofilter'] = {
      ref: worksheet['!ref']
    };

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Course Labels'
    );

    XLSX.writeFile(
      workbook,
      `course-labels-export-${new Date()
        .toISOString()
        .slice(0, 10)}.xlsx`
    );

    console.log('📊 XLSX скачан');
  }

  // ============================================================
  // ЭКСПОРТ
  // ============================================================

  await downloadXLSX(state.results);

  // ============================================================
  // СТАТИСТИКА
  // ============================================================

  const withoutKey =
    state.results.filter(
      row => !row.key
    );

  const withErrors =
    state.results.filter(
      row => row.error
    );

  console.log('\n==============================');
  console.log('       ГОТОВО');
  console.log('==============================');

  console.log(
    `Всего обработано: ${state.results.length}`
  );

  console.log(
    `key найден: ${
      state.results.length - withoutKey.length
    }`
  );

  console.log(
    `key НЕ найден: ${withoutKey.length}`
  );

  console.log(
    `Ошибок: ${withErrors.length}`
  );

  if (withoutKey.length) {
    console.warn(
      '⚠️ ID без key:',
      withoutKey.map(row => row.id)
    );
  }

  if (withErrors.length) {
    console.warn(
      '❌ ID с ошибками:',
      withErrors.map(row => ({
        id: row.id,
        error: row.error
      }))
    );
  }

  console.log(
    '\n💡 Чтобы полностью начать заново, выполни:'
  );

  console.log(
    `localStorage.removeItem('${STORAGE_KEY}')`
  );

})();