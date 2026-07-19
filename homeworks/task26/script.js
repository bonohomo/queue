let ptrnSelect = document.querySelector("#pattern");
let img = document.querySelector("#img");


ptrnSelect.addEventListener("change", function () {
    let chosen = Number(ptrnSelect.value);

    switch (chosen) {
        case 0:
            img.src = 'horseshoe.jpg';
            break;
        case 500:
            img.src = 'dragon.jpg';
            break;
        case 800:
            img.src = 'eleph.jpg';
            break;
        case 1200:
            img.src = 'ship.jpg';
            break;
        default:
            img.src = 'horseshoe.jpg';
            break;
    }
});

function calculate() {
    let sizePrice = Number(document.getElementById("size").value);
    let patternPrice = Number(document.getElementById("pattern").value);
    let count = Number(document.getElementById("count").value);

    let total = (sizePrice + patternPrice) * count;

    document.getElementById("result").textContent =
        "Итоговая стоимость: " + total + " ₽";
}

