let countCop = +prompt("Введите число: ");
casingCop(countCop);

function casingCop(n) {
    let masCopCase = ["копеек", "копейка", "копейки"];
    if ((countCop % 100) >= 11 && (countCop % 100) <= 14) {
        alert(`${n} ${masCopCase[0]}`)
    } else if (n % 10 == 1) {
        alert(`${n} ${masCopCase[1]}`)
    } else if (n % 10 >= 2 && countCop % 10 <= 4) {
        alert(`${n} ${masCopCase[2]}`)
    }
    else {
        alert(`${n} ${masCopCase[0]}`)
    }
}