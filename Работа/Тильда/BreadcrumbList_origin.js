document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // НАСТРОЙКА ГОРОДОВ
    // =========================

    const cityMap = {
        "moskva": "Москва",
        "saint-petersburg": "Санкт-Петербург",
        "nizhniy-novgorod": "Нижний Новгород"
        // добавляйте остальные города
    };

    // =========================
    // БАЗОВЫЕ ДАННЫЕ
    // =========================

    const origin = window.location.origin;
    const pathname = window.location.pathname;

    // Удаляем пустые части URL
    let segments = pathname
        .split("/")
        .filter(Boolean);

    // =========================
    // ИСКЛЮЧАЕМ TPOST
    // =========================

    segments = segments.filter(segment => {
        return !segment.startsWith("tpost");
    });

    // =========================
    // СОБИРАЕМ ХЛЕБНЫЕ КРОШКИ
    // =========================

    const breadcrumbs = [];

    // Главная
    breadcrumbs.push({
        "@type": "ListItem",
        "position": 1,
        "item": {
            "@id": origin + "/",
            "name": "Главная"
        }
    });

    let currentPath = "";
    let position = 2;

    segments.forEach((segment, index) => {

        currentPath += "/" + segment;

        let name = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, l => l.toUpperCase());

        // =========================
        // ГОРОДА ИЗ СЛОВАРЯ
        // =========================

        if (cityMap[segment]) {
            name = cityMap[segment];
        }

        // =========================
        // ПОСЛЕДНИЙ ЭЛЕМЕНТ
        // =========================

        const isLast = index === segments.length - 1;

        if (isLast) {

            const h1 = document.querySelector("h1");

            if (h1 && h1.textContent.trim()) {
                name = h1.textContent.trim();
            } else {

                const title = document.title
                    .split("|")[0]
                    .trim();

                if (title) {
                    name = title;
                }
            }
        }

        breadcrumbs.push({
            "@type": "ListItem",
            "position": position,
            "item": {
                "@id": origin + currentPath,
                "name": name
            }
        });

        position++;
    });

    // =========================
    // СОЗДАЕМ JSON-LD
    // =========================

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs
    };

    // =========================
    // ВСТАВЛЯЕМ В HEAD
    // =========================

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);

    document.head.appendChild(script);

});