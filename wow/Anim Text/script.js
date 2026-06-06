document.writeln("<div id='dt'>Создание анимированного текста</div>");

let tag = document.querySelector("#dt");
let text = document.querySelector("#dt").innerHTML;
let i = 0;

window.addEventListener("load", animText)

function animText(){
    tag.innerHTML = text.substring(0, i); // от какого-то индекса до другого индекса получить значения
    i++; 
    
    setTimeout(animText, 100); // создаёт рекурсию с таймером
}