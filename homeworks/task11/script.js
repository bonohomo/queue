let arr = new Array(9);

alert(`Пожалуйста, введите ${arr.length} чисел`);
for(let i = 0; i < arr.length; i++){
    arr[i] = +prompt(`Введите ${i + 1} число`);
}

let arrSort = arr.filter(n => n % 3 == 0);
arrSort = arrSort.filter(n => n !== 0);

document.writeln("Введённые числа: " + arr.join(", ") + "<br>");
document.writeln("Числа кратные трём: " +arrSort.join(", ") + "<br>");