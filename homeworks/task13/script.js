let masMonth = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];


(function(){
    for(let i = 0; i < masMonth.length; i++){
        document.writeln(`<div style='text-align: center; background-color: rgb(${randColor()}, ${randColor()}, ${randColor()});'>${masMonth[i]}</div>`);
    }
}());

function randColor(){
    return Math.floor(Math.random() * 256);
}