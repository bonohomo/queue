alert("Введите 10 чисел массива");
let mas = new Array(10);
for (let i = 0; i < 10; i++) {
    mas[i] = +prompt(`Введите ${i + 1} число:`);
}
document.writeln("Изначальный массив: " + mas.join(", ") + "<br>");

let max = mas[0];
let maxIndex = 0;
for (let i = 1; i < mas.length; i++) {
    if (mas[i] > max) {
        max = mas[i];
        maxIndex = i;
    }
}

for (let i = maxIndex; i > 0; i--) {
    mas[i] = mas[i - 1];
}
mas[0] = max;

document.writeln("MAX: " + max + "<br>");
document.writeln("Массив: " + mas.join(", ") + "<br>");