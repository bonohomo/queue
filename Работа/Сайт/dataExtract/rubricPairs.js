document.querySelectorAll('.styles_list__qUhRr h6').forEach(elem => {console.log(elem.textContent)});

// ПОЛУЧИТЬ СПИСОК ПАР РУБРИК СО ВСЕХ СТРАНИЦ ПАГИНАЦИИ СРАЗУ

(async () => {

    const result = [];

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    while (true) {

        // Ждём появления списка
        while (!document.querySelector('.styles_list__qUhRr h6')) {
            await sleep(100);
        }

        // Собираем все тексты на странице
        const items = [...document.querySelectorAll('.styles_list__qUhRr h6')]
            .map(el => el.textContent.trim());

        result.push(...items);

        console.log(`Получено ${items.length}. Всего ${result.length}`);

        // Находим кнопку "Следующая"
        const nextButton = [...document.querySelectorAll('.mantine-Pagination-control')]
            .at(-2);

        // Если кнопка недоступна — дошли до конца
        if (
            nextButton.disabled ||
            nextButton.dataset.disabled === "true"
        ) {
            break;
        }

        // Запоминаем первый элемент
        const first = items[0];

        // Переходим на следующую страницу
        nextButton.click();

        // Ждём, пока список обновится
        while (true) {

            await sleep(200);

            const current = document.querySelector('.styles_list__qUhRr h6');

            if (
                current &&
                current.textContent.trim() !== first
            ) {
                break;
            }
        }
    }

    // Создаём текстовый файл
    const blob = new Blob(
        [result.join('\n')],
        { type: 'text/plain;charset=utf-8' }
    );

    // Скачиваем файл
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pairs.txt';
    a.click();

    // Освобождаем память
    URL.revokeObjectURL(a.href);

    console.log('Готово!');
    console.log(`Всего собрано: ${result.length}`);

})();