let sum = 0;
let count = 0;
let product = 1;

while (true) {
    let num = Number(prompt("Введите число (0 для выхода):"));

    if (num === 0) {
        break;
    }

    if (num % 2 !== 0 && num >= 10 && num <= 30) {
        sum = sum + num;
        count = count + 1;
        product = product * num;
    }
}

if (count > 0) {
    let average = sum / count;

    document.writeln("Произведение нечётных чисел от 10 до 30: " + product + "<br>");
    document.writeln("Среднее арифметическое этих чисел: " + average);
} else {
    document.writeln("Подходящих чисел не было введено");
}