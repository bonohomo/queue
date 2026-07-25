(async () => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    while (true) {

        // Если появились результаты — заканчиваем
        if (document.querySelector(".result-card")) {
            console.log("✅ Тест завершён");
            break;
        }

        // --------------------------
        // Вопрос с вариантами ответа
        // --------------------------

        const answers = [...document.querySelectorAll(".answer-btn")];

        if (answers.length) {

            const randomIndex = Math.floor(Math.random() * answers.length);

            answers[randomIndex].click();

            await sleep(150);

            const nextBtn = document.getElementById("nextBtn");

            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }

            await sleep(500);

            continue;
        }

        // --------------------------
        // Имя
        // --------------------------

        const nameInput = document.querySelector('input[name="name"]');

        if (nameInput) {

            nameInput.focus();

            nameInput.value = "ПрограммаТестирования";

            nameInput.dispatchEvent(new Event("input", { bubbles: true }));

            await sleep(100);

            document.getElementById("nextBtn").click();

            await sleep(500);

            continue;
        }

        // --------------------------
        // Телефон
        // --------------------------

        const phoneInput = document.querySelector('input[name="phone"]');

        if (phoneInput) {

            phoneInput.focus();

            phoneInput.value = "+74950857070";

            phoneInput.dispatchEvent(new Event("input", { bubbles: true }));

            await sleep(100);

            document.getElementById("nextBtn").click();

            await sleep(500);

            continue;
        }

        // --------------------------
        // Email
        // --------------------------

        const emailInput = document.querySelector('input[name="email"]');

        if (emailInput) {

            emailInput.focus();

            emailInput.value = "your@email.com";

            emailInput.dispatchEvent(new Event("input", { bubbles: true }));

            await sleep(100);

            document.getElementById("nextBtn").click();

            await sleep(500);

            continue;
        }

        // Если ничего не нашли — немного ждём
        await sleep(200);

    }

})();