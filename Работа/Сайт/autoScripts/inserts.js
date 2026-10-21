(() => {
    // ==============================
    // НАСТРОЙКИ
    // ==============================

    const shortcuts = {
        'q': 'Сохранили старую цену',
        'w': 'Классы с профессиональным оборудованием',
        'e': 'ИИ-инструменты для учебы и будущей работы',
        'r': 'Обучение на практике',
        't': 'Живые занятия в прямом эфире'
    };


    // ==============================
    // ВСТАВКА ТЕКСТА
    // ==============================

    function insertText(text) {
        const element = document.activeElement;

        // Обычный input / textarea
        if (
            element &&
            (
                element.tagName === 'INPUT' ||
                element.tagName === 'TEXTAREA'
            )
        ) {
            const start = element.selectionStart;
            const end = element.selectionEnd;

            element.setRangeText(
                text,
                start,
                end,
                'end'
            );

            // Сообщаем сайту, что значение изменилось
            element.dispatchEvent(new Event('input', {
                bubbles: true
            }));

            element.dispatchEvent(new Event('change', {
                bubbles: true
            }));

            return;
        }

        // Contenteditable
        if (element && element.isContentEditable) {
            document.execCommand('insertText', false, text);
            return;
        }

        console.log('⚠️ Сначала поставь курсор в поле, куда нужно вставить текст.');
    }


    // ==============================
    // ОБРАБОТКА КЛАВИШ
    // ==============================

    function handleKeydown(event) {
        // Не срабатываем с Ctrl / Alt / Cmd / Shift
        if (
            event.ctrlKey ||
            event.altKey ||
            event.metaKey ||
            event.shiftKey
        ) {
            return;
        }

        const text = shortcuts[event.key];

        if (text === undefined) {
            return;
        }

        event.preventDefault();

        insertText(text);

        console.log(`⌨️ ${event.key} → "${text}"`);
    }


    // ==============================
    // ЗАПУСК
    // ==============================

    window.removeEventListener('keydown', handleKeydown);
    window.addEventListener('keydown', handleKeydown);

    console.log('✅ Быстрые вставки включены!');
    console.table(shortcuts);
})();