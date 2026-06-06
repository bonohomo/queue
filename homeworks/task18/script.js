let masMonth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let masWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let res = document.querySelector("#result");

let but = document.querySelector("#show");
but.style.cursor = "pointer";
but.addEventListener("click", function(){
    let d = new Date();
    let indexM = d.getMonth();
    let indexW = d.getDay();
    
    res.textContent = `Сегодня: ${d.getDate()} ${masMonth[indexM]} ${d.getFullYear()}, ${masWeek[indexW]}`;
});