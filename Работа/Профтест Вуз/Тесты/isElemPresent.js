(() => {
    const required = [
        "Высокооплачиваемые профессии",
        "Детям",
        "Карьерный центр",
        "Очное обучение",
        "Платное обучение",
        "Подросткам",
        "Помощь с трудоустройством",
        "Практическое обучение",
        "Портфолио",
        "Аккредитованный колледж",
        "Базы данных",
        "Без ЕГЭ",
        "Без ОГЭ",
        "Диплом государственного образца",
        "Дистанционное обучение",
        "Легкое поступление",
        "Образовательный кредит",
        "Отсрочка от армии",
        "JavaScript",
        "Информатика",
        "Программирование",
        "IT-специальности",
        "Математика",
        "Java",
        "Айдентика",
        "Менеджмент",
        "Недорогое обучение",
        "Операционные системы",
        "Разработка игр",
        "Разработка мобильных приложений",
        "Рекламный дизайн",
        "Тестирование ПО",
        "Управление проектами",
        "Экономика",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Backend",
        "HTML",
        "MySQL",
        "3D-дизайн",
        "Веб-дизайн",
        "Веб-разработка",
        "Дизайн",
        "Дизайн интерьеров",
        "Психология общения",
        "Angular",
        "AutoCAD",
        "Autodesk 3ds Max",
        "CSS",
        "Frontend",
        "Fullstack",
        "Oracle",
        "React",
        "UI дизайн",
        "UX дизайн",
        ".NET",
        "3D-дизайнер",
        "Безопасность",
        "Маркетинг",
        "Физика",
        "Android",
        "C#",
        "C++",
        "PHP",
        "Unity"
    ];

    const pageItems = new Set(
        [...document.querySelectorAll(".styles_list__qUhRr h6")]
            .map(el => el.textContent.trim())
    );

    const extra = [...pageItems].filter(item => !required.includes(item));

    if (extra.length) {
        console.log("➕ Лишние элементы на странице:");
        console.table(extra);
    } else {
        console.log("✅ Лишних элементов нет.");
    }

    const missing = [];

    required.forEach(name => {
        if (!pageItems.has(name)) {
            console.warn(`❌ Не найден: ${name}`);
            missing.push(name);
        }
    });

    console.log(`\nПроверено: ${required.length}`);
    console.log(`Найдено: ${required.length - missing.length}`);
    console.log(`Отсутствует: ${missing.length}`);

    if (missing.length === 0) {
        console.log("✅ Все элементы присутствуют.");
    } else {
        console.table(missing);
    }
})();