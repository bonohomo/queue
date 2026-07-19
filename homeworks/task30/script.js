let modal = document.querySelector('#modal');

document.querySelector('#btn').addEventListener('click', function () {
    modal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

let form = document.forms["myForm"];
form.addEventListener("submit", formData);

function formData(event) {
    event.preventDefault();

    let name = form.nm.value;
    let email = form.eml.value;
    let question = form.qst.value;

    console.log("Имя: ", name);
    console.log("Электронная почта: ", email);
    console.log("Вопрос: ", question);
}