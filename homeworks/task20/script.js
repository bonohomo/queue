let btn = document.querySelector("#but");
btn.addEventListener("click", swap);

function swap() {
    let images = document.querySelectorAll("#gallery img");

    let from = +document.getElementById("from").value - 1;
    let to = +document.getElementById("to").value - 1;

    if (from >= 0 && to >= 0 && from < images.length && to < images.length) {

        let temp = images[from].src;
        images[from].src = images[to].src;
        images[to].src = temp;

    } else {
        alert("Неверные номера");
    }
}