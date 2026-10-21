(async () => {

    // ============================================================
    // НАСТРОЙКИ
    // ============================================================

    const BASE = location.origin;

    // v3 специально, чтобы не использовать старый список из 99 ссылок
    const STORAGE_KEY =
        'courseLabelPairsExport_v3';

    const EXPECTED_PER_PAGE = 50;

    const COLUMNS = [
        'id',
        'key1',
        'key2',

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
    // СОСТОЯНИЕ
    // ============================================================

    let stopRequested = false;

    let state = {
        results: [],
        processedIds: [],
        links: []
    };

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY) || 'null'
            );

        if (
            saved &&
            Array.isArray(saved.results)
        ) {

            state = {
                results: saved.results || [],
                processedIds: saved.processedIds || [],
                links: saved.links || []
            };

            console.log(
                `🔄 Восстановлено результатов: ${stattemplatee.results.length}`
            );

            console.log(
                `🔗 Сохранено ссылок: ${state.links.length}`
            );
        }

    } catch (e) {

        console.warn(
            'Не удалось восстановить прогресс',
            e
        );
    }

    // ============================================================
    // СОХРАНЕНИЕ
    // ============================================================

    function saveState() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );

        } catch (e) {

            console.warn(
                '⚠️ Не удалось сохранить прогресс',
                e
            );
        }
    }

    // ============================================================
    // УТИЛИТЫ
    // ============================================================

    const sleep = ms =>
        new Promise(
            resolve => setTimeout(resolve, ms)
        );

    function cleanText(value) {

        if (value == null) return '';

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
                doc.querySelector(selector);

            if (!el) continue;

            if ('value' in el) {
                return cleanText(el.value);
            }

            return cleanText(
                el.textContent
            );
        }

        return '';
    }

    // ============================================================
    // FETCH
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
                    `Ошибка загрузки: ${url}`,
                    `попытка ${attempt}/${attempts}`,
                    error
                );

                if (
                    attempt < attempts
                ) {

                    await sleep(
                        1000 * attempt
                    );
                }
            }
        }

        throw lastError;
    }

    function parseHTML(html) {

        return new DOMParser()
            .parseFromString(
                html,
                'text/html'
            );
    }

    // ============================================================
    // ПОЛУЧЕНИЕ ССЫЛОК С ТЕКУЩЕЙ СТРАНИЦЫ
    // ============================================================

    function getCurrentLinks() {

        const links = [

            ...document.querySelectorAll(
                'ul.styles_list__qUhRr a[href^="/@editor/course-label-pairs/"]'
            )

        ]

            .map(a => {

                const href =
                    a.getAttribute('href') || '';

                /*
                  Примеры:
        
                  /@editor/course-label-pairs/2-3
                  /@editor/course-label-pairs/2-4
                  /@editor/course-label-pairs/12-345
        
                  ID пары состоит из чисел через "-"
                */

                const match =
                    href.match(
                        /^\/@editor\/course-label-pairs\/(\d+(?:-\d+)+)\/?$/
                    );

                if (!match) {
                    return null;
                }

                return {

                    id: match[1],

                    href

                };
            })

            .filter(Boolean);

        return [
            ...new Map(
                links.map(
                    item => [
                        item.id,
                        item
                    ]
                )
            ).values()
        ];
    }

    // ============================================================
    // KEY1 / KEY2
    // ============================================================

    function extractKeys(doc) {

        /*
          Поддерживаются оба варианта:
    
          /education/teenagers/adults
    
          или
    
          /education/teenagers
          /education/adults
    
          В обоих случаях порядок сохраняется.
        */

        const keys = [];

        // ----------------------------------------------------------
        // Сначала ищем конкретно <p>
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
                    .replace(/\/+$/, '')
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

            const matches =
                [
                    ...bodyText.matchAll(
                        /\/education\/([^\s?#]+)/g
                    )
                ];

            for (
                const match of matches
            ) {

                const parts =
                    match[1]
                        .replace(/\/+$/, '')
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

            // ----------------------------------------------------------
            // ANCHOR
            // ----------------------------------------------------------

            anchor:
                getField(
                    doc,
                    [
                        'textarea[name="params.anchor"]',
                        'input[name="params.anchor"]',
                        'textarea[data-path="params.anchor"]',
                        'input[data-path="params.anchor"]'
                    ]
                ),

            anchorText:
                getField(
                    doc,
                    [
                        'textarea[name="params.anchor-text"]',
                        'input[name="params.anchor-text"]',
                        'textarea[data-path="params.anchor-text"]',
                        'input[data-path="params.anchor-text"]'
                    ]
                ),

            // ----------------------------------------------------------
            // LINK SECTION
            // ----------------------------------------------------------

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
    // ⭐ САМАЯ ВАЖНАЯ ЧАСТЬ — КНОПКА NEXT
    // ============================================================

    function getNextButton() {

        /*
          НЕ используем:
    
          buttons[buttons.length - 1]
    
          потому что последняя кнопка может быть
          "перейти на последнюю страницу".
    
          Ищем именно SVG с твоим path.
        */

        const NEXT_PATH =
            'M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z';

        const buttons = [
            ...document.querySelectorAll(
                'button.mantine-Pagination-control'
            )
        ];

        const nextButton =
            buttons.find(
                button => {

                    const path =
                        button.querySelector(
                            'svg path'
                        );

                    return (
                        path &&
                        path.getAttribute('d') ===
                        NEXT_PATH
                    );
                }
            );

        return nextButton || null;
    }

    // ============================================================
    // ПРОВЕРКА DISABLED
    // ============================================================

    function isDisabled(button) {

        if (!button) {
            return true;
        }

        return (

            button.disabled ||

            button.hasAttribute(
                'disabled'
            ) ||

            button.getAttribute(
                'aria-disabled'
            ) === 'true'

        );
    }

    // ============================================================
    // ПОЛУЧАЕМ ТЕКУЩУЮ СТРАНИЦУ
    // ============================================================

    function getPageSignature() {

        return getCurrentLinks()
            .map(
                item => item.id
            )
            .join('|');
    }

    // ============================================================
    // ОЖИДАНИЕ НОВОЙ СТРАНИЦЫ
    // ============================================================

    async function waitForPageChange(
        oldSignature,
        timeout = 20000
    ) {

        const started =
            Date.now();

        while (
            Date.now() - started <
            timeout
        ) {

            if (
                stopRequested
            ) {
                return false;
            }

            await sleep(300);

            const newSignature =
                getPageSignature();

            if (
                newSignature &&
                newSignature !==
                oldSignature
            ) {

                return true;
            }
        }

        return false;
    }

    // ============================================================
    // СБОР ПАГИНАЦИИ
    // ============================================================

    async function collectAllLinks() {

        console.log(
            '\n📚 НАЧИНАЮ СБОР ВСЕХ ПАР'
        );

        const allLinks =
            new Map();

        let page = 1;

        while (
            !stopRequested
        ) {

            const currentLinks =
                getCurrentLinks();

            console.log(
                `\n📄 Страница ${page}`
            );

            console.log(
                `   Найдено пар: ${currentLinks.length}`
            );

            if (
                currentLinks.length
            ) {

                console.log(
                    `   Первые ID: ${currentLinks
                        .slice(0, 5)
                        .map(
                            item => item.id
                        )
                        .join(', ')
                    }`
                );

                console.log(
                    `   Последние ID: ${currentLinks
                        .slice(-5)
                        .map(
                            item => item.id
                        )
                        .join(', ')
                    }`
                );
            }

            // --------------------------------------------------------
            // Добавляем текущие ссылки
            // --------------------------------------------------------

            for (
                const item of currentLinks
            ) {

                allLinks.set(
                    item.id,
                    item
                );
            }

            console.log(
                `   📦 Всего накоплено: ${allLinks.size}`
            );

            // --------------------------------------------------------
            // Ищем ИМЕННО NEXT
            // --------------------------------------------------------

            const nextButton =
                getNextButton();

            if (
                !nextButton
            ) {

                console.log(
                    '🏁 Кнопка NEXT не найдена.'
                );

                console.log(
                    '🏁 Скорее всего это последняя страница.'
                );

                break;
            }

            console.log(
                '   ➡️ Кнопка NEXT найдена'
            );

            // --------------------------------------------------------
            // Проверяем disabled
            // --------------------------------------------------------

            if (
                isDisabled(nextButton)
            ) {

                console.log(
                    '🏁 Кнопка NEXT disabled — последняя страница.'
                );

                break;
            }

            // --------------------------------------------------------
            // Запоминаем текущую страницу
            // --------------------------------------------------------

            const oldSignature =
                getPageSignature();

            // --------------------------------------------------------
            // Нажимаем NEXT
            // --------------------------------------------------------

            console.log(
                '   🖱️ Нажимаю NEXT...'
            );

            nextButton.click();

            // --------------------------------------------------------
            // Ждём изменения списка
            // --------------------------------------------------------

            const changed =
                await waitForPageChange(
                    oldSignature
                );

            if (
                !changed
            ) {

                console.warn(
                    '⚠️ Список не изменился.'
                );

                console.warn(
                    '⚠️ Останавливаю пагинацию, чтобы не собирать дубли.'
                );

                break;
            }

            page++;

            await sleep(500);

            // --------------------------------------------------------
            // Сохраняем промежуточный список
            // --------------------------------------------------------

            state.links =
                [...allLinks.values()];

            saveState();

            console.log(
                `   💾 Список сохранён: ${allLinks.size}`
            );
        }

        state.links =
            [...allLinks.values()];

        saveState();

        console.log(
            '\n================================'
        );

        console.log(
            `🎉 ПАГИНАЦИЯ ЗАВЕРШЕНА`
        );

        console.log(
            `🔗 Всего уникальных пар: ${state.links.length}`
        );

        console.log(
            `📄 Страниц обработано: ${page}`
        );

        console.log(
            '================================'
        );

        return state.links;
    }

    // ============================================================
    // ОБРАБОТКА ОДНОЙ ПАРЫ
    // ============================================================

    async function processPair(
        item,
        number,
        total
    ) {

        const id =
            item.id;

        const detailURL =
            `${BASE}/@editor/course-label-pairs/${id}`;

        const templateURL =
            `${BASE}/@editor/course-label-pairs/${id}/template`;

        const seoURL =
            `${BASE}/@editor/course-label-pairs/${id}/seo`;

        console.log(
            `\n📦 [${number}/${total}] ID ${id}`
        );

        const result = {

            id,

            key1: '',
            key2: '',

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
            // KEY1 / KEY2
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
                `   ✓ key1: ${result.key1 || 'НЕ НАЙДЕН'
                }`
            );

            console.log(
                `   ✓ key2: ${result.key2 || 'НЕ НАЙДЕН'
                }`
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
                `   ✓ SEO: ${seo.title &&
                    seo.description
                    ? 'OK'
                    : 'частично'
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
                'template.anchor'
            ] =
                template.anchor;

            result[
                'template.anchor-text'
            ] =
                template.anchorText;

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
                    'Не найдено ни одного поля Шаблона'
                );
            }

            console.log(
                '   ✓ Шаблон: OK'
            );

            return result;

        } catch (error) {

            console.error(
                `   ❌ Ошибка ID ${id}`,
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
            `course-label-pairs-${new Date()
                .toISOString()
                .slice(0, 10)}.csv`;

        document.body.appendChild(a);

        a.click();

        a.remove();

        URL.revokeObjectURL(
            url
        );

        console.log(
            `📄 CSV скачан: ${rows.length} строк`
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
                '⚠️ Нет данных для скачивания'
            );

            return;
        }

        const loaded =
            await loadSheetJS();

        if (
            !loaded
        ) {

            console.warn(
                '⚠️ SheetJS недоступен → скачиваю CSV'
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
                            wch: 40
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
            'Course Label Pairs'
        );

        XLSX.writeFile(
            workbook,
            `course-label-pairs-${new Date()
                .toISOString()
                .slice(0, 10)}.xlsx`
        );

        console.log(
            `📊 XLSX скачан: ${rows.length} строк`
        );
    }

    // ============================================================
    // ⭐ КОМАНДЫ УПРАВЛЕНИЯ
    // ============================================================

    window.coursePairsExporter = {

        // ----------------------------------------------------------
        // STOP
        // ----------------------------------------------------------

        stop: async () => {

            if (
                stopRequested
            ) {

                console.log(
                    '⏹️ Остановка уже запрошена'
                );

                return;
            }

            console.log(
                '\n🛑 ОСТАНОВКА ЗАПРОШЕНА'
            );

            stopRequested =
                true;

            saveState();

            await sleep(300);

            console.log(
                `📦 Собрано результатов: ${state.results.length
                }`
            );

            console.log(
                `🔗 Собрано ссылок: ${state.links.length
                }`
            );

            await downloadXLSX(
                state.results
            );

            console.log(
                '⏹️ Скрипт остановлен.'
            );
        },

        // ----------------------------------------------------------
        // DOWNLOAD
        // ----------------------------------------------------------

        download: async () => {

            console.log(
                `📊 Скачиваю ${state.results.length
                } результатов...`
            );

            await downloadXLSX(
                state.results
            );
        },

        // ----------------------------------------------------------
        // STATUS
        // ----------------------------------------------------------

        status: () => {

            console.table({

                'Ссылок собрано':
                    state.links.length,

                'Результатов':
                    state.results.length,

                'Остановлен':
                    stopRequested

            });
        },

        // ----------------------------------------------------------
        // RESET
        // ----------------------------------------------------------

        reset: () => {

            localStorage.removeItem(
                STORAGE_KEY
            );

            console.log(
                '🗑️ Прогресс v3 удалён.'
            );

            console.log(
                'Можно запускать скрипт заново.'
            );
        }

    };

    console.log(
        '\n🟢 Команды управления:'
    );

    console.log(
        'coursePairsExporter.stop() — остановить + скачать'
    );

    console.log(
        'coursePairsExporter.download() — скачать текущие данные'
    );

    console.log(
        'coursePairsExporter.status() — статус'
    );

    console.log(
        'coursePairsExporter.reset() — удалить прогресс'
    );

    // ============================================================
    // СБОР ССЫЛОК
    // ============================================================

    let links;

    if (
        state.links.length
    ) {

        links =
            state.links;

        console.log(
            `🔄 Использую сохранённые ${links.length} ссылок`
        );

    } else {

        links =
            await collectAllLinks();
    }

    if (
        stopRequested
    ) {
        return;
    }

    if (
        !links.length
    ) {

        console.error(
            '❌ Не найдено ни одной пары'
        );

        return;
    }

    // ============================================================
    // ОБРАБОТКА ПАР
    // ============================================================

    const processedSet =
        new Set(
            state.processedIds
        );

    console.log(
        `\n🚀 НАЧИНАЮ ОБРАБОТКУ ${links.length} ПАР`
    );

    for (
        let i = 0;
        i < links.length;
        i++
    ) {

        if (
            stopRequested
        ) {
            break;
        }

        const item =
            links[i];

        if (
            processedSet.has(
                item.id
            )
        ) {

            console.log(
                `⏭️ ${item.id} уже обработан`
            );

            continue;
        }

        const result =
            await processPair(
                item,
                i + 1,
                links.length
            );

        state.results.push(
            result
        );

        state.processedIds.push(
            item.id
        );

        processedSet.add(
            item.id
        );

        saveState();

        console.log(
            `💾 Прогресс: ${state.results.length
            }/${links.length}`
        );

        await sleep(300);
    }

    // ============================================================
    // ФИНАЛ
    // ============================================================

    if (
        !stopRequested
    ) {

        console.log(
            '\n🎉 ВСЕ ПАРЫ ОБРАБОТАНЫ!'
        );

        await downloadXLSX(
            state.results
        );

    } else {

        console.log(
            '\n⏹️ Обработка остановлена.'
        );
    }

    // ============================================================
    // СТАТИСТИКА
    // ============================================================

    const noKey1 =
        state.results.filter(
            row => !row.key1
        );

    const noKey2 =
        state.results.filter(
            row => !row.key2
        );

    const errors =
        state.results.filter(
            row => row.error
        );

    console.log(
        '\n================================'
    );

    console.log(
        '             ГОТОВО'
    );

    console.log(
        '================================'
    );

    console.log(
        `🔗 Найдено пар: ${links.length}`
    );

    console.log(
        `📦 Обработано: ${state.results.length}`
    );

    console.log(
        `🔑 Без key1: ${noKey1.length}`
    );

    console.log(
        `🔑 Без key2: ${noKey2.length}`
    );

    console.log(
        `❌ Ошибок: ${errors.length}`
    );

    if (
        noKey1.length
    ) {

        console.warn(
            'ID без key1:',
            noKey1.map(
                row => row.id
            )
        );
    }

    if (
        noKey2.length
    ) {

        console.warn(
            'ID без key2:',
            noKey2.map(
                row => row.id
            )
        );
    }

    if (
        errors.length
    ) {

        console.warn(
            'Ошибки:',
            errors.map(
                row => ({
                    id: row.id,
                    error: row.error
                })
            )
        );
    }

})();