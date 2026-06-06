let countCop = +prompt("Введите число от 1 до 99:");
if(countCop >= 1 && countCop <= 99){
    if(countCop >= 11 && countCop <= 14){ 
        alert(`${countCop} копеек`)
    } else if(countCop % 10 == 1){
        alert(`${countCop} копейка`)
    } else if(countCop % 10 >= 2 && countCop % 10 <= 4){
        alert(`${countCop} копейки`)
    }
    else {
        alert(`${countCop} копеек`)
    }
} else{
    alert("Недопустимое значение");
}