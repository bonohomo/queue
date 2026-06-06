let reg = document.querySelector(".register");

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let input = document.querySelector("input[name='variant']:checked");

    if (!input) {
        alert("Выберите вариант");
        return;
    }

    let chosen = input.parentElement.textContent.trim();

    alert(`Выбран вариант: ${chosen}`);
});