"use strict";

/* let firstName = "Admin"; // var, let, const

console.log(firstName);

let age = 25;
console.log(age);

let aS_$30 = "Hello";
console.log(aS_$30); */

// let a = "Hello";
// console.log(a, typeof(a));
// console.log(a, typeof a);

// let b = 5; инициализация - создание переменной и присвоение ей значения
// b = 10;
// b = "Hello"

// console.log(b)

// let a;

// a = 10;

// console.log(a)


// let str1 = "Двойные \nкавычки";
// let str2 = 'Одинарные кавычки';

// console.log(str1 + " " + str2)

// let str = "E:\\Fontend512\\folder\\file.txt";
// console.log(str);

// let str1 = "Новый\t текст";
// console.log(str1);

// let a = 5;
// let str = `Обратные ${a} ${a + 2}
//     кавычки`;
// console.log(str);

/* let firstName = "Sergey";
// alert("Hello, " + firstName); конкатенация
alert(`Hello, ${firstName}`);

let day */

/* let dayCount = 365;
let earthName = "Земля";
let peopleCount = "7 млрд.";
let sunName = "Солнца";

alert(`Мы живем на планете ${earthName}, она делает один оборот вокруг ${sunName} за ${dayCount} дней. Население нашей планеты составляет примерно ${peopleCount} человек.`) */

// const WEEK = 7;
// WEEK = 9;
// console.log(WEEK);

/* confirm("Знаете ли вы HTML?") // задаём вопрос и узнаём ответ. */

// let res = confirm("Знаете ли вы HTML?");
// console.log(res);
// if (res){
//     alert("Пора учить JavaScript")
// } else{
//     alert("Нужно выучить HTML")
// }

// let a = null;
// console.log(a, typeof a)

/* let res = prompt("Ваше имя", "Виктор");
alert(`Привет, ${res}!`)
console.log(res); */

/* let a = 12;
let b = 8;

console.log("+:", a + b);
console.log("-:", a - b);
console.log("*:", a * b);
console.log(".:", a / b);
console.log("**:", a ** b); // новый оператор, возведение в степень
console.log("%:", a % b) // есть число 12, есть 8, 12 делим на 8, целым получаем 1, то, что остаётся до 12 - 4 */

/* let num1 = +prompt("Введите первое число:", 5);
let num2 = parseInt(prompt("Введите второе число:", 7));
let num3 = +Number(prompt("Введите третье число:", 3));

let sum = num1 + num2 + num3;
console.log("Сумма: ", num1 + num2 + num3);
console.log("Произведение: ", num1 * num2 * num3);
console.log("Среднее арифметическое: ", sum / 3); */

/* console.log(parseInt("21.84")); // сделать целым числом 21
console.log(parseFloat("21.84")); // вывести вещественное число 21.84
console.log(Number("21.84")); // вывести число 21.84
console.log(Number("21.8454545").toFixed(1)); // округлить 21.86

console.log(+"21.84") // + - преобразует в числовые данные, как сверху. + = +1 * ..., конкатенация
console.log(+1 * "21.84")

console.log("6" * "3") // - отработает, хотя умножаем две строки, но он их проверяет на то, являются ли они числами */

/* let a = 23; // Number
let b = +"6"; // string

console.log(a + b);
 */

/* let a = 23; // Number
let b = +"6"; // string

console.log("Результат: " + (a + b)); */

/* let num = prompt("Введите число: ", 4);

console.log("Квадрат числда: " + num ** 2);
console.log("Куб числа: " + num ** 3);
console.log("4-ая степень чсила: " + num ** 4); */

/* let num = 4321; // нужно перевсти в 1234

let one, two, three, four;

console.log(num);

one = num % 10; // 1
console.log(one);
num = parseInt(num / 10); // 432
two = num % 10; // 2
console.log(two);
num = parseInt(num / 10); // 43
three = num % 10;
console.log(three);
num = parseInt(num / 10); // 4
four = num % 10;
console.log(four);

console.log(one * 1000 + two * 100 + three * 10 + four);

console.log("\n 1. 4321 / 10 и выводим число, которое остаётся получить до 4321 = 1, \n 2. 4321 делим на 10 и отбрасываем остаток (parseInt) = 432 \n 3. 432 делим на 10 и сохраняем число, которое остаётся до 432 = 2 \n 4. 432 делим на 10 и отбрасываем остаток (parseInt) = 43 \n 5. ...")

let que = confirm("Кот любит малышку?")
if (que){
    alert("Точная правда!")
} else{
    alert("Как ты могла это нажать?!")
} */


// ИНКРЕМЕНТЫ

/* 

// a = a + 1;
++a; // 1 префикксная
b++; // 1 постфиксная
--a; // -1
b--; // -1
console.log(a);
console.log(b); */

/* let a = 0, b = 0;
let c = ++a; // a = a +1 (++a = a +1)
console.log(a); // 1
console.log(c); // 1
let d = b++; // b = b + 1
console.log(b); // 1
console.log(d); // 0 */

/* let a = 0, b = 0;
let c = a++ + 2; // c = 0 + 2  a = 1
let d = ++b + 2; // 
console.log(a); // 1
console.log(b); // 1
console.log(c); // 2
console.log(d); // 3 */

/* let a = 1;
let b = a++; // a = 2
let c = b + 5 + a; // c = 1 + 5 + 2
console.log(c); // 8 */

// ОПЕРАТОРЫ РАБОТАЮТ ПО ПРИОРИТЕТУ СЛЕВА НАПРАВО!!! СНАЧАЛА b=a, а потом a++!!!


/* let a = 1;
let b = ++a; // a = 2
let c = b + 5 + a; // c = 1 + 5 + 2
console.log(c); // 8 */

/* let a = 5;
let b = a++ - 3; // b = 5 - 3; a = 5 + 1
console.log(a); // 6
console.log(b); // 2

console.log(5 + 3 * 2 - 5 ** 2) */

/* let a = 5;
let b = 3;
let c = a++ * ++b; // 5 * 4
console.log(a); // 6
console.log(b); // 4
console.log(c); // 20 */

/* let a = 3;
let b = ++a - 3; // b = 4 - 3 => 1
let c = a++ + 2 + ++b; // c = 4 + 2 + 2
console.log(a); // 5
console.log(b); // 2
console.log(c); // 8 */


/* let a = 3;
console.log(a + 1); // 4, существующее значение увеличили на 1
console.log(a); // 3, берём заданное значение, консоль лог не меняет значение переменной (еслии нет оператора присвоить = ) */

/* let a = 3;
console.log(a++); // a = a + 1
console.log(a); // 4 */

/* let a = 3;
let b = a--;
console.log(a); // 2
console.log(b); // 3 */


/* let a = 3;
let b = 5 + a-- - 1; // 5 + 3 - 1
console.log(a); // 2
console.log(b); // 7 */


/* let a = 3;
let b = 5 + --a - 1; // 5 + 2 - 1
console.log(a); // 2
console.log(b); // 6 */

// ПЕРЕСТАНОВКА -- И ++ В ПРЕФИКС ИЛИ ПОСТФИКС МЕНЯЕТ ПРИОРИТЕТ ДЕЙСТВИЯ, НО ОНО ДОЛЖНО БЫТЬ ИСПОЛНЕНО, ПЕРЕНАЗНАЧИТ ЗНАЧЕНИЕ ПЕРЕМЕННОЙ. ПЕРЕМЕННАЯ ДОЛЖНА БЫТЬ ОБЪЯВЛЕНА ДО ЭТОГО ДЕЙСТВИЯ



/* let a = 3;
a = a + 5;
console.log(a); // 8  */

// =

/* let a = 3;
a += 5; // a = a + 5 - СОКРАЩЁННАЯ ФОРМА, МОЖЕТ БЫТЬ И С ДРУГИМИ ОПЕРАТОРАМИ
console.log(a); // 8 

a -= 3; // a = a - 3;
console.log(a); // 5

a **= 2;
console.log(a); */


/* let a = +prompt("Введите 1 число:", 5);
let b = +prompt("Введите 2 число:", 4);
let c = +prompt("Введите 3 число:", 6);
let sum = a + b + c;
console.log("Сумма чисел: " + sum) */

// =

/* let sum = +prompt("Введите 1 число:", 5);
sum += +prompt("Введите 2 число:", 4); // sum = sum + ...
sum += +prompt("Введите 3 число:", 6); // += - перезапись текущей переменной
console.log("Сумма чисел: " + sum);
 */

// ОПЕРАТОРЫ РАВЕНСТВА

/* console.log(5 == "5"); // == - ОПЕРАТОР РАВЕНСТВА, ДВОЙНОЕ БЕЗ СРАВНЕНИЯ ТИПОВ ДАННЫХ
console.log(5 === 3); // == - ОПЕРАТОР РАВЕНСТВА, ТРОЙНОЕ С УЧЁТОМ ТИПОВ ДАННЫХ

console.log(5 != "5"); // ПЯТЬ НЕ РАВНО ПЯТИ // FALSE
console.log(5 !== "5"); // ПЯТЬ НЕ РАВНО ПЯТИ (с учётом типа данных) // TRUE // !== АНАЛОГ ===

console.log(5 != 3); // true
console.log(5 !== "3"); // true // NUMBER IS NOT EQUAL STING = TRUE

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true */

/* console.log(+true) // + = Number // 1
console.log(+false) // 0

// НЕЯВНОЕ ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ

let a = 5 + true;
console.log(a); // 6 */

// УСЛОВИЯ

// 7 > 3 ? alert("7") : alert("3"); // 7 > 3 => true => 7, else 7 > 3 => false => 3

/* let age = prompt("Введите свой возраст:");
age >= 18 ? alert("Совершеннолетний") : alert("Несовершеннолетний"); */

/* let ch = prompt("Угадайте число от 1 до 10");
let num = 7;
// ch == num ? alert("Угадали") : alert("Не угадали")
ch == num ? alert("Угадали") : (ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше")); // ВЛОЖЕННЫЕ УСЛОВИЯ, их скобки не обязательны */


/* let temp = prompt("Введите температуру");

let res = temp > 30 ? "Очень жарко" // TRUE
: temp > 20 ? "Тепло" // true
: temp > 10 ? "Прохладно" // true
: temp > 0 ? "Холодно" // true
: "Очень холодно"; // false

alert(res); // 22 ==> "Тепло" */

// IF AND ELSE. if - оператор логического ветвления. условие даёт булевый оператор (true of false)

/* принцип работы, аналог тернарного оператора

if(условие) {
    истина (TRUE)
} else {
    ложь (FALSE)
} */

/* let a = 12;
let b = 0;

if(b != 0){
    let res = a / b;
    alert("Результат: " + res);
} else {
    alert("Делить на \"0\" нельзя")
} */

// ПРОВЕРКА ЧИСЛА НА ЧЁТНОСТЬ!!!

/* let value = prompt("Введите число:");

if(value % 2 == 0){
    alert("Число чётное");
} else{
    alert("Число не чётное");
} */

/* let a = 32;
let b = 22;
if (a > b){
    alert(a + " > " + b);
} 
else if(a == b){
    alert(a + " == " + b)
}
else (a < b) {
    alert(a + " < " + b);
} */

// ОПРЕДЕЛЕНИЕ ДНЯ НЕДЕЛИ

/* let day = prompt("Введите день недели цифрами:")
if (day == 1){ // неявное преобразование типов string==number
    alert("День недели - понедельник")
}
else if (day == 2){
    alert("День недели - вторник")
}
else if (day == 3){
    alert("День недели - среда")
}
else if (day == 4){
    alert("День недели - четверг")
}
else if (day == 5){
    alert("День недели - пятница")
}
else if (day == 6){
    alert("День недели - суббота")
}
else if (day == 7){
    alert("День недели - воскресенье")
}
else{
    alert("Такого дня недели не существует")
} */

// =======================================================================================
// false => "", 0, null, undefined, NaN, false
// =======================================================================================

/*1 let a = "";

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
} */

/*2 let a = 0;

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
} */

/*3 let a = null;

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
}
console.log(a); // null */

/*4 let a; // false

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
}
console.log(a); // undefined */

/*5 let a = "пять" / 2; // false

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
}
console.log(a); // NaN (Not a Number) */

/*6 let a = 5 < 3; // false

if(a){
    console.log("TRUE")
} else{
    console.log("FALSE")
}
console.log(a); // false */




// ВХОД ПО ЛОГИНУ И ПАРОЛЮ

/* let login = prompt("Введите логин:");
if (login) {
    if (login == "admin") {
        let pass = prompt("Введите пароль:");
        if (pass) {
            if (pass == "password") {
                alert("Добро пожаловать");
            } else {
                alert("Пароль неверен");
            }
        } else {
            alert("Вход отменён");
        }
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Вход отменён");
} */

// ОПЕРАТОРЫ ЛОГИЧЕСКОГО И, ИЛИ

/* if (5 > 6 && 5 == 4) {      // true && true => true
    console.log("TRUE") // false && true => false
} else {                // true && false => false
    console.log("FALSE")// false && false => false
} */

/* if (5 > 12 || 5 == 55) {      // true && true => true
    console.log("TRUE") // false && true => true
} else {                // true && false => true
    console.log("FALSE")// false && false => false
}  */

/* let age = prompt("Введите свой возраст");
if(age > 17 && age < 70){
    alert("Вы можете получать права");
} else {
    alert("Права не давать");
} */

/* let age = prompt("Введите свой возраст");
if(age < 18 || age > 69){
    alert("Права не давать");
} else {
    alert("Вы можете получать права");
} */

// ПРОВЕРКА ТРЕУГОЛЬНИКА

/* let a = prompt("Введите первую сторону:");
let b = prompt("Введите вторую сторону:");
let c = prompt("Введите третью сторону:");

if (a == b && a == c && b == c) {
    alert("Треугольник равносторонний")
}
else if (a == b || a == c || b == c) {
    alert("Треугольник равнобедренный")
} else {
    alert("Треугольник разносторонний")
} */

/* console.log("Hello");
console.log(!"Hello"); // string (fill) == true, but ! => false

if("Hello"){
    console.log("true");
} 

console.log(!"Hello"); */

// console.log(!(7==5))

//  СЧИТАЕМ ВОРОН С ПАДЕЖАМИ

/* let countBird = prompt("Введите количество ворон (от 0 до 9):", 2);
if(countBird >= 0 && countBird <= 9){
    if(countBird == 1){
        alert(`На ветке ${countBird} ворона`)
    } else if(countBird >= 2 && countBird <= 4){
        alert(`На ветке ${countBird} вороны`)
    } else {
        alert(`На ветке ${countBird} ворон`)
    }
} else{
    alert("Недопустимое значение");
} */

// УСЛОВИЕ

/* switch(условие){
    case значение_1:
        код
    break; // прерывает действие свитча
    case значение_2:
        код
    break; // прерывает действие свитча
    case значение_n:
        код
    break; // прерывает действие свитча
    default: // отработает, если никто не отработает
        код
} */

/* let a = +prompt("Введите число:");
switch(a) { // "1" === 1, то есть сравнение строгое, в том числе по типам данных, нет неявного преобразования типов
    case 1:
        alert("Код 1");
    break;
    case 2:
        alert("Код 2");
    break;
    case 2:
        alert("Код 3");
    break;
    default:
        alert("Я таких значений не знаю");
} // здесь нет необходимости ставить фигурные скобки в кейсах, т.к. есть брейк */

/* let a = +prompt("Введите результат '2 + 2':");
switch(a) {
    case 4:
        alert("Верно");
    break;
    case 5:
    case 8:
        alert("Неверно");
    break;
    default:
        alert("Я таких значений не знаю");
} */

/* let error = +prompt("Введите номер ошибки:", 200);

switch (error) {
    case 404:
        console.log("Страницы не существует");
        break;
    case 200:
        console.log("Запрос успешно обработан");
        break;
    case 500:
        console.log("Ошибка сервера");
        break;
    default:
        console.log("Неизвестная ошибка");
} */

/* let day = prompt("Введите день недели:", "суббота");

switch (day) {
    case "суббота":
        alert("Выходной день");
        break;
    case "воскресенье":
        alert("Выходной день");
        break;
    case "понедельник":
        alert("Рабочий день");
        break;
    case "вторник":
        alert("Рабочий день");
        break;
    case "среда":
        alert("Рабочий день");
        break;
    case "четверг":
        alert("Рабочий день");
        break;
    case "пятница":
        alert("Рабочий день");
        break;
    default:
        alert("Некорректный день");
} */

/* let m = +prompt("Введите номер месяца");
let n;

switch(m){
    case 1: n = "Январь"; break;
    case 2: n = "Февраль"; break;
    case 3: n = "Март"; break;
    default:
        n = "Неправильный номер месяца";
}

alert("Вы ввели: " + n); */

/* let m = +prompt("Введите номер месяца");
let n;

switch(m){
    case 12:
    case 1:
    case 2: n = "Зима"; break;
    case 3:
    case 4:
    case 5: n = "Весна"; break;
    case 6:
    case 7:
    case 8: n = "Лето"; break;
    case 9:
    case 10:
    case 11: n = "Осень"; break;
    default:
        n = "Ошибка ввода данных";
}

alert(n); */

// КАЛЬКУЛЯТОР

/* let operator = prompt("Действия: +, -, *, /, %:");
let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");

switch(operator){
    case "+":
        alert("Сумма: " + (num1 + num2));
        break;
    case "-":
        alert("Разница: " + (num1 - num2));
        break;
    case "*":
        alert("Произведение: " + num1 * num2);
        break;
    case "/":
        if(num2 == 0){
            alert("Делить на ноль нельзя")
        } else{
            alert("Частное: " + num1 / num2);
        }
        break;
    case "%":
        if(num2 == 0){
            alert("Делить на ноль нельзя")
        } else{
            alert("Остаток от деления: " + num1 % num2);
        }
        break;
        default:
            alert("Я такого оператора не знаю")
} */

// ВЫВОД ТЕКСТА В ОКНО БРАУЗЕРА

/* document.writeln("<p>Текст <br>выведен <b>в окно браузера</b><p>") // появится после <script>
document.writeln("<p><img src='1.jpg' alt=''>Ещё текст</p>") */

// ЦИКЛЫ В ПРОГРАММИРОВАНИИ

// цикл do... while (цикл с постусловием)
/* do {
    тело цикла (действие);
}while(условие(как в if, до каких пор работает цикл)); */ // если условие даёт true, то он идёт по кругу до получения значения false, тогда выполняется код ниже. но при первом заходе это не выполняется, хотя бы один раз должен выполниться

// ИТЕРАЦИЯ - ОДИН ШАГ ЦИКЛА

/* let i = 1; // особая переменная // i=0 // i - счётчик
do {
    document.writeln("Квадрат " + ++i + " равен " + i ** 2 + "<br>");
    // ++i; // лучше ставить отдельно, иначе влияет // изменение счётчика
} while (i < 8); // при неправильном условии браузер может упасть // 1<5 => идём на начало, на do */ // проверка условия // рано или поздно счётчик должен прекратить работу

/* let i = 0;
do {
    document.writeln("Это номер: " + i + "<br>");
    i = i + 5; // каждое пятое значение
} while (i <= 25); */

/* let i = 10;
do {
    document.writeln("Это номер: " + i + "<br>");
    i--;
} while (i > 0); */

/* let i = 2;
do {
    document.writeln(`i = ${i}<br>`);
    i = i + 2;
} while (i <= 20);

==

let i = 2;
do {
    document.writeln(`i = ${i}<br>`);
    i += 2; // == i = i + 2;
} while (i <= 20); */

// диапазоны пользователей

// i % 2 == 1 - нечётное число // второй вариант этого же i % 2 != 0 // третий способ i % 2 ==> остаток от деления 1 (3 напр.) => true, а если будет 2, остаток 0 => false

/* let a = +prompt("Введите начало диапазона: ");
let b = +prompt("Введите конец диапазона: ");
let i = a; // 1
let sum = 0;
do {
    if(i % 2){
        // document.writeln(i + "<br>") // 1 3 5
        sum = sum + i; // 1 = 0 + 1 // 4 = 1 + 3
    }
    i++;
} while (i <= b); // 1 <= 5
document.writeln(`Сумма целых нечетных чисел: ${sum}<br>`); */


/* let a = +prompt("Введите начало диапазона: ");
let b = +prompt("Введите конец диапазона: ");
// let i = a;
let sum = 0;
do {
    if(a % 2){
        sum += a;
    }
    a++;
} while (a <= b);
document.writeln(`Сумма целых нечетных чисел: ${sum}<br>`); */

/* let a = 5; // глобальная переменная

if(a > 0 && a < 10){
    let b = 6; // локальная переменная
    document.writeln(a);
}
document.writeln(b); // ошибка, не покажет */

/* let a = 5;

if(a > 0 && a < 10){
    let a = 6;
    document.writeln(a);
}
document.writeln(a); */

// ЦИКЛЫ WHILE (ПРЕДУСЛОВИЕ), СНАЧАЛА ПРОВЕРЯЕМ, ПОТОМ ЗАПУСКАЕМ, можем ни разу не попасть в цикл

/* while(условие){
    тело цикла (действие);
} // - запрещена точка с запятой */

/* let i = 0;
while(i < 5){
    document.writeln("Это номер: " + i + "<br>");
    i++
}
document.writeln("<br><br>");
let j = 0;
do{
    document.writeln("Это номер: " + j + "<br>");
    j++;
}while(j < 5); */

/* let star = prompt("Укажите количество звездочек: "); // плюс указываем, если потом работаем с плюсом
let i = 0;
while(i < star){ // от 0 до 6
    document.writeln("*")
    i++;
} */

/* let i = 0;
while (i <= 30) {
    if (i % 3 !== 0) {
        document.writeln(i + "<br>")
    }
    i++;
} */

// ==

/* let i = 0;
while (i <= 30) {
    if (i % 3) {
        document.writeln(i + "<br>");
    }
    i++;
} */


/* let start = +prompt("Введите начальное число")
let end = +prompt("Введите конечное число")
let res = 1;
while(start <= end){
    res = res * start;
    start++;
}
document.writeln("Произведение чисел: " + res); */

/* let i = 3;
while(i){ // 0
    document.writeln(i + "<br>");
    i--;
} */
/* let n;
let count = -1; // количество элементов, введенных пользователем
do{
    n = prompt("Введите целое число");
    document.writeln(n + "<br>")
    count++;
}while(n != 0);
document.writeln("Количество: " + count + "<br>"); */

/* let sum = 0;
let count = -1;
let n;

let max = 0;
do{
    n = +prompt("Введите число"); // 4 9 3 11 0
    sum += n;
    count++;
    if(max < n){ // 11 < 0
        max = n; // 11
    }
} while(n != 0);
document.writeln("Среднее арифметическое: " + sum / count + "<br>");
console.log("sum:", sum);
console.log("count:", count);
document.writeln("MAX: " + max); */

/* let n = +prompt("Введите число"); // 4
let max = n; // 4
while(n != 0){
    n = +prompt("Введите число"); // 9 3 11 0
    if (max < n) { // 11 < 0
        max = n; // 11
    }
}
document.writeln("MAX: " + max + "<br>"); */

/* let n = +prompt("Введите число", 1); // 4
let max = n; // 4
let min = n; // 4
let sum = n;
let count = 0;
while (n != 0) {
    n = +prompt("Введите число"); // 5 1 0
    sum += n; // sum = sum + n
    count++;
    if (max < n && n != 0) {
        max = n;
    }
    if(n < min && n != 0){
        min = n;
    }
}
document.writeln("MAX: " + max + "<br>");
document.writeln("MIN: " + min + "<br>");
console.log("sum:", sum);
console.log("count:", count);
document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>"); */

/* let sum = 0;
do{
    let n = +prompt("Введите число");
    
    if(n < 0){
        break; // полностью прерывает выполнение цикла
    }
    sum += n;
} while(true);
console.log("sum: ", sum) */

/* let res = 1;
do{
    let n = +prompt("Введите число"); // 5 2 0 -7

    if(n < 0){
        break;
    }
    if (n == 0){
        continue;
    }

    res *= n;
}while(true);
console.log("Произведение:", res); */

/* let i = 0;
do{
    
    if (i == 6){
        break;
    }
    if(i == 3){
        i++; // 4
        continue; // перенаправляет не за цикл, а пропускает вывод документ врайт
    }
    document.writeln(i + " ");
    i++; // 0 1 2 3
}while(i < 10); */

/* let res = 1;

do {
    let num = +prompt("Введите число");

    if (num == 0) {
        break;
    } else {
        res *= num;
    }

} while (true); 
console.log("Произведение:", res); */

// ==

/* let res = 1;
let num;
do{
    num = prompt("Введите число");
    if (num == 0) {
        continue;
    }
    res *= num; // res = -15 * 2 = -30
}while (num != 0);
console.log("Произведение:", res) */

// for(цикл со счётчиком)

/* for(инициализация_переменнойж проверка_условияж изменение_переменной){
    тело_цикла;
} */

/* for(let i = 1; i < 6; i++){
    document.writeln(i + "<br>");
} */

// ==

/* let i = 1;
while(i < 6){
    document.writeln(i + "<br>");
    i++;
} */

/* for(let i = 1; i < 12; i++){
    if(i == 3){
        continue;
    }
    if( i == 6){
        break;
    }
    document.writeln(i + "<br>");
} */

/* let n = prompt("n = ");
let sum = 0;
let count = 0;

for(let i = 0; i < n; i++){
    let num = +prompt("-> ");
    document.writeln(num + "<br>");
    sum += num;
    if(num != 0){
        count++;
    }
}
console.log(sum);
console.log(count);
document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>"); */

/* let i = 1;
for (; ;) { // допустимо (под принцип работы while), но нужно сделать ; ;
    if(i == 7){
        break;
    }
    document.writeln(i + "<br>");
    i++;
} */

/* for (var i = 1; i < 6; i++) { 
    document.writeln(i + "<br>");
}
console.log(i); */

/* let = start = 5;
let end = 10;

for(let i = start; i <=end; i++){

} */

/* let start = +prompt("Input start number");
let end = +prompt("Input end number");
let sum = 0;
let res = 1;
for (let i = start; i <= end; i ++) {
    console.log(i)
    if (i % 2) {
        res *= i;
    } else {
        sum += i
    }
}
document.writeln("Сумма четных чисел последовательности: " + sum + "<br>" + "Произведение нечетных чисел последовательности: " + res); */

/* let ch = 321;
document.writeln("Исходное число: " + ch + "<br>");
for(let i = 1; ; i *= 10){
    let res = parseInt(ch / i);
    if(res == 0){
        break;
    }
    document.writeln(res % 10);
} */

// Найти сумму целых полоительных чисел больших 5, меньших 30 и кратным трём.

/* let start = 5;
let end = 30;
let sum = 0;
 
for (let i = start; i <= end; i++) {
    if (i % 3) {
        continue;
    } else {
        sum += i;
    }
}
document.writeln("Сумма чисел кратных трем: " + sum); */

/* let i = 0;
while(i < 4){
    document.writeln("+++<br>");

    i++;
} */

/* let i = 0; // 0 
while(i < 4){ // 0 < 4
    document.writeln("+++<br>");

    let j = 0; // 0
    while(j < 2){ // 0 < 2
        document.writeln("--<br>");
        j++; // 0 + 1 // и не выходим из цикла пока не будет поймано условие выхода
    } // при одной итерации внешнего цикла, выполнятся все итерации внутреннего

    i++;
}  */

// ==

/* for(let i = 0; i < 4; i++){
    document.writeln("+++<br>");
    for(let j = 0; j < 2; j++){
        document.writeln("--<br>");
    }
} */

// СОЗДАНИЕ ТАБЛИЦЫ ЦИКЛАМИ - ОЧЕНЬ УДОБНО И КОМПАКТНО

/* let symbol = prompt("Введите символ", "*");
let tr = prompt("Введите количество строк: ", 10);
let td = prompt("Введите количество столбцов: ", 5);
document.writeln("<table border='1' width='150'>");
for(let i = 0; i < tr; i++){
    document.writeln("<tr align='center'>");
    for( let j = 0; j < td; j++){
        document.writeln("<td>" + symbol + "</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

// ТАБЛИЦА УМНОЖЕНИЯ

/* document.writeln("<table border='1' width='150'>");
for(let i = 1; i < 11; i++){
    document.writeln("<tr align='center'>");
    for( let j = 1; j < 11; j++){
        document.writeln("<td>" + i * j + "</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

// МАССИВЫ

// let mas = [2, 6, 8]; // данные могут быть разных типов данных // массив
// document.writeln(mas[0]); // то, что в [] - индекс элемента массива, начинается с 0, отрицательных индексов не существует в js
// console.log(mas);

// let mas1 = [5]; // массив на 1 элемент со значением 5
// console.log(mas1);

// let mas2 = new Array(2, 6, 8); // второй способ создания массива
// console.log(mas2);

// let mas3 = new Array(5); // массив на 5 элементов, но без значений // можно позднее пользователю заполнить значения
// console.log(mas3);

// let mas4 = []; // обычный совершенно пустой массив
// let mas5 = new Array();
// console.log(mas4);
// console.log(mas5);

/* let mas = [2, 6, 8];
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length);

arr.length = 3;
document.writeln(arr + "<br>");
document.writeln(arr.length + "<br>");

arr.length = 6;
document.writeln(arr + "<br>");
document.writeln(arr.length + "<br>");
document.writeln(arr[10] + "<br>");
console.log(arr);

arr.length = 0;
document.writeln("Пустой массив: " + arr + "<br>");
document.writeln(arr.length + "<br>");
console.log(arr); */

// ПОСЛЕДНИЙ ИНДЕКС МАССИВА = ДЛИНА МАССИВА - 1
// length - последний индекс массива + 1

/* let arr1 = [1, 2, 3, 4, 5, 6];
document.writeln(arr1 + "<br>");
document.writeln(arr1[arr1.length - 1] + "<br>");
// console.log(arr1 + [7,8,9]); // массив + массив - нельзя
console.log(arr1); // массив + массив - нельзя */

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8];
for(let i = 0; i < arr.length; i++){
    document.writeln(arr[i] ** 2 + "<br>") // ВЛИЯЕМ НА КАЖДЫЙ ЭЛЕМЕНТ МАССИВА
} */

// Заменить все отрицательные значения элементов массива их модулями

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] *= -1; // arr[i] = arr[i] * -1;
    }
    document.writeln(arr[i] + "<br>");
}

console.table(arr); */ // вывести табличкой массив

// Посчитать сумму всех отрицательных элементов

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        document.writeln(arr[i] + "<br>");
        sum += arr[i];
    }
}
document.writeln(sum + "<br>"); */

/* let arr = new Array(); // []
arr[0] = 15;
arr[1] = 6;
arr[2] = 9;
arr[3] = 4;
// будут пустые пространства, но их инедксы не в счёт этого пространства, длина этого массива будет == 7 (по правилу: длина массива == последний индекс + 1)
arr[6] = 59;

console.log(arr); */


/* let arr = new Array(5);

// for(let i = 0; i < arr.length; ){
//     arr[i] = prompt("Введите " + ++i + " элемент массива: ");
// }
// document.writeln(arr + "<br>");

// ==

for(let i = 0; i < arr.length; i++){
    arr[i] = prompt("Введите " + (i + 1) + " элемент массива: ");
}
document.writeln(arr + "<br>");
console.log(arr);

for(let i = arr.length - 1; i >= 0; i--){ // 4 >= 0
    document.writeln(arr[i] + " ");
} */


/* let arr = [1,2,3,4];
arr[0]++; // 2
++arr[1]; // 3
arr[2]--; // 2
--arr[3]; // 3
console.log(arr); */

/* let n = +prompt("Введите количество элементов в массиве:");
let arr = new Array(n);

for (let i = 0; i < arr.length; i++) {
    if (n > 5) {
        arr[i] = 0;
    } else {
        arr[i] = prompt("Введите " + (i + 1) + " элемент массива: ");
    }

}
document.writeln(arr + "<br>"); */

/* let n = +prompt("Введите количество элементов массива: ");
let mas = new Array(n);

for(let i = 0; i < mas.length; i++){
    mas[i] = prompt("->");

}
console.log(mas)

for(let i = 0; i < mas.length; i++){
    if(mas[i] > mas[i - 1]){
    document.writeln(mas[i] + " ");
}
} */

/* let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];
let sum = 0;
let count = 0;
for(let i = 0; i < mas.length; i++){
    if(mas[i] % 2 == 0){
        count++;
    } else {
        sum += mas[i];
    }
}

document.writeln("Count: " + count + "<br>");
document.writeln("Sum: " + sum); */

/* let arr = [2, 6, "Игорь", true, 1.5];
console.log(arr);

for (let i = 0; i < arr.length; i++){
    document.writeln(arr[i] + "<br>");
}  */

/* let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6]];
console.log(mas);
// console.table(mas);
// document.writeln(mas[1][2]);

for(let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++){
     document.writeln(mas[i][j]) + " ";   
    }
    document.writeln("<br>");
} */

/* let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
for (let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++){
        document.writeln(mas[i][j] + "- - -");
    }
    document.writeln("<br>");
}
document.writeln("<br>");
for (let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++){
        document.writeln(mas[i][j] ** 2 + "- - -");
    }
    document.writeln("<br>");
} */

// ВИКТОРИНА

/* let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8?", "Дельфины это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая войны началась 1 сентября 1939 года?"];
let answers = [false, true, false, false, false, false, false];
let sum = 0;
let res = new Array(); // []

for (let i = 0; i < questions.length; i++) {
    let answer = confirm(questions[i]);
    if (answer == answers[i]) {
        res[i] = 10;
        sum += res[i];
    } else {
        res[i] = 0;
    }
}



console.log(res)
console.log(sum)

document.writeln("<table border='1' width='500'>");
document.writeln("<tr>");
document.writeln("<th>Вопрос</th>");
document.writeln("<th>Баллы</th>");
document.writeln("</tr>");

for (let i = 0; i < questions.length; i++) {
    document.writeln("<tr>");
    document.writeln("<td>" + questions[i] + "</td>");
    document.writeln("<td>" + res[i] + "</td>");
    document.writeln("</tr>");
}

document.writeln("<tr>");
document.writeln("<th>Итог</th>");
document.writeln("<th>" + sum + "</th>");
document.writeln("</tr>");


document.writeln("</table>"); */


// ЦИКЛ без индекса по i. Удобно, но не универсально, не выйдет начать не с нуля

// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
//     console.log(elem);
// }

// for(let i = 0; i < arr.length; i++){
//     document.writeln(arr[i] + "<br>");
// }

// let colors = ["red", "blue", "green", "yellow"];
// for(let color of colors){
//     document.writeln(color + "<br>");
// }

/* let arr = [1, 2, 3, 4, 5];
let flag = false;

for(let elem of arr){
    if(elem == 3){
        flag = true;
        break;
    } 
}

// console.log(flag);

if(flag == true){
    console.log("+++");
} else {
    console.log("---");
} */

// let arr = [7, 55, 9, 33, 2];

// let max = arr[0];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);

// for(let num of arr){
//     if(num > max){
//         max = num;
//     }
// }

// console.log(max);

// let sum = 0;
// let arr = [7, 55, 9, 33, 2];
// for (let num of arr) {
//     sum += num;
// }

// console.log(sum);





// ВЗАИМОДЕЙСТВИЕ С HTML ЭЛЕМЕНТАМИ

/* let text1 = document.getElementById("text_1");
console.log(text1); // элемент из html
console.log(text1.textContent); // текстовое содержимое у полученного тега, после . - свойство, в круглых скобочках - метод
text1.textContent = "Новое содержимое"; // меняем текстовое содержимое через js

let text2 = document.getElementById("text_2");
text2.innerHTML = "Новое содержимое с <b>с новой html разметкой</b>";

let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
document.writeln("<div id='image'></div>");
let img = document.getElementById("image");

switch(res){
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src='img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет");
} */

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// // tag.style.font-weight = "bold"; // НЕЛЬЗЯ
// tag.style.fontWeight = "bold"; // МОЖНО
// // list-style-type => listStyleType
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";

// tag.id = "test"; // добавить айди
// tag.className = "x"; // добавить класс

// let tag = document.getElementsByTagName("p");
// tag[2].innerHTML = "Hello <u>tag</u>";
// tag[2].style.color = "blue";
// tag[1].style.color = "blue";

// let q = document.getElementsByClassName("two");
// console.log(q);
// q[1].style.color = "red";

// document.querySelector("CSS");
// document.querySelectorAll("CSS");

// let id = document.querySelectorAll("#text_1")[0]; // синтаксис css # . // 
// console.log(id);
// id.style.color = "red";

// let clss = document.querySelector(".two"); // находит первый встетившийся элемент
// console.log(clss);
// clss.style.color = "red";

// let div = document.querySelectorAll("div")[2];
// console.log(div);
// div.style.color = "red";

// let el = document.querySelector("h2");
// el.style.color = "red";

// // let el2 = document.querySelectorAll("h2")[1];
// // ==
// let el2 = document.querySelector("h1 + h2");

// el2.style.color = "purple";

// let lists = document.querySelectorAll("li");
// console.log(lists.length);
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML += "!!!"; // добавить к существующим значениям
// }

// let purple = document.querySelectorAll(".purple li");
// console.log(purple.length);
// for(let i = 0; i < purple.length; i++){
//     purple[i].style.color = "purple";
//     purple[i].innerHTML += "???";
// }

// // let red = document.querySelectorAll(".red li")[1];
// // ==
// let red = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
// старый способ обращения к классам // даже если класс один, всё равно нужно обращаться по индексу
// red.style.color = "orange"

// let el = document.querySelector(".elem");
// console.log(el.closest(".content"));

// // el.style.color = "green";

// // let blue = el.closest(".content");
// // blue.style.color = "blue";

// console.log(el.closest(".container"));
// console.log(el.closest("h1"));

// ОСОБЫЕ ОБРАЩЕНИЯ К КЛАССАМ В JS

// let all = document.querySelectorAll("*"); // массив из всех элементов на Html 
// let all = document.querySelectorAll("[class]")[2]; // массив из всех элементов имеющих класс
// let all = document.querySelectorAll("[class~='two']"); // ~ - один из классов является тем классом, который заявлен, или просто один класс есть. Без тильды - строго, только один класс должен быть
// let all = document.querySelectorAll("[class^='cont']"); // циркумфлекс - название класса начинается с этих букв
// let all = document.querySelectorAll("[class$='ner']"); // циркумфлекс - название класса завершается этими буквами
// let all = document.querySelectorAll("[class*='ne']"); // в названии есть такое сочетание букв
// let all = document.querySelectorAll(":empty"); // находит те теги, которые не имеют вложенных элементов (в том числе непарные теги)
// console.log(all);

// let title = document.querySelector("h1");
// title.style.color = "red";

// МЕТОДЫ МАССИВА

// let js = ["нужно", "учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);

// let last = js.pop(); // метод удаляет последний элемент из массива и возвращает удалённый элемент, при этом урезает сам массив // то есть можно сохранить его в другой переменной
// console.log(last);

// js.push("JavaScript", "!"); // Добавление элементов в массив
// console.log(js);

// console.log(js.shift()); // удаление первого элемента с начала массива и его возвращение (в консоль или переменную)
// console.log(js);

// js.unshift("почему", "нужно"); // добавляет элемент в начало массива
// console.log(js);


// let fruits = ["апельсин", "банан", "груша"];
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");
// fruits.push("яблоко", "ананас");
// fruits.unshift("грейпфрут");
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");
// fruits.pop();
// fruits.shift();
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");

/* let mas = [];
let n = prompt("Введите количество элементов массива: ");
for(let i = 0; i < n; i++){
    let x = prompt("Введите число: ");
    // mas.push(x);
    // ==
    // mas[i] = x;
    mas.unshift(x); // [5,4,3,2,1] // массив отображается в перевёрнутом виде
}
for(let i = 0; i < n; i++){
    document.writeln(mas[i] + " ");
} */

// let masFirst = [1,2,3];
// let masSecond = [11, 22, 33];
// let masEnd = []; // 1[masFirst 0] 11[masSecond 0]

// for(let i = 0; i < masFirst.length; i++){
//     masEnd.push(masFirst[i]);
//     masEnd.push(masSecond[i]);
// }
// document.writeln(masEnd);

// slice не меняет исходный массив

// let arr = js.slice(1, 3); // копируем из старого массива в новый информацию на указанном отрезке // slice(begin, end) копируем участок от begin до end, не включая end
// console.log(arr);

// console.log(js.slice(1)); // end не указан, значит, от указанного индекса до конца

// let range = js.toSpliced(1, 2); // получаем весь массив за исключением указанного диапазона // получение элементов вне диапазона
// console.log(range);

// console.log(js);
// delete js[1]; // оператор (не метод), который удаляет значение (не элемент) по заданному индексу, в массиве будет empty на его месте, длина массива остаётся такая же (не очень удобно)
// console.log(js);

// // метод
// js.splice(1, 1); //splice(start - индекс старта элементов для удаления, length - количество удаляемых элементов) // удаляет из массива заданное количество элементов, начиная с позиции старт

// js.splice(0, 2, "Мы", "изучаем"); // удаляем от 0 индекса 2 элемента, добавляем новое содержимое на их место
// console.log(js);

// js.splice(2, 0, "сложный", "язык"); // с 2индекса удаляем 0 элементов, но начиная со второго индекс добавляем два элемента // верный синтаксис записи, указывать 0 в таком случае обязательно
// console.log(js);

// js.splice(-3, 0, "но", "очень", "интересный"); // отрицательный индекс здесь считается так: с конца массива - последний элемент считается за -1, перед ним -2 и т.д. // слова вставляются до -3 
// console.log(js);


// let mas = [];
// let n;
// do{
//     n = prompt("Введите элемент массива:")
//     if(n >= 0){
//         mas.push(n);
//     } else {
//         break;
//     }
// } while(true)
// document.writeln(mas + "<br>");

// let k = prompt(`Введите индекс для удаления от 0 до ${mas.length - 1}`);
// // delete mas[k];
// if(k >= 0 && k < mas.length){
//     mas.splice(k, 1);
// } else {
//     alert("Недопустимый индекс")
// }


// for(let el of mas){
//     document.writeln(el + " ");
// }

// let index = js.indexOf("сложный"); // вывести индекс, где находится значение // возвращает первый индекс, по которому нашлось значение в массиве, или значение -1, если элемент не найден
// console.log(index);

// js.push("сложный");
// console.log(js);
// let index1 = js.indexOf("сложный", 3); // второй параметр - с какого индекса начинать поиск // можно ещё index + 1
// console.log(index1);

// let index2 = js.lastIndexOf("сложный"); // поиск с конца массива
// console.log(index2);

// let isValue = js.includes("интересный"); // проверяет, сожержит ли массив определённое значение
// console.log(isValue);

// let str = js.join("; "); // объединение массива в строку с указанием знака разделителя
// console.log(str);

// js.reverse(); // перевернуть массив
// console.log(js);



// Необходимо найти уникальные элементы массива

// let array = [7, 4, 1, 4, 7, 4, 1, 4, 7, 7, 1, 4];
// let unique = [];

// for(let el of array){
//     if(!unique.includes(el)){ // проверяем массив не включает какой-то элемент // el содержит каждый элемент массива по очереди // unique = [7, 4, 1];
//         unique.push(el);
//     }
// }

// for(let el of unique){
//     document.writeln(el + " ");
// }

// Запрашиваем у пользователя поочерёдно ФИО (элементы массива), потом на выходе показываем ФИО одной строкой с пробелами между словами

// let st = ["Фамилия", "Имя", "Отчество"];
// let fio = new Array(3);

// for(let i = 0; i < fio.length; i++){
//     fio[i] = prompt("Введите данные:\n" + st[i]);
// }
// alert(fio.join(" "));



// let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
// console.log(people.length);

// // let arr = people.flat(); // достаёт элементы из первого уровня вложенности массива, помещая их на нулевой уровень // упрощает массив с учетом вложенности элементов
// let arr = people.flat(2); // достаёт элементы из первого уровня вложенности массива, помещая их на нулевой уровень

// console.log(arr)
// console.log(arr.length)

// let a = [1, 2];
// let b = a.concat(3, 4); // создаёт новый массив, объединяющий несколько массивов // существующему массиву добавляем другой массив
// console.log(b);
// let c = ['a', 'b', 'c'];
// let num = a.concat(b, c);
// console.log(num);

// let users = ['Tom', 'Bob', 'Kate', 'Sam', 'Ann'];

// let modified = users.with(0, 'Tomas'); // изменяет элемент массива, но при этом сохраняет старое состояние исходного массива

// console.log(users);
// console.log(modified);

// console.log(users.sort()); // сортировка по алфавиту

// let firstName = prompt("Как вас зовут?", "Федор");
// console.log(firstName);
// let favorite = ""; // обязательно, иначе будет undefined
// let arr = [];

// while (favorite != null) { // undefined = null = false (практически, но не фактически)
//     favorite = prompt("Введите любимое имя:");
//     arr.push(favorite);
// }

// arr[arr.length - 1] = firstName; // ставим последним элементом в массиве своё имя (вместо null)
// arr.sort();

// console.log(arr);
// let index = arr.indexOf(firstName); // ищем в массиве введённое значение

// for (let i = 0; i < arr.length; i++) {
//     if (i == index) {
//         document.writeln("<span style='color: blue; text-decoration: underline;'>" + arr[i] + "</span>");
//     } else {
//         document.writeln(arr[i] + " ");
//     }
// }

// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b); // в метод сорт передали функцию
// console.log(n);



// // ФУНКЦИИ 
// // типы
// // Function Declaration (Метод работы с функциями: Определение функции)

// /*
// function имя(аргументы){
//     тело функции
// } 
//  */

// function hello(name){
//     document.writeln("Hello, " + name + "<br>");
// }

// hello("Igor");
// hello("Irina");

// function caption(){
//     for(let i = 1; i <= 6; i++){
//         document.writeln("<h" + i + ">Заголовок" + i + "</h" + i + ">");
//     }
// }

// caption();

// function test(a, b, c) {
//     // alert(a + b + c);
//     let res = a + b + c;
//     return res;
// }

// let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m = 3;
// // test(n1, n2, n3); // 60
// // test(m1, m2, m3); // 6
// // важна последовательность передаваемых значений, а не имена. желательно не создавать тиакие же по названию переменные (они там локальные), за пределами не обратиться
// let sum = test(n1, n2, n3);
// console.log(sum); // в консоль просто результат вывели функции

// function test2(n,m){
//     return n / m; // всё что находится после него не выполняется. return прерывает функцию
// }

// let a1 = test2(10, 2);
// let a2 = test2(10, 0);

// alert(a1);
// alert(a2);

// function result(n, m) {
//     if(n > m){ // 2 > 1 => 2 - 1
//         return n - m;
//     } else {
//         return n + m;
//     }
// }

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let res = result(a, b);
// alert(res);

// function sum(arr) {
//     let res = 0;
//     for(let i = 0; i < arr.length; i++){
//         res += arr[i];
//     }
//     return res;
// }

// document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(sum([1, 2, 5]) + "<br>");

// function max(n, m){
//     if(n > m){
//         document.writeln("Большее число: " + n + "<br>");
//     } else if(n == m) {
//         document.writeln("Числа равны" + "<br>");
//     } else {
//         document.writeln("Большее число: " + m + "<br>");
//     }
// }

// let a = +prompt("Введите первое число:");
// let b = +prompt("Введите второе число:");
// max(a, b);

// function showArrayContent(arrayToShow) { // ['зима', 'весна', 'лета', 'осень']
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop(); // ['зима', 'весна', 'лета'], last = 'осень'
//         let str = arrayToShow.join(", "); // join преобразовывает массив в строку // 'зима, весна, лета'
//         let res = str + " и " + last; // 'зима, весна, лета' + " и " + 'осень'
//         return res;
//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));

// IMHO ==

// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop();
//         let res = arrayToShow.join(", ") + " и " + last;
//         return res;
//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));


// Function Expression (Функциональное выражение)

/* 
let func = function(имя не указываем (оно равняется переменной), сюда аргументы){
    // тело функции
}

func(параметры) - вызывается именем переменной
*/
// alert(sum1(20, 30)); // 50
// function sum1(a, b) { // ФУНКЦИЮ МОЖНО ВЫЗВАТЬ РАНЬШЕ, ЧЕМ ОНА НАПИСАНА
//     return a + b;
// }
// let sum2 = function (a, b) { // ФУНКЦИЮ МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ДЕКЛАРАЦИИ ПЕРЕМЕННОЙ
//     return a + b;
// }


// alert(sum2(2, 3)); // 5

// let averange = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return (sum / arr.length).toFixed(2);
// }

// document.writeln(averange([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(averange([8, 2, 4]) + "<br>");

// найти наибольшее число в массиве

// let max = function(arr){
//     let m = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(m < arr[i]){
//             m = arr[i];
//         }
//     }
//     return m;
// }

// document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(max([1, 2, 5]) + "<br>");

// Immediately Invoked Function Expression (IIFE) - самовызывающаяся (анонимная функция)
// функция не может быть использована повторно

// (function(){
//     alert("Привет, мир!")
// }()); // вот эти круглые скобки вызывают функцию // их можно перед последней скобкой или после неё
// // если точку с запятой не поставить после этой функции, следующая не отработает - выдаст ошибку

// (function(n){
//     alert(n * n);
// })(4) // в круглых скобках передаём аргументы 

// Arrow Function (стрелочная функция)
// помогает сократить написание

// old
// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }

// alert(test(10, 20, 30)); // 60

// // arrow, в одну строку
// let test2 = (a, b, c) => a + b + c; // => (function), let ... (имя функции), {} - не нужно
// alert(test2(1,2,3)); // 6 

// let hello = () => alert("Hello");

// hello(); // даже если принимаемых нет, то круглые всё равно нужны


// let double = n => n ** 2; // если один принимаемый аргумент, то круглые скобки не нужны

// let arr = [5, 3, 8, 2];
// let res = []; 
// for(let i = 0; i < arr.length; i++){
//     res[i] = double(arr[i]);
// }

// console.log(res);


// функция вывода чередующихся символов // больше одной строки в функции => {} // будет возвращаемое значение = return

// let symbol = (count, a, b) => {
//     for (let i = 0; i < count; i++) {
//         document.writeln(i % 2 ? b : a); // if тернарный оператора // false => a // true => b
//     }
//     document.writeln("<br>");
// }

// symbol(9, "+", "-");
// symbol(7, "X", "0");

// меняем местами первое и последнее значение

// let change = (lst) => { // если есть фигурные скобки, return обязателен, в случае с одной строкой не нужно
//     let a = lst[lst.length - 1]; // a = 3
//     lst[lst.length - 1] = lst[0]; // lst[2] = 1
//     lst[0] = a; // lst[0] = 3
//     return lst;
// }
// ==
// let change = (lst) => {
//     let last = lst.pop();
//     let first = lst.shift();
//     lst.push(first);
//     lst.unshift(last);
//     return lst;
// }

// document.writeln(change([1,2,3]) + "<br>");
// document.writeln(change([9,12,33,54,105]) + "<br>");
// document.writeln(change(["с", "л", "о", "н"]) + "<br>");

// let a = 5;
// let b = 7;
// console.log("a =", a, "b =", b);

// // a = b; // затирает значение
// let temp = a; // 5
// a = b; // a = 7;
// b = temp;

// console.log("a =", a, "b =", b);

// проверка больше ли одно число другого

// let isGreater = (x, y) => x > y ? true : false;

// document.writeln(isGreater(10, 5) + "<br>");
// document.writeln(isGreater(5, 10) + "<br>");

// Проверка пароля на валидацию

// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;

//     for(let ch of password){
//         // console.log(ch);
//         if("A" <= ch && ch <= "Z"){
//             hasUpper = true;
//         }
//         if("a" <= ch && ch <= "z"){
//             hasLower = true;
//         }
//         if("0" <= ch && ch <= "9"){ // действует неявное преобразование типов, но правило хрошего тона требует строку, вводим ведь строку
//             hasNum = true;
//         }
//     }

//     if(password.length >= 8 && hasUpper && hasLower && hasNum){ // и у строки тоже есть длина
//         return true;
//     }
//     return false;
// }

// let psw = prompt("Введите пароль:");
// if(checkPassword(psw)){
//     document.writeln("Это надёжный пароль");
// } else {
//     document.writeln("Ваш пароль ненадёжный")
// }


// Найти факториал числа 5! = 1 * 2 * 3 * 4 * 5

// let factorial = n => {
//     let res = 1;
//     for(let i = 1; i <= n; i++){
//         console.log(i);
//         res *= i;
//     }
//     return res;
// }

// document.writeln(factorial(prompt("Введите число, которое хотите возвести в факториал:")));

// function getNames(){
//     let firstName = "Irina", lastName = "Vetrova";
//     return firstName, lastName; 
// } // функция js не может вернуть более одного значения - нужен массив
// let names = getNames();
// console.log(names);

// function getNames(){
//     let firstName = "Irina", lastName = "Vetrova";
//     return [firstName, lastName]; 
// }

// // let names = getNames();
// // console.log(names); // ['Irina', 'Vetrova']
// // let surname = names[1];
// // console.log(surname); // Vetrova

// // ==

// // деструктурализация (более новые версии js)
// let [name1, surname] = getNames(); // деструктуризация // [name1, surname] = [firstName, lastName] // если будет меньше значений, чем в return, выведутся без ошибки те, которые были запрошены // таким образом мы первели переменные в глобальную область видимости
// // console.log(name1, surname); 
// console.log(name1); 
// console.log(surname); 

// записать синтаксически по-разному (разные типы функции, кроме анонимной) обе задачи по три варианта решения

// FALLBACK ФУНКЦИИ
// ФУНКЦИИ ВЫСОКОГО ПОРЯДКА (в качестве аргумента может принимать другую функцию)

// function isOdd(number){
//     return number % 2; // 0 или 1
// }

// function isEven(number){
//     return number % 2 == 0; // 0 или 1
// }

// function filter(numbers, fn) { // в numbers попадает массив num // в fn попадают либо isOdd либо isEven, это и есть функции обратного вызова
//     let results = [];
//     for(let number of numbers){
//         if(fn(number)){
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(num, isOdd)); // [1, 7, 3, 5]
// console.log(filter(num, isEven)); // [2, 4, 6]

// обратный вызов может быть и у анонимной функции (у которой нет имени)

// function filter(numbers, callback) {
//     let results = [];
//     for(let number of numbers){
//         if(callback(number)){
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];

// // let oddNumbers = filter(num, function(number) { // синтаксис function expression
// //     return number % 2;
// // })
// // console.log(oddNumbers);

// // ==

// let oddNumbers = filter(num, number => number % 2); // синтаксис стрелочной записи, такой же результат
// let evenNumbers = filter(num, number => number % 2 == 0);
// console.log(oddNumbers); // [1, 7, 3, 5]
// console.log(evenNumbers); // [2, 4, 6]



// forEach() - цикл, который работает с какой-то коллекцией (массивом), это метод, применяет к каждому элементу определенное действие
// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (n) { // forEach - метод, который позволяет делать цикл в одной строке, здесь нет return, void
//     document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>");
// })

// ==

// numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));

// ["Hello", "World"].forEach(alert); // поочерёдно выведет обе надписи, Но не каждый элемент так отработает

// ==

// let text = ["Hello", "World"];
// for (let i = 0; i < text.length; i++){
//     alert(text[i]);
// }

// ["Hello", "World"].forEach(console.log);

// ["Hello", "World"].forEach(document.writeln); // не будет работать

// ["Hello", "World"].forEach((item, index, array) => { // первый (item) принимаемый аргумент - каждый элемент из массива
//     alert(`У ${item} индекс ${index} в ${array.join(", ")}`);
// }); 

// let numbers = [1, 2, 3, 4, 5, 6];

// let squares = numbers.map(n => n ** 3); // принцип forEach сохраняется
// console.log(squares);

// let lengths = ["Hello", "World", "!"].map(item => item.length); // длина каждой строки из массива
// console.log(lengths);

// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.filter(n => n > 0); // метод filter подразумевает условие, совмещённый цикл с условием // возвращает в массив passed только те значения массива number, которые подходят по условию // чаще всего используют для сравнения
// console.log(passed);

// // ==

// let mas = [];
// for (let i = 0; i < number.length; i++){
//     if(number[i] > 0){
//         mas.push(number[i]);
//     }
// }
// console.log(mas);


// let colors = ["red", "orange", "green", "yellow"];
// let newColors = colors.filter(color => color.length > 5); // только те элементы, длина строки которых больше 5
// console.log(newColors);

// let colors = ["red", "orange", "", "green", "yellow"];
// let newColors = colors.filter(color => color.length); // если не поставить сравнение, то будет новое действие, пустые кавычки не попадут в новый массив, потому что они == false (неявное преобразование типов)
// console.log(newColors);

// == 

// let colors = ["red", "orange", "", "green", "yellow"];
// let newColors = colors.filter(function(color){
//     return color.length > 5;
// });
// console.log(newColors);

// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.every(n => n > 0); // проверяет, соответствуют ли все элементы определённому условию
// console.log(passed); // false

// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.some(n => n > 0); // проверяет, соответствует ли хотя бы один элемент определённому условию
// console.log(passed); // true

// массив.reduce и массив.reduceRight
// используется для вычисления единого значения на основе массива


// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0); // 0 ставим, т.к. при пустом массиве будет ошибка скрипта

// document.writeln(result);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current);

// document.writeln(result);

// document.writeln(Math.floor(7.9) + "<br>"); // округление до целого, но до "пола", самого нижнего значения
// document.writeln(Math.ceil(7.2) + "<br>"); // округление до целого, но до "потолка", самого верхнего значения
// document.writeln(Math.round(7.2) + "<br>"); // стандартное округление по математике

// случайное значение

// (function (min, max) {
//     document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>") // случайное число от 0 до 1 по умолчанию (1 не включается) // привязывается ко времени на компьютере, за счёт милисекунд
// })(2, 9); // случайно число в заданном диапазоне (9 никогда не появится)

// document.writeln(Math.floor(Math.random() * 9) + "<br>"); // от 0 до 9 (9 не в счёт)


// document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>"); // от 0 до 9 (9 не в счёт) // после + - минимальное (2), максимальное - сумма 7 + 2

// // от 6 до 14 (не включая 14)
// document.writeln(Math.floor(Math.random() * 8 + 6) + "<br>");
// document.writeln(parseInt(Math.random() * 8 + 6) + "<br>");

// let pickRandom = function(arr){
//     return arr[Math.floor(Math.random() * 4)]; // от 0 до 4 (не включая 4)
// }

// let randomWord = ["Цикл", "Массив", "Условие", "Функция"];
// let word = pickRandom(randomWord);
// document.writeln(word);

// ==
// так можно брать любое случайное значение из массива

// let pickRandom = function(arr){
//     return arr[Math.floor(Math.random() * arr.length)]; // от 0 до 4 (не включая 4)
// }

// let randomWord = ["Цикл", "Массив", "Условие", "Функция"];
// let word = pickRandom(randomWord);
// document.writeln(word);



// квадрат закрашиваемый случайными цветами

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.height = "100px";
// id.style.width = "100px";
// // id.style.background = "rgb(255,0,0)";
// createColor();

// function createColor(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     id.style.background = `rgb(${r},${g},${b})`;
// }

// ==

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.height = "100px";
// id.style.width = "100px";
// id.style.background = `rgb(${createColor()},${createColor()},${createColor()})`;

// function createColor() {
//     return Math.floor(Math.random() * 256);
// }







// function fn(a, b, ...args) { // переменная с тремя точками в начале позволяет принять все типы других данных в функцию // переменную с ... можно вставить только в конце, она может быть только одна
//     console.log("a = ", a, "b = ", b, "args =", args);
// }

// fn(1); // в b будет undefined, а в ..args пустой массив
// fn(1, 2, 3, "A", "B", "C");

// function sum(...args) {
//     let total = 0;
//     for(let a of args){ // в a приходит значение из массива по порядку
//         total += a;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(5, 7, 9, 6, 8, 2, 3));


// function sum(...args) {
//     return args // здесь нет ; так как .filter продолжает args, это к нему применяется
//         .filter(function(e){ // метод .filter создаём новый массив, в который приходят только те элемент, которые соответствуют условию
//             return typeof e === 'number'
//         })
// }

// console.log(sum(10, "Hi", null, undefined, 20));

// ==

// function sum(...args) { // [10, "Hi", null, undefined, "20")]
//     return args.filter(e => typeof e === 'number') // [10, 20]
// }

// console.log(sum(10, "Hi", null, undefined, "20"));


// function sum(...args) {
//     return args
//     .filter(e => typeof e == 'number')
//     .reduce((prev, curr) => prev + curr); // reduce сворачивает массив одно значение или другой массив через какое-то действие
// }

// console.log(sum(10, "Hi", null, undefined, "20"));

// ==

// function sum(...args) {
//     return args.filter(e => typeof e == 'number').reduce((prev, curr) => prev + curr);
// }

// console.log(sum(10, "Hi", null, undefined, 20));


// конкатенация с функцией
// let combine = (...args) => args.reduce((prev, curr) => prev + " " + curr) // () обязательны в случае с ...
// console.log(combine("Hello", "World", "!"));

// function hello(name){
//     name = name || "незнакомец"; // || допускает то, что первая истина не допускает, что следующий элемент после || не отработает // а если ложь, пойдем на следующее значение // старый способ
//     document.writeln("Привет, " + name + "!<br>");
// }

// hello("Сергей");
// hello();

// ==

// function hello(name = "незнакомец") { // если ничего не пришло, возьмётся значение по умолчанию, а если что-то пришло, то перезаписываем
//     document.writeln("Привет, " + name + "!<br>");
// }

// hello("Сергей");
// hello();

// function fn(a = 0, b = 0) { // значения по умолчанию - подстраховка
//     console.log(a + b); //

// }

// fn(1, 2);
// fn(1);


// прямоугольник через функцию
// function rectangle(w, h=100, fon="gold"){ // w необязательно, растянется из-за правил html
//     document.writeln("<div id='shape'></div>");
//     let id = document.getElementById("shape");
//     id.style.width = w + "px";
//     id.style.height = h + "px";
//     id.style.background = fon;
// }

// // rectangle(200, 100, "green"); // в фон попадает новое значение
// // rectangle(200, 100); // в фон попадает цвет по умолчанию
// // rectangle(300);
// rectangle("red"); // red проигнорировалось, так нельзя, перед ним нужно что-то записать


// глобальные и локальные переменные
// let j = 2; // глобальная переменная

// function ch(){
//     let j = 3; // локальная переменная
// }

// ch();
// console.log(j); // отобразится глобальная переменная = 2


// let j = 2; // глобальная переменная

// function ch(){
//     j = 3; // локальная переменная
// }

// ch();
// console.log(j); // отобразится локальная переменная = 3




// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

// function square(num){
//     return num * num;
// }

// function func(num1, num2) {
//     return square(num1) + square(num2);
// }

// console.log(func(2, 3));

// ==
// вложенная функция

// function func(num1, num2) {
//     function square(num){
//     return num * num;
// }
//     return square(num1) + square(num2);
// }

// console.log(func(2, 3));
// console.log(square(4)); // так нельзя! вложенная функция как и локальная переменная, в локальной области видимости

// function test(){
//     let num = 5;

//     function func(){
//         console.log(num); // видно
//     }

//     func();
// }
// test();

// function test(num1, num2) { // 5, 2
//     function func() {
//         console.log(num1 + num2); // 2 + 2
//     }
//     num1 = 2; // первее работает
//     func(); // вызываем функцию
// }
// test(5, 2);

// function test(num){ // 5
//     function func(localNum){ // 7
//         console.log(localNum); // 7
//     }
//     func(num + 2); // 5 + 2 = 7
// }
// test(5);

// function func(){
//     return function(str){
//         return str;
//     }
// }
// console.log(func()("!")); // одна функция возвращает другую, через вторые () вызываем (сколько угодно можно их поставить)

// function func(num1){
//     return function(num2){
//         return num1 + num2;
//     }
// }
// console.log(func(1)(2));

// function func(num1){ // 2
//     let mas = [];
//     return function(num2){ // 3
//         return function(num3){ // 4
//             return function(num4){ // 5
//                 return function(){
//                     mas = [num1, num2, num3, num4];
//                     return mas;
//                 }
//             }
//         };
//     }
// }
// console.log(func(2)(3)(4)(5)());


// function hello(){
//     console.log("Привет");
// }

// let fn = hello; // можем положить функцию в переменную
// console.log(hello); // функция не вызывается, а просто выводится на экран



// ЗАМЫКАНИЕ
// кладём функцию в переменную

// function test(){
//     let num = 5;

//     return function(){
//         console.log(num);
//     }
// }

// let func = test();
// // console.log(func);
// func();

// function outer(n){
//     return function(x){
//         return n + x;
//     }
// }

// let add5 = outer(5);
// console.log(add5(10));

// let add6 = outer(6);
// console.log(add6(10));




// function test(city){
//     let num = 0;
//     return function(){
//         num++;
//         console.log(city, num); 
//     }


// }

// let func1 = test("Москва"); // первый вызов/инициализация переменной
// func1(); // Москва 1
// let func2 = test("Сочи");
// func2(); // Сочи 1
// func2(); // Сочи 2
// func1(); // Москва 2
// func1(); // Москва 3
// func2(); // Сочи 3
// func2(); // Сочи 4


// написать функция, которая выбирает только значения между 3 и 6 (включительно)
// написать функция, которая выбирает только элементы совпадающие с одним из элементов массива [1, 2, 10]


// function isBetween(a, b) {
//     return function (x){
//         return x >= a && x <= b; // в х по очереди будут приходить цифры из массива // 3 >= 3 && 3 <= 6 => true
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(isBetween(3, 6))); // фильтр передаёт каждый элемент из массива по очередипо принципу true => возврат, false => отмена

// ==

// function isBetween(a, b) {
//     return;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(function (x) {
//     return x >= a && x <= b;
// }))(3, 6); // фильтр передаёт каждый элемент из массива по очередипо принципу true => возврат, false => отмена


// function isArray(arr) { // [1, 2, 10].includes(3)
//     return function (x) {
//         return arr.includes(x);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(isArray([1, 2, 10])));





// КОПЕЙКИ в функции

// let mas = ["копеек", "копейка", "копейки", "- число за пределами диапазона"];
// let first = 1;
// let last = 199;
// let ch = prompt("Введите количество копеек (от 1 до 99)", 5);
// console.log(ch, countKop(first, last, ch)(mas)); // mas попадает в arr

// function countKop(start, end, num) {
//     // if(num < 0)
//     //     num = (-1) * num 
//     let n = num % 10;
//     let m = num % 100;

//     // if (start <= num && num <= end) {
//     //     chislo = n == 1 && m != 11 ? 1
//     //         : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
//     //         : 0;
//     // } else {
//     //     chislo = 3;
//     // }

//     // ==

//     let chislo = !(start <= num && num <= end) ? 3
//         : n == 1 && m != 11 ? 1
//             : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
//                 : 0

//     return arr => arr[chislo];
// }


// СТРОКОВЫЕ ЗНАЧЕНИЯ

// let str = "I'm a JavaScript \"programmer\"";
// document.writeln(str + "<br>");

// str = str[2] + "y"; // у строки есть индексы
// document.writeln(str + "<br>");

// document.writeln(str.length + "<br>"); // 29

// document.writeln(str[6] + "<br>"); // J
// // ==
// document.writeln(str.at(6) + "<br>"); // J // может поддерживать отицательные индексы, чтобы считать с конца
// document.writeln(str.at(-2) + "<br>"); // кможет поддерживать отицательные индексы, чтобы считать с конца

// for(let ch of str){
//     console.log(ch);
// }



// let s = "абббабввбабвбвббабвббабв";
// countLetters(s);

// function countLetters(st){
//     let letters = ["а", "б", "в"];
//     for(let i = 0; i < letters.length; i++){ // ["а", "б", "в"]
//         let count = 0; // 5
//         for(let j = 0; j < st.length; j++){ // "абббабввбабвбвббабвббабв"
//             if(st[j] == letters[i]){ // а == а
//                 count++; // 5
//             }
//         }
//         document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз<br>")
//     }
// }

// let newStr = str.toUpperCase();
// document.writeln(str.toUpperCase() + "<br>"); // преобразование в верхний регистр
// document.writeln(str.toLowerCase() + "<br>"); // преобразование в нижний регистр 
// document.writeln(str + "<br>"); // но исходная строка не меняется
// document.writeln(newStr + "<br>");

// Имя всегда с большой буквы

// let n = prompt("Введите имя", "игорь");
// alert(first(n));

// function first(st){
//     let newStr = st[0].toUpperCase();
//     for(let i = 1; i < st.length; i++){
//         newStr += st[i].toLowerCase();
//     }

//     return newStr;
// }

// let str1 = "Я учу JavaScript. Мне нравится JavaScript";

// // let a = "Hello";
// // let b = "World";
// // // str = str.concat(". ", str1, ". ", a, ". ", b); // конкатенация
// // // ==
// str = str.concat(". ", str1); // конкатенация
// document.writeln(str + "<br>");

// let message = "*";
// document.writeln(message.repeat(50) + "<br>"); // сколько раз повторить элемент

// document.writeln(str.indexOf("JavaScript") + "<br>"); // возвращает индекс, на котором находится подстрока (где находится первая буква) или "-1", если ничего не найдено
// document.writeln(str.indexOf("JavaScript1") + "<br>"); // -1
// document.writeln(str.indexOf("JavaScript", 7) + "<br>"); // начинаем поиск с 7го индекса
// document.writeln(str.lastIndexOf("JavaScript") + "<br>"); // начинаем поиск с последнего индекса
// // Эти методы регистрозависимы. Можем сначала перевести в нижний регистр

// let email;

// do{
//     email = prompt("Введите свой email:");
//     if(email.indexOf("@") == -1){
//         alert("Некорректный email. Введите правильный");
//         continue;
//     }
//     break;
// } while(true);
// alert("Спасибо! Мы приняли ваши контактные данные");


// document.writeln(str.includes("JavaScript") + "<br>"); // true если элемент есть, false, если нет
// document.writeln(str.startsWith("JavaScript") + "<br>"); // false
// document.writeln(str.startsWith("JavaScript", 6) + "<br>"); // true
// document.writeln(str.startsWith("I'm") + "<br>"); // true
// document.writeln(str.endsWith("JavaScript") + "<br>"); // true


// ПРЕОБРАЗОВАНИЕ СТРОКИ В МАССИВ

// console.log(str.split(" ")); // получить массив из строки с разделителем (separator), по умолчанию нет // ПРЕОБРАЗОВАНИЕ СТРОКИ В МАССИВ

// console.log(str.split(" ", 3)); // number после разделителя - сколько элементов массива берём
// console.log(str.split(". ", 3)); // получили массив, в котором каждое предложение - элемент массива
// console.log("05-04-2026".split("-", 3)); // в массив попадут только цифры // символ разделитель убираем


// ЗАМЕНЯЕМ СЛОВА В МАССИВАХ И СТРОКАХ

// let arr = str.split("JavaScript");
// console.log(arr);
// let st = arr.join("C++");
// document.writeln(st + "<br>");

// let text = st.replace("C++", "JavaScript"); // заменяет первое найденное слово на второе в аргументах
// document.writeln(text + "<br>");

// let textBetter = st.replaceAll("C++", "JavaScript"); // заменяет все вхождения на второе в аргументах
// document.writeln(textBetter + "<br>");




// document.writeln(str.slice(0, 3) + "<br>"); // берём символы из индексов строки, откуда начинаем, где заканчиваем // второй индекс не включается
// document.writeln(str.slice(6)) // второй параментр не указан - идём до конца строки
// document.writeln(str.slice(-23) + "<br>"); // здесь работают отрицательные индексы

// document.writeln(str.substring(0, 3) + "<br>"); // работает как slice
// document.writeln(str.substring(6) + "<br>");
// document.writeln(str.substring(-23) + "<br>"); // разница только в том, что метод не понимает отрицательные индексы - их приравнивает к 0
// document.writeln(str.substring(3, 0) + "<br>"); // поменяет их местами


// background-color => backgroundColor
// list-style-type => listStyleType

// let style = prompt("Введите свойство CSS", "background-color");
// alert(def(style));

// function def(st) {
//     // for(let i = 0; i < st.length; i++){
//     //     if(st[i] == "-"){
//     //         st[i].st[i+1] == st[i+1].toUpperCase();
//     //     }
//     // }
//     // неверно!

//     let arr = st.split("-");
//     console.log(arr);
//     for(let i = 1; i < arr.length; i++){
//         // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
//         // ==
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); // второй нолик это первый индекс внутри элемента массива
//     }

//     return arr.join("");
// }



// let hello = "   Hello  ";
// console.log(">" + hello + "<");
// let beforeLength = hello.length;
// console.log("Длина строки до:", beforeLength);

// hello = hello.trim(); // trim метод убрает все пробелы в принимаемом элементе
// console.log(">" + hello + "<");
// let afterLength = hello.length;
// console.log("Длина строки после:", afterLength);

// let add = hello.padStart(15); // сначала добавляется 15 пробельных символов
// console.log(">" + add + "<");

// let addEnd = hello.padEnd(15, "_"); // в конце добавляется 15 пробельных символов // есть второй параметр - символ для заполнения
// console.log(">" + addEnd + "<");



// document.writeln(05); // 0 перед числом (кроме вещественных) нельзя ставить
// document.writeln(1);


// document.writeln("hello" > "Hello"); // 104 > 72 // сравнение строк
// document.writeln("hello".codePointAt(0)); // получаем код символа
// document.writeln("Hello".codePointAt(0)); 
// document.writeln("Ё".codePointAt(0)); // 1025 
// document.writeln("А".codePointAt(0)); // 1040 
// document.writeln("Я".codePointAt(0)); // 1071 
// document.writeln("а".codePointAt(0)); // 1072 
// document.writeln("я".codePointAt(0)); // 1103   
// document.writeln("ё".codePointAt(0)); // 1105

// // Ё.. А-Яа-я.. ё

// document.writeln(String.fromCodePoint(104));
// document.writeln(String.fromCodePoint(1025));


// let a = 97;
// let b = 122;

// if(a > b){
// for(let i = b; i <= a; i++){
//     document.writeln(String.fromCodePoint(i));
// }
// } else {
//     for(let i = a; i <= b; i++){
//     document.writeln(String.fromCodePoint(i));
// }
// }



// ГЕНЕРАЦИЯ СЛУЧАЙНОГО ПАРОЛЯ

// let shortest = 12;
// let longest = 18;
// let minASCII = 33;
// let maxASCII = 126;

// function randomPassword(){
//     let randomLenth = rand(shortest, longest);
//     let res = "";
//     for(let i = 0; i < randomLenth; i++){
//         let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
//         res = res + randomChar;
//     }

//     return res;
// }

// function rand(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// document.writeln("Ваш случайный пароль: " + randomPassword());




// РЕКУРСИВНАЯ ФУНКЦИЯ
// используется для замены циклов, чтобы сделать код красивее // но не только для красоты
// сложны в визуальном восприятии
// работают по принципу цикла
// Функция вызывает сама себя, и перейти к строчке дальше только тогда, когда функция сделает return
// 3 закона рекурсии: 1. Базовый случай - необходимое условие выхода из функции
// с помощью рекурсии делаются бесконечные анимации, браузер защищает нас того, что будет переполнение памяти

// function elevator(n){ // 5 // 4
//     if(n == 0){ // 5 != 0 => skip // 4 != 0 => skip
//         document.writeln("Вы в подвале<br>");
//         return; // прерывает выполнение функции
//     }
//     console.log(n); // 5

//     elevator(n - 1); // функция вызывает сама себя, пока мы не выйдем из рекурсии // функция попадает в стек (область памяти компьюетра, которая хранит данные особо): здесь данные на первую книжку можно положить только сверху первой и т.д. Забрать же данные можно только сверху вниз, одну книгу за другой // 5 - попадаем вниз стека, первая книга // 4 - кладём сверху 5
//     document.writeln(n + " ");
// }

// let n1 = prompt("На каком вы этаже: ", 5);
// elevator(n1);



// Вычислить сумму чисел от 1 до n

// function sum(n){
//     if(n <= 1){
//         return n; // 1 => возвращается в вызов функции
//     }
//     return n + sum(n - 1); // 5 + 4 + 3 + 2 + 1
// }

// document.writeln(sum(5)); // 1 + 2 + 3 + 4 + 5 = 15


// let chislo = +prompt("Число:", 2);
// let stepen = +prompt("Степень:", 4);
// document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));

// function degree(ch, st){ // 4
//     if(st){ // работает для всех чисел, кроме 0
//         return ch * degree(ch, st - 1); // 2 * 2 * 2 * 2 * 1
//     }
//     return 1; // возвращается вместо вызова функции
// }


// 5! = 1 * 2 * 3 * 4 * 5

// let factorial = n => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }

// document.writeln(factorial(5));

// перевести в рекурсивную функцию

// function toStr(n, base){
//     let convert = "0123456789ABCDEF";
//     if(n < base){ // 254 < 10 => else
//         return convert[n];
//     } else {
//         return toStr(parseInt(n / base), base) + convert[n % base]; // convert[254 % 10] => 4 => convert[4] => '4'; parseInt(n / base) => 25,4 => 25
//     }
// }

// document.writeln(toStr(254,16));

// СОБЫТИЯ

// обработчик события - on + название события


// function loadStr() {
//     alert("Страница была загружена");
// }

// function over() {
//     document.getElementById("mes").style.color = "red";
// }

// function out() {
//     document.getElementById("mes").style.color = "yellow";
// }

// function change() {
//     let id = document.querySelector("h2");
//     id.style.color = "blue";
// }

// function randomBg() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = `rgb(${r},${g}, ${b})`;
// }

// let newImg = document.querySelector("#newImg");

// function on(){
//     newImg.src = "night.png";
// }

// function off(){
//     newImg.src = "day.png";
// }

// let but = document.getElementById("but"); // если мы обращаемся к id мы можем не получать к нему доступ // но так лучше не делать

// but.onclick = function(){ // методы событий писать в нижнем регистре
//     alert("Спасибо!");
// }

// function hello(){
//     alert("Спасибо!");
// }

// but.onlick = hello; // ставим без круглых, чтобы функция вызывалась только при условии


// ИМБА случайная смена значения цвета фона страницы

// let hex = "0123456789ABCDEF".split(""); // преобразовать в массив

// let button = document.getElementById("btn");
// let color = document.querySelector(".color");

// button.onclick = function(){
//     let hexColor = generateHex();
//     console.log(hexColor);
//     color.textContent = hexColor;
//     document.body.style.background = hexColor;
// }

// function generateHex(){
//     let hexColor = "#";
//     for(let i = 0; i < 6; i++){
//         hexColor += hex[getRandomNumber()];
//     }
//     return hexColor;
// }

// function getRandomNumber(){
//     return Math.floor(Math.random() * hex.length); // случайное значение из массива hex
// }



// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color = "red";
// }

// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color = "red";
// }


// function setColor(color){
//     document.body.style.background = color.className; // по названию класса берём цвет для фона всего сайта
// }

























// НОВЫЕ СПОСОБЫ ОБРАЩЕНИЯ К ЭЛЕМЕНТАМ НА HTML

// let el = document.querySelector("#elem");

// // элемент.addEventListener("тип события", функция);

// el.addEventListener("click", function(){
//     el.innerHTML = "Новый текст";
// });

// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// });


// ПОЛЕ ПОИСКА

// let searchInput = document.querySelector("#searchInput");
// let list = document.querySelectorAll("#list li");

// searchInput.addEventListener("input", function(){
//     let searchTerm = this.value.toLowerCase();
//     // console.log(searchTerm);
//     // console.log(list.length);

//     for(let i = 0; i < list.length; i++){
//         let item = list[i];
//         // console.log(item);
//         if(item.textContent.toLowerCase().indexOf(searchTerm) !== -1){
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     }
// });


// let but = document.querySelector("button");

// but.addEventListener("click", function(event){ // название может быть любое, но принято называть event, в логах мы увидим множество методов, которые мы сможем менять
//     console.log(event);

// });

// let buttons = document.querySelectorAll("input");

// let handleClick = function(event){
//     console.log("Кликнули по:", event.target.value); // target - это DOM элемент, у которого вызывается событие, возвращает в консоль

// }

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener("click", handleClick);
// }


// document.addEventListener("mousemove", function(event){
//     let c = document.querySelector("#ev");
//     let x = event.clientX;
//     let y = event.clientY;


//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener("dblclick", function(event){
//         event.target.style.background = "red";
//     });
// });

// let section = document.querySelector("section");
// let div = document.querySelector("div");
// let p = document.querySelector("p");

// // Фазы события:
// // - фаза захвата (сверху вниз)
// // - фаза цели (на каком элементе произошло событие)
// // - фаза всплытия (событие идёт обратно - снизу вверх)

// section.addEventListener("click", function(){
//     // section.style.background = "red";
//     // ==
//     this.style.background = "red";
// });

// div.addEventListener("click", function(event){
//     div.style.background = "orange";
//     event.stopPropagation(); // останавливает событие всплытия
// });

// p.addEventListener("click", function(){
//     p.style.background = "yellow";
// });

// ПРОДОЛЖИТЬ

// let link = document.querySelector("a");

// link.addEventListener("click", function (event) {
//     event.preventDefault(); // Отмена действия тега по умолчанию
//     console.log("Переход по ссылке отменён");
// })


// let input = document.querySelector("#but");
// input.addEventListener("click", handle);

// function handle(){
//     alert("Спасибо");
//     input.removeEventListener("click", handle); // удалить слушатель события
// }




// setTimeout(функция, задержка);

// setTimeout("alert('Текст')", 3000);

// setTimeout(hello, 3000); // функцию не вызываем скобками. или заключаем скобки в кавычки

// function hello(){
//     alert("Текст");
// }


// setTimeout("hello('Привет', 'друг')", 3000);

// function hello(h, n){
//     alert(h + ", " + n + "!");
// }

// ==

// setTimeout(hello, 3000, 'Привет', 'друг');

// function hello(h, n){
//     alert(h + ", " + n + "!");
// }



// setTimeout(hello); // выведется сразу

// function hello(){
//     alert("Привет!");
// }


// document.writeln("<div id='dt'>Создание анимированного текста</div>");

// let tag = document.querySelector("#dt");
// let text = document.querySelector("#dt").innerHTML;
// let i = 0;

// window.addEventListener("load", animText)

// function animText(){
//     tag.innerHTML = text.substring(0, i); // от какого-то индекса до другого индекса получить значения
//     i++; 
//     if(i > text.length){
//         i = 0;
//     }

//     setTimeout(animText, 100); // создаёт рекурсию с таймером
// }


// let d = new Date();
// document.writeln(d + "<br>");
// document.writeln(d.toDateString() + "<br>");
// document.writeln(d.getFullYear() + "<br>"); // 2026
// document.writeln(d.getMonth() + "<br>"); // 3, месяцы идут от 0 по 11
// document.writeln(d.getDate() + "<br>"); // 12, дата идёт корректно
// document.writeln(d.getDay() + "<br>"); // 0 - воскресенье, 1 - понедельник, ... 6 - суббота


// let d = new Date(2026).getTime(); // получить время от начала цифровой эпохи в миллисекундах, 1 января 1970 года
// console.log(d);

// let d = new Date(2026, 11, 18, 10, 0, 0); // год, индекс месяца (на 1 меньше, чем у нас), дата, часы, минуты, секунды
// console.log(d);


// let d = new Date(2026, 11, 18, 10, 0, 0).getFullYear();
// console.log(d);








// document.writeln("<input type='button' value='Start/Stop'>");
// document.querySelector("input").addEventListener("click", st);

// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// let act, run; // run = undefind // true
// console.log(run);

// function st(){
//     if(!run){ // (!true)
//         act = setInterval(setColor, 1000);
//         run = true;
//     } else {
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run;
// }




// что-то не так, надо проверить
// document.writeln("<input type='button' value='Start'>");
// document.writeln("<input type='button' value='Stop'>");
// document.querySelector("input").addEventListener("click", st);
// document.querySelectorAll("input")[1].addEventListener("click", st2);

// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// let act;
// function st(){
//     setInterval(setColor, 1000);
//     console.log(act);

// }

// function st2(){
//     clearInterval(act);
// }


// МЕТОДЫ ДЛЯ РАБОТЫ С ДАТАМИ


// РАБОЧИЕ ЧАСЫ

// document.writeln("<div id='text'>Время</div>");

// window.addEventListener("load", () => setInterval(time, 1000)); // setInterval и setTimeOut нужно окружить какой-то функцией
// // ==
// // window.addEventListener("load", function () {
// //     setInterval(time, 1000);
// // });

// function time() {
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(min < 10){
//         min = "0" + min;
//     }
//     if(sec < 10){
//         sec = "0" + min;
//     }
//     if(hour < 10){
//         sec = "0" + min;
//     }
//     let t = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = t;

// }


// СЕКУНДОМЕР

// document.writeln(`
//         <input type="text" id="timer" value="0.0" size="4">
//         <input type="button" value="Start/Stop">
//         <input type="button" value="Clear">
//     `);

// document.querySelector("input[value='Start/Stop']").addEventListener("click", startTimer);
// document.querySelector("input[value='Clear']").addEventListener("click", resetTimer);

// let act, run;
// function startTimer(){
//     if(!run){
//         act = setInterval(incTimer, 100);
//     } else {
//         clearInterval(act);
//     }
//     run = !run;
// }

// let tsec = 0;
// function incTimer(){
//     tsec++;
//     let t = tsec / 10.0;
//     if(tsec % 10 == 0){
//         t += ".0";
//     }
//     document.getElementById("timer").value = t;
// }

// function resetTimer(){
//     document.getElementById("timer").value = "0.0";
//     tsec = 0;
// }




// ВРЕМЯ ДО ИСТЕЧЕНИЯ АКЦИИ

// let countdownElement = document.querySelector(".countdown");
// let items = document.querySelectorAll(".countdown-item > h4");

// let countdownDate = new Date(2026, 3, 18, 16, 29, 0).getTime();
// // console.log(countdownDate);

// function getCountTime(){
//     let now = new Date().getTime();
//     // console.log(now);

//     let distance = countdownDate - now;

//     /* 
//     1c = 1000мс 
//     1м = 60с
//     1ч = 60м
//     1д = 24ч
//     */

//     let oneDay = 24 * 60 * 60 * 1000;
//     let oneHour = 60 * 60 * 1000;
//     let oneMinute = 60 * 1000;

//     let days = Math.floor(distance / oneDay);
//     let hours = Math.floor(distance % oneDay / oneHour);
//     let minutes = Math.floor(distance % oneHour / oneMinute);
//     let seconds = Math.floor(distance % oneMinute / 1000);

//     let values = [days, hours, minutes, seconds];

//     items.forEach(function(item, index){ // в первый аргумент попадает значение из .countdown-item > h4, а во второй индекс этого элемента и так для каждого
//         item.textContent = values[index];
//     })

//     if(distance < 0){
//         clearInterval(countdown);
//         countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>";
//     }
// }

// let countdown = setInterval(getCountTime, 1000);
// console.log(countdown);


// getCountTime();


// ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТА ПО ДИАГОНАЛИ

// let but = document.querySelector("#cl");
// but.addEventListener("click", myMove);
// let flag;

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id, id2;
//     id = setInterval(frame, 10);

//     if (!flag) {
//         id = setInterval(frame, 8);
//     } else {
//         id2 = setInterval(reverse, 8);
//         pos = 350;
//     }
//     flag = !flag;

//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
//     function reverse() {
//     if (pos == 0) {
//         clearInterval(id2);
//     } else {
//         pos--;
//         elem.style.top = pos + "px";
//         elem.style.left = pos + "px";
//     }
// }
// }




// document.image.border = "1"; // обращение к атрибуту по name
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.width = 200;
// document.image.height = 50;

// document.writeln("<br>***************************************************")
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.src = "blue_star.png";


// document.image.addEventListener("click", changeImage);

// let flag = 0;
// function changeImage(){
//     if(flag == 0){
//         document.image.src = "blue_star.png";
//         flag = 1;
//     } else {
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }


// СЛАЙДЕР

// let array = new Array("2.jpg", "3.jpg", "4.jpg");

// document.writeln("<input type='button' value='<' name='left'>"); // атрибут name может повторяться
// document.writeln("<img id='sl' src='" + array[0] + "'>");
// document.writeln("<input type='button' value='>' name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", setRight);
// document.getElementsByName("left")[0].addEventListener("click", setLeft);

// let i = 0;
// let image = document.getElementById("sl");
// function setRight(){
//     i++;
//     if(i == array.length){
//         i = 0;
//     }
//     image.src = array[i];
// }

// function setLeft(){
//     i--;
//     if(i < 0){
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }



// БОЛЬШИЕ ЧАСЫ

// let imgTime = new Array("c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif");
// let masImg = document.querySelectorAll("#block img");

// clock();

// function clock(){
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     getImg(hours, minutes, seconds);
//     setTimeout(clock, 1000);
// }

// function getImg(h, m, s){
//     masImg[0].src = imgTime[parseInt(h/10)];
//     masImg[1].src = imgTime[h%10];

//     masImg[3].src = imgTime[parseInt(m/10)];
//     masImg[4].src = imgTime[m%10];

//     masImg[6].src = imgTime[parseInt(s/10)];
//     masImg[7].src = imgTime[s%10];
// }




// ВЗАИМОДЕЙСТВИЯ СО СТРУКТУРОЙ DOM

// alert(document.documentElement.innerHTML); // всё содержимое html
// alert(document.head.innerHTML); // всё содержимое тега head
// alert(document.body.innerHTML); // всё содержимое тега head

// let myTitle = document.querySelector("h1");
// console.log(myTitle);
// // let title3 = document.querySelector("h3").firstChild.nodeValue;
// // console.log(title3);
// // let title3 = document.querySelector("h3").lastChild.nodeValue;
// // console.log(title3);

// let title3 = document.querySelector("h3").childNodes[0].nodeValue;
// console.log(title3);

// let myTitle = document.querySelector("h1");
// alert(myTitle.nodeName);

// let elem = document.querySelector("#root");

// let tag = document.createElement("p"); // <p></p>
// let node = document.createTextNode("Новый текст!!!"); // "Новый текст!!!"
// tag.append(node); // <p>"Новый текст!!!"</p>

// elem.append(tag); // добавляет новый элемент последним дочерним элементом внутри родительского

// elem.prepend(tag); // добавляет новый элемент первым дочерним элементом внутри родительского

// elem.before(tag); // добавляет новый элемент до выбранного id

// elem.after(tag); // добавляет новый элемент после выбранного id

// elem.replaceWith(tag); // заменяет новым элементом выбранный id


// СВОРАЧИВАНИЕ И РАЗВОРАЧИВАНИЕ ПУНКТОВ

// let tree = document.querySelector(".tree");
// for(let li of tree.querySelectorAll("li")){
//     let span = document.createElement("span");
//     li.prepend(span); // <li><span></span>...</li> // кладём первым дочерним элементом (внутри) тег span
//     span.append(span.nextSibling); // кладём следующий элемент (рядом на том же уровне вложенности) (в нашем случае это просто текст) в тег span

// }

// tree.addEventListener("click", function(event){
//     if(event.target.tagName != "SPAN"){
//         return;
//     }

//     let childrenContainer = event.target.parentNode.querySelector("ul");
//     if(!childrenContainer){
//         return;
//     }

//     childrenContainer.hidden = !childrenContainer.hidden;
// })





// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// newItem.textContent = "Новый элемент списка";

// list.append(newItem);

// let i = 1;
// document.querySelector("#func1").addEventListener("click", change);
// document.querySelector("#func2").addEventListener("click", add);

// function change(){
//     let elem = document.querySelector("#list2").lastChild;
//     document.querySelector("#list1").append(elem);
// }

// function add(){
//     let elem = document.createElement("li");
//     elem.textContent = "Water" + i;
//     document.querySelector("#list2").append(elem);

//     i++;
// }



// ФУНКЦИОНАЛЬНЫЙ КАЛЕНДАРЬ

// let calendar = document.getElementById("calendar");
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1; // 4

// createCalendar(calendar, year, month);

// function createCalendar(c, y, m) {
//     let curDate = new Date(y, m - 1, 1); // 3
//     let findDate = new Date(y, m, 0); // последняя дата заданного месяца // 4

//     while(curDate.getDay() != 1){
//         curDate.setDate(curDate.getDate() - 1);
//     }

//     let currentMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     let current = document.createElement("h2");
//     current.textContent = `${currentMonth[m - 1]} ${y}`;
//     c.append(current);

//     let table = document.createElement("table");
//     table.innerHTML = `
//     <tr>
//         <th>пн</th>
//         <th>вт</th>
//         <th>ср</th>
//         <th>чт</th>
//         <th>пт</th>
//         <th>сб</th>
//         <th>вс</th>
//     </tr>
//     `;
//     while (curDate <= findDate) {
//         let tr = document.createElement("tr");
//         for (let i = 0; i < 7; i++) {
//             let td = document.createElement("td");
//             if(curDate.getMonth() == m - 1){
//                 td.textContent = curDate.getDate();
//             }
//             tr.append(td);
//             curDate.setDate(curDate.getDate() + 1);
//         }
//         table.append(tr);
//     }

//     c.append(table);
// }


// ещё способ создания элементов

// let div = document.querySelector("#root");
// div.insertAdjacentHTML("beforebegin", "<p>До выбранного элемента</p>");
// div.insertAdjacentHTML("afterend", "<p>После выбранного элемента</p>");
// div.insertAdjacentHTML("afterbegin", "<p>Первым внутри выбранного элемента</p>");
// div.insertAdjacentHTML("beforeend", "<p>Последним внутри выбранного элемента</p>");

// let child = document.querySelector("#p1");
// // child.remove(); // просто удаляет элемент
// let child2 = document.querySelector("#p2");

// child2.after(child); // меняет элементы местами


// let ul = document.querySelector("ul");
// let li = ul.cloneNode(true); // клонировать ноду со всеми дочерними элементами данных (true) без тру только сам ul, false - значение по умолчанию

// li.querySelector("li").innerHTML = "Начало клонируемых элементов";
// ul.after(li);

// let list = document.querySelector(".list"); // ul
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let listInner = document.querySelector("h2");
// listInner.insertAdjacentText("beforeend", "планет");
// list.insertAdjacentHTML("afterbegin", "<li>Солнце</li>");
// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4); // html разметка недопустима

// let idRemove = setInterval(function () {
//     let li = document.querySelector("li:last-child");
//     if (li === null) {
//         clearInterval(idRemove);
//         list.insertAdjacentHTML("afterbegin", "<li>Список удалён</li>")
//     } else {
//         li.remove();
//     }
// }, 500)






// 26.04

// РАБОТА JS С КЛАССАМИ

// let div = document.querySelector("div");
// div.className = "alert";
// let activeDiv = document.querySelector(".active");
// // activeDiv.className = "hidden"; // перезаписывает класс, который есть (если есть)
// activeDiv.classList.add("hidden"); // добавляет новый класс без перезаписи существующих
// // activeDiv.classList.remove("hidden"); // удаляет указанный класс
// activeDiv.classList.toggle("hidden"); // если класс уже был, он его удаляет, если не было, то добавляет
// activeDiv.classList.replace("active", "alert"); // два аргумента: 1 - какой класс заменяем, 2 - на какой заменяем


// закрашиваемые пункты меню

// let menu = document.querySelector(".menu ul");
// let child = document.querySelectorAll(".menu li");

// menu.addEventListener("click", (event) => {
//     if(event.target.tagName == "LI"){
//         for(let item of child){
//         item.classList.remove("active");
//     }
//     event.target.classList.add("active"); // target - ссылка на объект, на который кликнули, this здесь отработает по отношению к меню
//     }
// });


// let menuElem = document.getElementById("sweeties"); // ищет относительно всего документа
// let titleElem = menuElem.querySelector(".title"); // ищет только внутри дива/элемента который указали в начале

// titleElem.addEventListener("click", function(){
//     menuElem.classList.toggle("open");
// });


// ПРОСТЕЙШИЙ РЕДАКТОР В БРАУЗЕРЕ

// let brush = document.createElement("div");
// brush.classList.add("brush");

// brush.hidden = true; // hidden прячет элемент по булевому зачению

// document.addEventListener("mouseover", function(){
//     // console.log("Событие отработало");
//     brush.hidden = false;
// });

// document.addEventListener("mouseout", function(){
//     // console.log("Событие отработало");
//     brush.hidden = true;
// });

// document.addEventListener("mousemove", function(event){
//     // console.log("Событие сработало", event.clientX, event.clientY);
//     brush.style.left = `${event.clientX}px`;
//     brush.style.top = `${event.clientY}px`;

//     // console.log(event.buttons); // какую кнопку нажали на мышке

//     if(event.buttons === 1){
//         let paint = document.createElement("div");
//         paint.classList.add("paint");

//         paint.style.left = `${event.clientX}px`;
//         paint.style.top = `${event.clientY}px`;

//         document.body.append(paint);
//     }

// });

// document.addEventListener("mousedown", function(){
//     // console.log("Событие отработало");
//     brush.style.scale = "0.8";
// });

// document.addEventListener("mouseup", function(){
//     // console.log("Событие отработало");
//     brush.style.scale = "1";
// });

// document.body.append(brush);



// НОВЫЕ МЕТОДЫ РАБОТЫ С АТТРИБУТАМИ в js

// let frogImg = document.getElementById("green-frog");

// console.log(frogImg.id); // получим реальное название id в консоли, с дефисами
// console.log(frogImg.className);
// console.log(frogImg.alt);
// console.log(frogImg.title);
// console.log(frogImg.src);

// console.log(frogImg.getAttribute("src")); // так можем получить доступ к атрибуту напрямую

// frogImg.title = "Новый текст подсказки";
// // ==
// frogImg.setAttribute("src", "4.jpg"); // 1 аргумент - какой атрибут меняем, 2 - какое значение в него добавляем

// frogImg.removeAttribute("src"); // удаление аттрибута
// console.log(frogImg.hasAttribute("src")); // буллево значение, есть ли аттрибут


// // console.log(frogImg.data-frog); // нельзя
// console.log(frogImg.getAttribute("data-frog")); // можно
// // ==
// console.log(frogImg.dataset.frog); // такое же обращение к пользовательскому аттрибуту


// ПАГИНАЦИЯ

// let lengthPath = 5;
// let pagination = document.querySelector(".pagination");
// let product = document.querySelector(".product-cover");
// let data = new Array(18);
// let filter = document.querySelector(".buttons");

// for(let i = 0; i < data.length; i++){
//     data[i] = document.createElement("div");
//     data[i].classList.add("card");
//     if(i % 3){
//         data[i].classList.add("blue");
//     } else {
//         data[i].classList.add("gray");
//     }
//     let node = document.createTextNode(i + 1);
//     data[i].append(node);
//     product.append(data[i]);
// }

// let chunks = splitParts(data);
// renderChunks(0);
// renderPagination();

// pagination.addEventListener("click", e => {
//     let item = e.target.closest(".pagination-item");

//     if(item){
//         let active = pagination.querySelector('.pagination-item.active'), part;
//         if(item.classList.contains("item-prev") || item.classList.contains("item-next")){ // contains содержит
//             if(item.classList.contains("disable")){
//                 return false;
//             }
//             part = +active.dataset.part; // в part записываем номер части активной страницы // вообще это способ что-то записать в пользовательский атрибут data-part
//             part = item.classList.contains("item-prev") ? part - 1 : part + 1;
//             renderChunks(part);

//             active.classList.remove("active");

//             pagination.querySelector(`.pagination-item[data-part="${part}"]`).classList.add("active");
//         } else {
//             active.classList.remove("active");
//             item.classList.add("active");
//             part = +item.dataset.part;
//             renderChunks(part);
//         }

//         let prev = pagination.querySelector(".pagination-item.item-prev");
//         let next = pagination.querySelector(".pagination-item.item-next");

//         if(prev.classList.contains('disable')){
//             prev.classList.remove("disable");
//         }
//         if(next.classList.contains('disable')){
//             next.classList.remove("disable");
//         }

//         if(part == 0){
//             prev.classList.add("disable")
//         }
//         if(part === chunks.length - 1){
//             next.classList.add("disable")
//         }

//     }
// });

// function splitParts(arr){
//     if(arr.length > lengthPath){ // 18 > 5
//         let chunks = [];

//         for(let i = 0; i < arr.length; i += lengthPath){
//             chunks.push(arr.slice(i, i + lengthPath))
//         }

//         return chunks;
//     } else {
//         return arr;
//     }
// }

// function renderChunks(part){
//     if(part >= 0 && part <= chunks.length){
//         product.innerHTML = "";
//         chunks[part].map(elem => product.append(elem)); // выводим в исходном массиве элемент, его добавляем через append
//     } else {
//         return false;
//     }
// }

// function renderPagination(){

//     if(chunks.length > 1){
//         chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item${i === 0 ? " active" : ""}' data-part="${i}"><a href="#">${i + 1}</a></li>`));

//         pagination.insertAdjacentHTML("afterbegin", `<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>`);
//         pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item item-next'><a href='#'>next</a></li>`);
//     }
// }

// filter.addEventListener("click", e => {
//     let btn = e.target.closest(".btn"); // получаем доступ к каждому элементу с классом btn
//     pagination.innerHTML = "";
//     if(btn){ // берём тот btn который нажат
//         if(btn.dataset.filter !== "all"){
//             chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
//         } else {
//             chunks = splitParts(data);
//         }
//     }
//     renderChunks(0);
//     renderPagination();
// });




// ВЗАИМОДЕЙСТВИЕ С ФОРМАМИ НА СТРАНИЦЕ

// let form = document.querySelector("form");
// // console.log(form.length); // отобразит количество тегов внутри
// console.log(form.elements); // выведет массив из элементов тега
// // console.log(form.name); // значение атрибута name
// // console.log(form.action); // значение атрибута action
// // console.log(form.method); // значение атрибута method

// // document.form1.style.background = "silver"; // получаем доступ к форме по name


// // получаем доступ к форме через псевдомассив forms
// // document.forms[0].style.margin = "20px"; // работает, но если вдруг на странице появится новая форма, всё слетит
// // document.forms["form1"].style.padding = "16px"; // будет работать, если id у формы с "-" 
// // document.forms.form1.style.border = "2px dotted gray" // не будет работать, если id у формы с "-"

// let key = form.elements[0];
// console.log(key); // полностью получаем вложенный элемент по индексу

// let key2 = form.elements["name1"];
// console.log(key2); // полностью получаем вложенный элемент по имени


// document.form1.name1.style.color = "blue";
// document.form1["name1"].style.background = "aqua";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener("click", content);

// function content(){
//     alert(txt.value);
// }



// ограничиваем введение символов в форме

// let text = document.querySelector("input");
// let output = document.querySelector("#length");

// text.addEventListener("input", function(){ // отслеживаем изменения в input
//     output.textContent = text.value.length + " / 30";
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     console.log("Сохранённые данные: " + form.elements.value.value);
//     event.preventDefault(); // отменяет переход по ссылке из action формы
// });




// ВВОД ПАРОЛЯ

// let reg = document.querySelector(".register");
// let h2 = document.querySelector("h2");
// let win = document.createElement("p");
// h2.after(win);

// reg.addEventListener("submit", function(event){
//     event.preventDefault();

//     let login = reg.login.value;
//     let password = reg.psw.value;
//     let password2 = reg.psw2.value;
//     let errors = "";
//     console.log(login);

//     if(login == "" || password == "" || password2 == "") {
//         win.className = "red";
//         win.innerHTML = "Все поля должны быть заполнены";
//         return;
//     }

//     if(password !== password2){
//         errors += "Пароли не совпадают<br>"
//     }

//     if(password.length < 6){
//         errors += "Слишком короткий пароль"
//     }

//     if(errors == ""){
//         win.className = "green";
//         win.innerHTML = "Регистрация прошла успешно";
//     } else {
//         win.className = "red";
//         win.innerHTML = errors;
//     }

// });



// редактируемый список

// let input = document.querySelector("#input");
// let list = document.querySelector("#list");


// input.addEventListener('keypress', function(event){ // нажали любую клавишу
//     if(event.key == 'Enter'){ // нажали конкретную клавишу
//         let li = document.createElement("li");
//         let task = document.createElement("span");
//         task.classList.add("task");
//         task.textContent = input.value;
//         task.addEventListener("dblclick", function(){
//             let text = this.textContent;
//             this.textContent = "";

//             let edit = document.createElement("input");
//             edit.type = "text";
//             edit.id = "ed";
//             edit.value = text;
//             this.append(edit);


//             let self = this;
//             edit.addEventListener("keypress", function(event){
//                 if(event.key == 'Enter'){
//                     self.textContent = edit.value;
//                 }
//             });
//         });

//         li.append(task);

//         let remove = document.createElement("span");
//         remove.textContent = "Удалить";
//         remove.classList.add('remove');
//         remove.addEventListener("click", function(){
//             remove.parentNode.remove();
//         });
//         li.append(remove);

//         let mark = document.createElement("span");
//         mark.textContent = "Выполнено";
//         mark.classList.add("mark");
//         mark.addEventListener("click", function(){
//             mark.parentNode.classList.toggle("done"); // toggle чтобы вычеркивать и зачеркивать
//             // mark.addEventListener("dblclick", function(){
//             //     mark.parentNode.classList.remove("done");
//             // })
//         });
//         li.append(mark);

//         list.append(li);
//         input.value = "";
//     }
// });



// let checkbox = document.querySelector("#purple");
// checkbox.addEventListener("change", function(){
//     document.body.style.background = checkbox.checked ? "mediumpurple" : ""; // если true - цвет, если false - цвет пропадает
// });


// выводим в алерт выбранные чекбоксы
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     let checkboxes = document.querySelectorAll("input[name='language']:checked");
//     console.log(checkboxes);
//     let selected = Array.from(checkboxes).map(checkbox => checkbox.value)

//     alert(`Выбранные языки: ${selected.join(", ")}`)
// });


// let input = document.querySelectorAll("input");
// let form1 = document.forms.form1;

// // console.log(form1.length);
// for (let i = 0; i < form1.length; i++) {
//     input[i].addEventListener('click', checkAll);
// }

// let numChecked;
// function checkAll() {
//     numChecked = 0;
//     for (let i = 0; i < form1.length; i++) {
//         if (input[i].checked) {
//             numChecked++;
//         }
//     }

//     if (numChecked == 3) {
//         for (let i = 0; i < form1.length; i++) {
//             if (!input[i].checked) {
//                 input[i].disabled = true;
//             }
//         }
//     } else {
//         for (let i = 0; i < form1.length; i++) {
//             input[i].disabled = false;
//         }
//     }
// }






// insert ПРОПАВШЕЕ ЗАНЯТИЕ  17.05











// значение ползунка в цифру

// document.getElementById("slider").addEventListener("input", function(){ // change вместо input не подойдёт // this у стрелочной функции будет работать по другому, то есть в стрелочной не отработает
//     document.getElementById('slider-value').textContent = this.value;
// });



// Редактируемая таблица в HTML

// let tds = document.querySelectorAll("td");

// for(let i = 0; i < tds.length; i++){
//     tds[i].addEventListener("click", function func (){
//         let input = document.createElement("input");
//         input.value = this.innerHTML;
//         this.innerHTML = '';
//         this.append(input);
//         console.log(this);

//         let td = this;
//         input.addEventListener('blur', function(){ // потеря элемента фокуса, если кликнули где-либо не по элементу
//             td.innerHTML = this.value;
//             td.addEventListener('click', func);
//         });

//         this.removeEventListener('click', func);
//     });
// }


// вывод введённых данных пользователя из input

// let userInput = document.getElementById("userInput");
// let name = document.getElementById("displayName");

// userInput.addEventListener("input", function(){
//     name.textContent = this.value || 'Гость';
// });




// let form = document.getElementById("myForm");

// form.addEventListener("submit", function(event){
//     if(!form.checkValidity()){ // встроенный метод проверки на валидацию
//         event.preventDefault();
//         alert("Заполните все поля корректно")
//     }
//     // event.preventDefault(); // Отменяет поведение формы по умолчанию

//     // let username = form.username.value; // можем прям так получить value одного из input формы
//     // console.log(username);
//     // let password = form.password.value;
//     // console.log(password);

//     // ==

//     // let formData = new FormData(form); // встроенный метод, который позволяет получить values из inputs формы
//     // console.log(formData.get("username")); // нужно получить через get нужный нам value из input
//     // console.log(formData.get("password"));

//     let username = form.username.value;
//     let password = form.password.value;

//     if(username.length < 3){
//         event.preventDefault();
//         alert("Имя пользователя должно быть более 3 символов");
//     }

//     if(password.length < 6){
//         event.preventDefault();
//         alert("Пароль должен быть более 6 символов");
//     }

//     console.log(typeof username);
//     console.log(typeof password);

// });



/* Методы:

search - возвращает позицию (индекс) элемента, на которой регулярное выражение совпадает с вызывающей строкой, или "-1", если совпадений нет

match - получает все совпадения с регулярным выражением

replace - замещяет совпадения с регулярным выражением на значение (поиск и замена)

split - чистый метод строк, делит строку на массив, разбивая её по указанной подстроке

test - выполняет поиск совпадений регулярного выражения с подстрокой, возвращает булево значение (true/false)

*/

/* Синтаксис записи:

let regexp = new RegExp("шаблон", "флаги");
// ==
let regexp = /шаблон/флаги;

*/

/* Флаги:

    g (global) - ищет все совпадения поиска как глобальный поиск

    i (ignoreCase) - регистрозависимый поиск

    u - включает поддержку Unicode

    m (multiline) - используется, когда мы работаем с многострочным текстом

    s (dotAll) - . поддерживает \n
*/

/* Диапазон:

[0-9] - любая цифра от 0 по 9
[1-6] - любая цифра от 1 до 6
[а-я] - не все русские буквы от а до я
[А-Яа-я] - не все русские буквы от а до я с учётом всех регистров
[А-яЁё] - все русские буквы
[A-Z] - все английские буквы + некоторые спецсимволы
[A-Za-z] - все английские буквы

[^abc] - ни один из указанных символов
[0-9A-F] - 16ричный диапазон

*/

// let str = "Я ищу совпадения в 2026 году 789535678 Hello_World ё";
// // let regexp = /[206]/g; // квадратные скобки будут искать любое из указанных в них значений, но вернёт только первое // /g - получить все совпадения

// document.writeln(str + "<br><br>");
// document.writeln(str.search(regexp) + "<br>");
// document.writeln(str.match(regexp) + "<br>");
// document.writeln(regexp.test(str) + "<br>"); // для метода тест нужно поменять параметры местами

// let regexp = /[я]/gi;

// let regexp = /[А-я]/gi; // не полностью
// let regexp = /[А-яЁё]/gi; // так будет включено Ёё

// let regexp = /[A-z]/gi;

// let regexp = /[A-Za-z]/g;


// document.writeln(str.match(regexp) + "<br>");

// console.log("Ё", "Ё".codePointAt(0)); // 1025 
// console.log("А", "А".codePointAt(0)); // 1040 
// console.log("Я", "Я".codePointAt(0)); // 1071 
// console.log("а", "а".codePointAt(0)); // 1072 
// console.log("я", "я".codePointAt(0)); // 1103   
// console.log("ё", "ё".codePointAt(0)); // 1105



// function lowerCase(str) {
//     return str.replace(/[А-Я]/g, u => u.toLowerCase()); // все найденные буквы в верхнем регстре переходят в нижний регистр
// }

// console.log(lowerCase("Несколько Слов"));

// let regexp = /[^0-9]/g; // ^ - значение отрицания, что не является чем-то


/* 
{3} - количество символов идущих подряд
{1,} - от 1 до бесконечного количества повторений
{2,5} - от 2 до 5 повторений, либо 2, либо 5
*/

// let regexp = /[0-9]{2,5}/g; // числовое значение в {} возвращает столько-то значений в первой найденной последовательности
// document.writeln(str.match(regexp) + "<br>");

// let html = `
//     <table>
//         <tr>
//             <td bgcolor='#CCC'>
//                 <img src='222.png' />
//             </td>
//             <td bgcolor='#003399'>
//                 <img src='af3.png' />
//             </td>
//             <td bgcolor='#00ccdd'>
//                 <img src='fff.png' />
//             </td>
//         </tr>
//     </table>
// `

// let exp = /#([0-9a-f]{3}){1,2}/ig;
// console.log(html.match(exp));



/* 

. - любой один символ

\d (digit) - любая цифра

\s (space) - пробельный символ (включая табуляция и перевод строки)

\w (word) - ищет цифры, буквы и символы подчёркивания, не поддерживает символы русской раскладки

\b - граница слова

\p{} - юникод символ, L - любая буква

\D - всё, кроме цифр

\S - не пробел

\W - всё, что не является английскими буквами и _ и пр. // все кроме цифр, букв(латиница) и символов подчёркивания

*/


// let regexp = /\w/g; // ищем только те элементы, где сначала идёт пробел, а потом цифра
// document.writeln(str.match(regexp) + "<br>");


// ПОЛУЧАЕМ НОМЕРА ТЕЛЕФОНА

// let string = "Мой номер телефона: +7 (930) 718-98-93. Номер телефона моей супруги: +7 (958) 837-41-26.";
// let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
// let phoneNumbers = string.match(ex);

// console.log(phoneNumbers);


// let regexp = /\W/g;
// document.writeln(str.match(regexp));

// document.writeln("Hello, Java!".match(/\bJava\b/) + "<br>");
// document.writeln("Hello, Java!".match(/\bJava!\b/) + "<br>"); // шаблон не совпадает, потому что ! не является символов слова (буквой), поэтому он не будет границей слова
// document.writeln("Hello, Java!".match(/\bJava!/) + "<br>"); // так можно, если не указываем в конце, что есть буквенный символ
// document.writeln("Hello, JavaScript!".match(/\bJava/) + "<br>"); // так можно, если не указываем в конце, что есть буквенный символ



// document.writeln("1 23 456 78".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("1 23 456 78".match(/\d{2}/g) + "<br>");

// document.writeln("12_,34,56".match(/\b\d{2}\b/g) + "<br>");


// document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\d{2}:\d{2}\b/g));


// let regexp = /[\p{Alpha}]/gu; // русские и английские буквы
// ==
// let regexp = /[\p{L}]/gu;

// let regexp = /[\p{Alpha}\p{Nd}]/gu; // и буквы и цифры
// ==
// let regexp = /[\p{L}\p{N}]/gu;

// document.writeln(str.match(regexp) + "<br>");

/* 

^ - начало строки (если он стоит не в [], перед последовательностью ничего не должно быть)

$ - конец строки (после последовательности ничего не должно быть)

*/

// let html = "909";
// let exp = /^\d{3}/;
// document.writeln(html.match(exp) + "<br>");


// function capitalize(st){
//     return st.replace(/^[а-я]/, u => u.toUpperCase());
// }

// console.log(capitalize("несколько слов"));


/* Количество повторений:

+ => от 1 (повторения) до бесконечности // == // {1,}

? => от 0 до 1 // == // {0,1}

* => от 0 до бесконечности // == // {0,}

*/


// let st = "+7(999)-123-45-67";
// document.writeln(st.match(/\d+/g) + "<br>");

// document.writeln("100 10 1".match(/\d0*/g) + "<br>");

// document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>");


// document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>"); // ищем вещественное число

// document.writeln("..Привет!... Как дела?.....".match(/\.{3,}+/g));


// Важно! Касается таблицы с тегами

// function extractLinks(text){
//     // let regex = /https?:\/\/[^\s]+/g; // ? знак ищет с символом перед ним и без него // [^\s]+ ищет пока не найдёт пробел или конец строки
//     let regex = /https?:\/\/[\w.]+/g; // ищет название сайта
//     return text.match(regex) || [];
// }

// console.log(extractLinks("<a href='http://htmlacademy.ru/'> и <a href='https://topitschool.ru/geotest'>"));



// function validateEmail(email){
//     // let regexp = /^[a-z0-9-.%_]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     // ~==
//     let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
//     return regexp.test(email);
// }

// console.log(validateEmail("user@example.com"));


// let st = `JavaScript@ff
// ssd
// javascript
// JAVASCRIPT
// `;

// console.log(st.match(/^\w+/gm));
// console.log(st.match(/^\w+/gm));


// let re = /CS.3/; // . здесь - любой один! символ
// document.writeln("Стандарт CSS3".match(re) + "<br>");
// document.writeln("Сталь CS-3".match(re) + "<br>");
// document.writeln("Сталь CS  3".match(re) + "<br>"); // null



// let st = "Hello\nworld";
// console.log(st);
// let exp = /Hello.world/s;

// console.log(exp.test(st));


// let regexp = /html|css|java(script)?/gi; // ? - Либо нет повторения, либо есть одно
// let str = "Сначала появился язык Java, затем HTML, потом JavaScript";
// document.writeln(str.match(regexp));


// let html = `
//     <b>my text</b>
//     <img src="222.jpg">
//     <span></span>
//     <img src="aaaa222.png">
//     <img src="bbb222.png">
//     <img src="ccc222.gif">
// `;

// let ex = /\w+\.(jpg|jpeg|png|bmp|gif)/ig;
// document.writeln(", ", html.match(ex));

// function validatePhoneNumber(phoneNumber){
//     let phoneRegex = /^(\+7|8)?\d{10}$/; // ? - часть в скобках может быть и не быть
//     return phoneRegex.test(phoneNumber);
// }

// let phone = "+79123456789";
// // let phone = "89123456789";
// // let phone = "9123456789";

// if(validatePhoneNumber(phone)){
//     console.log("Номер телефона валиден!");
// } else {
//     console.log("Номер телефона НЕ валиден!");
// }


// let regex = /java(script)?|php|c(\+{2})?/gi;
// let str = "Java JavaScript, PHP, C, C++";
// document.writeln(str.match(regex));

// ЦЕНЗУРА

// document.writeln("aaa".replace("a", "b") + "<br>");
// document.writeln("aaa".replace(/a/g, "b") + "<br>");

// let text = "I kill you black dog";
// document.writeln(text + "<br>");
// let exp = /book|kill|black/ig;
// text = text.replace(exp, "***");
// document.writeln("<p>" + text + "</p>");


// let st = "<p>Hello world</p>";
// let reg = /<.+>/g;
// console.log(st.match(reg));



// let st = "131231564";
// let reg = /\d{2,4}/g; // жадный квантификатор
// console.log(st.match(reg));

// let st = "131231564";
// let reg = /\d{2,4}?/g; // ленивый квантификатор
// console.log(st.match(reg));

/* 

*? (от нуля до бескончености)
+?
??
{2,4}? (берёт минимальное число)

*/

// let st = "<p>Hello world</p>";
// let reg = /<[^>]+>/g; // поиск всех тегов
// console.log(st.match(reg));


// let st = "... <!-- My -- comment text --> .. <!----> ..";
// let reg = /<!--.*-->/g;
// // ==
// let reg = /<[^>]+>/g;
// console.log(st.match(reg));


// let st = "<> <a href='#'> <input type='radio' checked> <b>";
// let reg = /<[^>]+>/g; // ищет только теги, без пустых
// // let reg = /<.+>/g; // ищет все теги и пустые тоже
// console.log(st.match(reg));


// let html = "Дмитрий Васильев";
// let exp = /(Дмитрий) Васильев/; // скобочная группа () - сохраняющая скобка, если обратиться потом в массиве к индексу 1, то вернёт это значение
// document.writeln(html.match(exp) + "<br>");

// let html = "site.com и my.site.com";
// let exp = /(\w+\.)+\w+/g; // получить ссылки на сайты
// document.writeln(html.match(exp) + "<br>");


// let st = "<h1>Hello, world</h1>";
// let tag = st.match(/<(.*?)>/); // () - сохранили значение внутри себя
// alert(tag[0]);
// alert(tag[1]);


// let date = "2026-05-30";
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/; // ^ $ - от начала до конца тлолько дата // () - позволяют сохранить в индексы значения гггг/мм/дд отдельно
// let match = date.match(reg);
// let format = match[3] + "." + match[2] + "." + match[1]; // переделываем дату в другой формат
// console.log(format);


// let st = "<span class='my'>";
// let exp = /<(([a-z]+)\s*([^>]*))>/; // вложенные скобки
// let res = st.match(exp);
// alert(res[3]);

// ИМЕНА ДЛЯ ГРУПП

// let date = "2026-05-30";
// let reg = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/; // ?<year> - делаем имя для индексов в круглых скобках
// let match = date.match(reg).groups; // даёт возможность использовать имена групп, но тогда нужно всем группам дать имена
// // let format = match[3] + "." + match[2] + "." + match[1];
// // ==
// let format = match.day + "." + match.month + "." + match.year;
// console.log(format);



// let date = "2026-05-30 2026-07-30 2027-01-30";
// let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g; // ?<year> - делаем имя для индексов в круглых скобках
// let match = date.match(reg);
// // let format = match[3] + "." + match[2] + "." + match[1];
// // ==
// // console.log(match.day + "." + match.month + "." + match.year);

// let res = date.matchAll(reg);
// // console.log(res.year);

// for(let result of res){
//     let {year, month, day} = result.groups; // деструктурализация
//     document.writeln(`${day}.${month}.${year}`);
// }


// регулярное выражение которое ищет любые десятичные числа как целые, так вещественные со знаком и без знака
// let st = "-1.5 0 2 -123.4.";
// let reg = / /;
// document.writeln(st.match(reg)); // -1.5,0,2,-123.4



// let st = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.writeln(st.replace(re, "$2 $1")); // способы обращения к группам


// function add(str){
//     return str.replace(/([A-Z])/g, " $1"); // нашли заменили
// }

// console.log(add("camelCase")); // camel Case
// console.log(add("helloWorldItIsMe")); // hello World It Is Me

// let text = "red color: #F00 and green: #090";
// let ex = /(#[a-f0-9]{3})/ig;
// text = text.replace(ex, "<span style='color:$1'>$1</span>");
// document.writeln("<p>" + text + "</p>");


// let text = "I like google.com and yandex.ru";
// let ex = /(([a-z0-9-]{2,})+(\.[a-z]{2,4}))/ig;
// text = text.replace(ex, "<a href='https://$1'>$1</a>");
// document.writeln("<p>" + text + "</p>");


// // 7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX

// function formatPhoneNumber(phone){
//     let cleaned = phone.replace(/\D/g, "");

//     return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
// }

// console.log(formatPhoneNumber("+7 999 1234567"));
// console.log(formatPhoneNumber("8 999 1234567"));
// console.log(formatPhoneNumber("999 1234567"));


// document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript")); // $& вставляет всё найденное совпадение + то, что мы написали

// let st = `Он сказал: "I'm at home".`;
// let re = /(["'])(.*?)\1/g; // \1 - номер скобки, то есть дублирует текущую, будет закрываться те ми же скобками
// document.writeln(st.match(re) + "<br>");



// РЕТРОСПЕКТИВНЫЕ ПРОВЕРКИ

// Позитивная опережающая проверка
// X(?=Y)
// X будет возвращаться, если за ним следует Y

// let st = "1 курс стоит 30 рублей";
// document.writeln(st.match(/\d+(?= руб)/g) + "<br>");


// Негативная опережающая проверка
// X(?!Y)
// X будет возвращаться, если за ним следует Y // противположное значение

// document.writeln(st.match(/\d+(?! руб)/g) + "<br>");

// Позитивная ретроспективная
// (?<=Y)X
// X будет, если следует за Y

// let st = "1 курс стоит $30";
// document.writeln(st.match(/(?<=\$)\d+/g) + "<br>");

// // Негативная ретроспективная
// // (?<!Y)X
// // Х, если за ним не следует Y

// document.writeln(st.match(/(?<!\$)\d+/g) + "<br>");

// document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/));

// (?=.*...) // зарезервированный синтаксис для паролей

// Проверка пароля на валидацию

// function validPassword(psw){
//     let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@$%^&*]).{8,}$/;
//     return pswEx.test(psw);
// }

// console.log(validPassword("QWer23!#"));
// console.log(validPassword("1"));




// let but = document.getElementById("but");
// but.addEventListener("click", smsUser);

// // function smsUser(){
// //     let name = document.forms[0].your_name.value;
// //     let text = document.forms[0].your_message.value;
// //     let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
// //     text = text.replace(regExpBBMail, "<span style='color:blue'>$1</span>");

// //     document.writeln(`
// //         <fieldset>
// //             <legend>${name}</legend>
// //             <div>${text}</div>
// //         </fieldset>    
// //     `);
// // }

// function smsUser() {
//     let name = document.forms[0].your_name.value;
//     let text = document.forms[0].your_message.value;
//     let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
//     text = text.replace(regExpBBMail, "<span style='color:blue'>$1</span>");

//     let form = document.forms[0];
//     console.log(form);

//     form.insertAdjacentHTML("afterend", `<fieldset>
//             <legend>${name}</legend>
//             <div>${text}</div>
//          </fieldset> `)
// }


// let st = "      текст строки     ";
// st = st.replace(/^\s+|\s+$/g, ""); // ищем пробелы от начала или от конца
// console.log(">" + st + "<");


// let date = "25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
// let re = date.split(/[-\/,.:]/g); // шаблоны регулярных помогают работать с методами
// console.log(re);




// github - удаленная система контроля версий
// git - локальная система контроля версий
// система контроля версий f

// мы можем сделать набор контрольных точек, можем вернуться к версии, которая нас устраивает

// локальный репозиторий хранит состояние у нас на компьютере

// commit - контрольная точка состояния проекта

// tracked -

// команды (все с git начинаются)

// git init - инициализация репозитория

// git status - проверить состояние репозитория, зеленые - под версионным контроллем

// git add -A - добавить в систему контроля версий все файлы, папки, и подпапки
//         --all - то же самое
//         script.js
//         . - то же самое

// git config --global user.name "new user" - пользователь для всех репозиториев
// git config --local user.name "new user" - имя будет привязано только к этому репозиторию
// git config --global user.name - посмотреть имя пользователя

// git config --global user.email "" - посмотреть имя пользователя
// git config --global user.email - посмотреть имя пользователя

// git commit -m "first commit" - сделать коммит и его название/описание

// в файле .gitignore мы указываем те файлы, которые не должны попадать в git контроль версий


// Порядок пуша коммита на github
// 0) git status
// 1) git add .
// 2) git commit -m "change"
// 3) git push

// git clone https://github.com/bonohomo/queue.git - клонирование репозитория на локальную машину
// cd queue - перейти в папку

// git pull - забрать измения с удалённого репозитория в локальный репозиторий
















// крестики нолики

// let area = document.getElementById("area");
// let currentPlayer = document.getElementById("curPlayer");
// let cell;


// let player = "x";
// let stat = {
//     'x': 0,
//     'o': 0,
//     'd': 0
// }

// let winIndex = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7]
// ]

// for (let i = 0; i < 9; i++) {
//     area.innerHTML += "<div class='cell' data-pos='" + i + "'>"
// }

// cell = document.querySelectorAll(".cell");

// for (let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener("click", cellClick);
// }

// function cellClick() {
//     let data = [];

//     if (!this.innerHTML) {
//         this.innerHTML = player;
//     } else {
//         alert("Ячейка занята");
//         return;
//     }

//     for (let i in cell) { // cell массив, in/of работают и массивами и элементами, in когда у нас в чистом виде массив из html элементов
//         if (cell[i].innerHTML == player) {
//             data.push(cell[i].getAttribute("data-pos"));
//         }
//     }

//     if (checkWin(data)) {
//         stat[player] += 1;
//         alert("Выиграл: " + player);
//     } else {
//         let draw = true;
//         for(let i in cell){
//             if(cell[i].innerHTML == ''){
//                 draw = false;
//             }
//         }
//         if(draw){
//             stat.d += 1;
//             restart("Ничья");
//         }
//     }

//     player = player == 'x' ? 'o' : 'x';
//     currentPlayer.innerHTML = player.toUpperCase();

//     console.log(data);

// }

// function checkWin(data) {
//     for(let i in winIndex){
//         let win = true;
//         for(let j in winIndex[i]){
//             let id = String(winIndex[i][j]);
//             let ind = data.indexOf(id);

//             if(ind == -1){
//                 win = false;
//             }
//         }
//         if(win){
//             return true;
//         }
//     } 

//     return false;
// }

// function restart(text){
//     alert(text);
//     for (let i = 0; i < cell.length; i++) {
//         cell[i].innerHTML = "";
//     }
//     updateStat();
// }

// function updateStat(){
//     document.getElementById("sX").innerHTML = stat.x;
//     document.getElementById("sO").innerHTML = stat.o;
//     document.getElementById("sD").innerHTML = stat.d;
// }



// let car = {
//     name: "Volvo",
//     year: 2019,
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function(){
//         document.writeln("Привет <br>");
//     }
// }

// console.log(car);
// document.writeln(car.name + " " + car.color[1] + " " + car.colors.second + "<br>"); // свойство
// car.hello(); // вызов функции у объекта car // метод
// // hello(); // функция

// // let fill = car.color.filter(function(elem){
// //     return elem.length < 5; // оператор сравнения возвращает либо true, либо false // проверяем длину каждого элемента, в итоге создаётся новый массив fill с строками удовлетворяющими условию в return
// // });

// // document.writeln(fill + "<br>");


// // let mas = car.color.map(function(elem, index, all){
// //     return index + ")" + elem + " массив: " + all + "<br>";
// // });

// // document.writeln("<br>" + mas + "<br>");

// // let mas1 = car.color.map(elem => elem.toUpperCase());
// // document.writeln("<br>" + mas1 + "<br>");


// let mas2 = Object.keys(car.colors).map(function(elem){ // чтобы работали методы массивов нужно обратиться через Object.keys
//     return elem + ": " + car.colors[elem] + "<br>";
// });

// document.writeln("<br>" + mas2 + "<br>");


// let calc = {
//     num1: 5,
//     num2: 6,
//     calculate: function(){
//         // console.log(calc.num1); // так не пишут
//         // // ==
//         // console.log(this.num1);

//         this.res = this.num1 * this.num2; // this.res создаёт ключ res


//     }
// }

// calc.calculate();
// document.writeln(calc.res);


// let x = 15, y = 10;

// // let coords = {
// //     x: x,
// //     y: y,
// //     calcSq: function(){
// //         document.writeln(this.x * this.y);
// //     }
// // }
// // ==
// let coords = {
//     x,
//     y,
//     calcSq(){
//         document.writeln(this.x * this.y);
//     }
// }

// coords.calcSq(); // вызываем метод


// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'Pavlova'
//     },
//     psw: '123',
//     role: 'guest'
// }

// let log = user.login.firstName;
// console.log(log);

// // ~

// // деструктуризация объекта

// // let {login: {firstName: f, lastName: l}, psw, role} = user; // : f - псевдоним, можно будет обращаться к ключу по нему 
// // document.writeln(f + " " + l + " " + psw + " " + role);

// let { login: { firstName: f, lastName: l }, ...rest } = user; // ...rest - придуманная перемнная, которая остальные включает, создаёт новый объект
// document.writeln(f + " " + l + " " + rest.psw + " " + rest.role);




// ФУНКЦИЯ КОНСТРУКТОР
// во всех языках программирования есть объектно-ориентированное программирование (ООП) (в js в основном это строилось на функциях, но сейчас появилось через классы)
// на основе этой функции реализуется ОПП

// function Car(n, year){ // функция будет создавать два объекта // называется всегда с заглавной буквы
//     this.name = n;
//     this.year = year;
// }

// Car.prototype.getAge = function(){ // prototype - наследие от общего класса object // getAge наш метод
//     return new Date().getFullYear() - this.year; // мы имеем доступ к функциям конструктора
// } 

// Car.prototype.color = "black";

// let ford = new Car('Ford', 2019); // обращение к функции-конструктору
// console.log(ford);
// console.log(ford.getAge());
// ford.color = "red";
// console.log(ford.color);



// let bmw = new Car('BMW', 2017);
// console.log(bmw);
// console.log(bmw.getAge());
// console.log(bmw.color);




// function User(pName, pAge){
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>")
//     }
// }

// let tom = new User("Tom", 26);
// tom.displayInfo();




// практическое применение
// let form = document.form1; // доступ к форме по имени
// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     // console.log(title, text);
//     // saveForm({title: title, text: text});
//     // ==
//     // saveForm({title, text}); // работает, если ключ и значение совпадают в названии
//     saveForm({title, text, description});

// });

// // function saveForm(obj){

// //     let formData = {
// //         date: new Date().toLocaleDateString(),
// //         title: obj.title,
// //         text: obj.text,
// //         description: obj.description
// //     }

// //     console.log("Form Data: ", formData);

// // }

// // function saveForm(obj){
// //     let {title, text, description} = obj; // деструктуризация, чтобы каждый раз не обращаться к ключам через obj.
// // ==
// // function saveForm({title, text, description}){ // деструктуризация в принимаемых объектах, сразу

// //     let formData = {
// //         date: new Date().toLocaleDateString(),
// //         title: otitle,
// //         text: text,
// //         description: description
// //     }

// //     console.log("Form Data: ", formData);

// // }
// // == самый короткий тип записи
// function saveForm(obj){ // деструктуризация в принимаемых объектах, сразу

//     let formData = {
//         date: new Date().toLocaleDateString(),
//         ...obj
//     }

//     console.log("Form Data: ", formData);

// }


// let cardsArray = [
//     { name: 'card1', img: 'c0.gif' },
//     { name: 'card2', img: 'c1.gif' },
//     { name: 'card3', img: 'c2.gif' },
//     { name: 'card4', img: 'c3.gif' },
//     { name: 'card5', img: 'c4.gif' },
//     { name: 'card6', img: 'c5.gif' },
//     { name: 'card7', img: 'c6.gif' },
//     { name: 'card8', img: 'c7.gif' }
// ];

// let firstCard = null;
// let secondCard = null;
// let lockBoard = false;

// function createBoard(){
//     let gameBoard = document.querySelector(".game-board");
//     let suffledCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random()); // соберёт так все объекты и перемешает их
//     console.log(suffledCards);

//     suffledCards.forEach(card => {
//         let cardElement = document.createElement("div");
//         cardElement.classList.add("card");
//         cardElement.dataset.name = card.name; // пользовательский атрибут

//         let cardImage = document.createElement("img");
//         cardImage.src = card.img;
//         cardElement.append(cardImage);


//         cardElement.addEventListener('click', flipCard);
//         gameBoard.append(cardElement);
//     });
// }

// function flipCard(){
//     if(lockBoard){
//         return;
//     }
//     if(this === firstCard){
//         return;
//     }
//     this.classList.add("flipper");

//     if(!firstCard){ // если здесь было false (null)
//         firstCard = this;
//         return;
//     }
//     secondCard = this;
//     checkForMatch();
// }

// function checkForMatch(){
//     if(firstCard.dataset.name === secondCard.dataset.name){
//         disabledCard();
//     } else {
//         unflipCards();
//     }
// }

// function disabledCard(){
//     firstCard.removeEventListener("click", flipCard);
//     secondCard.removeEventListener("click", flipCard);
//     resetBoard();
// }

// function unflipCards(){
//     lockBoard = true;
//     setTimeout(() => {
//         firstCard.classList.remove("flipper");
//         secondCard.classList.remove("flipper");
//         resetBoard();
//     }, 1000);
// }

// function resetBoard(){
//     [firstCard, secondCard, lockBoard] = [null, null, null]; // каждому присваиваем Null
// }

// createBoard();


// const используют, когда работают с массивами и объектами, так нужно

// const week = { // const нельзя использовать с примитивными типами данных (не объектами) // с данными, которые наследуются от объекта можем работать, если мы не будем менять const
//     name: "John"
// }



// const week = ["qqq", "www"]; // константа работает на пакет, а не на яблоки внутри него
// week[0] = "Привет"; // можно поменять часть массива
// // week = "Строка"; // нельзя изменить тип объекта


// const book = {title: 'Дюна'};
// const anotherBook = {title: 'Дюна'};
// console.log(book == anotherBook); // false
// объекты работают как ссылки на ячейки в памяти

// let a = 5;
// let b = 5;
// console.log(a == b);
// // в памяти это ячейки со значением 5


// // по разному хранятся в памяти

// const book = {title: 'Дюна'};
// const anotherBook = book;
// // кладём в anotherBook ссылку на ячейку book, то есть они ссылаются на одну ячейку
// // ВАЖНО, если мы теперь положим новое значение в один объект, это значение будет в обоих объектах
// anotherBook['price'] = 315; // добавить в объект ключ со значением
// console.log(book);
// console.log(anotherBook);
// console.log(book == anotherBook); // false


// массивы ведут себя точно так же как объекты

// const mas1 = [1,2,3];
// const mas2 = [1,2,3];
// console.log(mas1 == mas2);
// console.log(mas1);

// let a = 5;
// let b = 10;
// console.log("a:", a);
// console.log("b:", b);
// a, b = b, a; // не работает
// // [a, b] = [b, a];
// console.log("a:", a);
// console.log("b:", b);

// const book = {title: 'Дюна'};
// const edition = {published: 2025, title: "Вьюга"}
// const anotherBook = Object.assign({}, book, edition); // создаёт новый объект по новому адресу и туда кладёт новое такое же содержимое // они ссылаются на разные области памяти
// anotherBook['price'] = 315;
// console.log(book);
// console.log(anotherBook);
// console.log(book == anotherBook);


// const personData = [
//     ['name', 'Сергей'],
//     ['age', 37]
// ]; // массив массивов
// console.log(personData);
// const person = Object.fromEntries(personData); // превращает вложенные массивы в объект // лишние элементы будут отброшены
// console.log(person);


// const first = null;
// const second = {name: 'Bob'}

// function printName(person){
//     console.log(person?.name); // объект может быть, а может и не быть
// }

// printName(second);
// printName(first); // при знаке вопроса тут будет undefined


// const first = null;
// const second = {
//     name: 'Bob',
//     sayHi(){
//         console.log(`Hi! I am ${this.name}`);
//     }
// }

// function printName(person){
//     console.log(person?.name); // объект может быть, а может и не быть
// }

// printName(second);
// printName(first);
// // second.sayHi(); // обращение к функции внутри объекта

// first?.sayHi(); // typeScript будет использовать
// second?.sayHi();


// const obj = {name: 'Ирина'};
// obj.age = 25; // добавляем ключ и его значение
// console.log(obj);

// const obj = {name: 'Ирина'};
// Object.preventExtensions(obj); // запрет на расширение объектов // влияет только на нижележащие объекты
// obj.age = 25; // уже не работает
// // console.log(obj);

// const obj = {name: 'Ирина'};
// Object.preventExtensions(obj);
// obj.name = 25; // изменить значение существующего ключа можно
// console.log(obj);


// const obj = {name: 'Ирина'};
// Object.freeze(obj); // запрет на измнения в ключах
// obj.age = 25; // уже не работает
// obj.name = 'Марина'; // уже не работает
// console.log(obj);




// КОНТЕКСТ

// let person = {
//     age:24,
//     name: 'Irina',
//     job: 'Programmer',
//     displayInfo: function(){
//         console.log('name:', this.name);
//         console.log('age:', this.age);
//         console.log('job:', this.job);
//     }
// }
// person.displayInfo();

// let person = {
//     age: 24,
//     name: 'Irina',
//     job: 'Programmer',
//     displayInfo: function (ms) {
//         let self = this;
//         console.log(this);
//         setTimeout(function() { // создаётся своя область видиости
//             console.log(this); // является не объектом person, а вообще является объектом window
//             console.log('name:', this.name);
//             console.log('age:', this.age);
//             console.log('job:', this.job);
//         }, ms);

//     }
// }
// // console.log(this);

// person.displayInfo(2000); // задаём через сколько отобразиться информация // информация не отобразиться корректно из-за нарушения областей видиимости, другая область видимости


// let person = {
//     age: 24,
//     name: 'Irina',
//     job: 'Programmer',
//     displayInfo: function (ms) {
//         let self = this;
//         setTimeout(function() { // создаётся своя область видиости
//             console.log(this); // является не объектом person, а вообще является объектом window
//             console.log('name:', self.name);
//             console.log('age:', self.age);
//             console.log('job:', self.job);
//         }, ms);

//     }
// }


// person.displayInfo(2000);

// ~==

// let person = {
//     age: 24,
//     name: 'Irina',
//     job: 'Programmer',
//     displayInfo: function (ms) {
//         setTimeout(function() { // создаётся своя область видиости
//             console.log(this); // является не объектом person, а вообще является объектом window
//             console.log('name:', this.name);
//             console.log('age:', this.age);
//             console.log('job:', this.job);
//         }, bind(this), ms);

//     }
// }


// person.displayInfo(2000);

// ~==

// let person = {
//     age: 24,
//     name: 'Irina',
//     job: 'Programmer',
//     displayInfo: function (ms) {
//         setTimeout(() => { // создаётся своя область видиости
//             console.log(this); // является не объектом person, а вообще является объектом window
//             console.log('name:', this.name);
//             console.log('age:', this.age);
//             console.log('job:', this.job);
//         }, ms);

//     }
// }

// person.displayInfo(2000);


// let h = document.querySelector('h1');
// h.addEventListener('click', function() { // а вот так не получится
//     this.style.color = 'red';
// });

// let h = document.querySelector('h1');
// h.addEventListener('click', () => { // а вот так не получится // стрелочная функция не имеет контекста объекта // стрелочная функция берёт контекст из родительской функции, у нас здесь такой нет
//     this.style.color = 'red';
// });




// BOM (Browser Object Model)

// корневной элемент всегда window, он представляет собой открытое окно браузера, все остальные методы и свойства идут через него

// window.alert('Hello'); // любую команду можно так записать
// window.document.querySelector('h1').style.color = 'red';

// let modal = document.querySelector('#modal');

// document.querySelector('#btn').addEventListener('click', function () {
//     modal.style.display = 'block';
// });

// document.querySelector('.close').addEventListener('click', function () {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', function (event) {
//     if (event.target == modal) { // клик по целевому объекту
//         modal.style.display = 'none';
//     }
// });

// let w = document.documentElement.clientWidth; // documentElement - обращение к тегу HTML
// let h = document.documentElement.clientHeight;

// document.querySelector('#window').innerHTML = "Ширина окна: " + w + ", высота окна: " + h;

// console.log("Ширина окна", window.innerWidth); // берёт размер открытого содержимого
// console.log("Ширина окна", window.innerHeight); // берёт размер открытого содержимого


// let box = document.querySelector(".box");
// // let width = box.clientWidth; // накладываются дополнительные css надстройки (border-box, margin, padding)
// // let height = box.clientHeight;
// // let width = box.offsetWidth; // исходное окно без учёта доп значений css
// // let height = box.offsetHeight;
// // let width = box.scrollWidth; 
// // let height = box.scrollHeight;

// // console.log(width, height);

// let flag;
// let hh = box.offsetHeight;

// // document.querySelector('button').addEventListener('click', function(){
// //     if(!flag){
// //         box.style.height = box.scrollHeight + 'px';
// //         flag = 0;
// //     } else {
// //         box.style.height = hh + 'px';
// //     }
// //     flag = !flag;
// // });

// document.querySelector('button').addEventListener('click', function(){
//     // console.log(box.scrollTop);
//     // console.log(box.getBoundingClientRect());
//     // console.log(box.getBoundingClientRect().top); // так можно получить любое значение положения элемента
//     // console.log("offsetTop", box.offsetTop); // на какой границе находится содержимое элемента

//     if(!flag){
//        box.style.overflow = 'hidden'; 
//     } else {
//         box.style.overflow = '';
//     }
//     flag = !flag;

// });



// progress bar

// window.addEventListener('scroll', myFunction);

// function myFunction(){
//     let winScroll = document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     let scrolled = winScroll / height * 100;

//     document.querySelector('#myBar').style.width = scrolled + '%';

//     document.querySelector('img').style.transform = 'translate(' + (document.documentElement.clientWidth - 94) * scrolled / 100 + 'px, 0px)';
// }

// let win = null;
// let open = document.querySelector("#show");
// let close = document.querySelector("#close");
// open.addEventListener('click', function(){
//     // window.open("https://yandex.com"); // метод window, в котором мы переходим на какую-то страницу
//     win = window.open("str.html",
//         "new_window",
//         "width=420,height=220,left=200,top=200,resizable=yes");
// });
// close.addEventListener('click', function(){
//     if(typeof win == "object"){
//       win.close();  
//     }
// });



// console.log(window.location);
// // ==
// console.log(location);

// console.log(location.href);
// alert(location);


// location.href = "https://career-test.top-academy.ru/"; // жётская переадресация // редирект

// let open = document.querySelector("#show");
// open.addEventListener("click", function(){
//     window.location.assign("https://career-test.top-academy.ru/"); // мягкая переадресация, можно вернуться назад
// });

// let open = document.querySelector("#show");
// open.addEventListener("click", function(){
//     window.location.assign("str.html"); // мягкая переадресация, можно вернуться назад
// });


// переход по указанной ссылке

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     let url = document.getElementById("url").value;
//     // location.assign(url); // можно по истории назад перемещаться
//     // location.replace(url); // подхватывает страницы в историю перемещений
//     location.reload(url); // перезагружает саму страницу
// });

// console.log("В истории " + history.length + " страниц");
// history.go(3); // перейти на страницу в истории текущей страницы, а можем указывать минусовые значения, это перемещение назад


// console.log(window.navigator); // общая статистика которую можно получить по использованию сайта
// console.log(window.navigator.userAgent); // узнать браузеры и их версии у пользователя
// console.log(window.screen); // узнать характеристики монитора (не производитель)


// обработка ошибок

// исключения
// try {
//     // код, где может произойти ошибка
// } catch (error){
//     // блок выполниться, если произошла ошибка
// } finally { // доп блок, выполняется в любом случае (была ошибка, не было ошибки)

// }


// let a = 5;
// console.log(a);
// console.log(b);
// ReferenceError, может обработаться исключениями


// console.log("Hello); 
// // SyntaxError, не обрабатываются

// let a = 5;
// try {
//     console.log(b);
// } catch (error) {
//     console.error("Ошибка:", error.message); // называется исключительной ситуацией // error - красный консоль лог // программа не прекратила своего выполнения
// }
// console.log(a);

// let num = 16;
// console.log(num());
// // TypeError

// try{
//     let num = 16;
//     console.log(num());
// } catch (e){
//     console.log(e.name); // тип ошибки
//     console.log(e.message); // описание ошибки
//     console.log(e.stack); // тип, ошибка и в каком документе и строке произошла ошибка
// }


// let arr = new Array(-5);
// // RangeError


// try{
//     let arr = new Array(-5);
// } catch (err){
//     let text = err.name + "<br>" + err.message + "<br>" + err.stack;
//     document.getElementById("demo").innerHTML = text;
// }



// с таймаутом не получается поймать ошибку из-за задержки по времени, трайкэтч должен быть внутри таймаута
// try {
//     setTimeout(function () {
//         alert(x);
//         alert(2 + 2);
//     }, 10)
// } catch (e) {
//     alert(e.name + ": " + e.message);
// }



// setTimeout(function () {
//     try {
//         alert(x);
//         alert(2 + 2); // всё равно не выведется
//     } catch (e) {
//         alert(e.name + ": " + e.message);
//     } 
// }, 10)

// try {
//     alert(x);
//     alert(2 + 2); // всё равно не выведется
// } catch (e) {
//     alert(e.name + ": " + e.message);
// } finally {
//     alert("Код в блоке finally");
// }


// let flag = false;
// let but = document.querySelector("button");

// but.addEventListener("click", function(){
//     try{
//         if(!flag){
//             document.body.style.background = "yellow";
//         } else {
//             document.body.style.background = "greenyellow";
//         }
//     } catch (e) {
//         alert(e);
//     } finally {
//         flag = !flag;
//     }
// });

// throw new Error(""); // делаем свои исключения

// function divide(a, b){
//     if(b == 0){
//         throw new Error("Делить на ноль нельзя"); // throw прерывает выполнение нашей функции // catch берёт эту ошибку
//     }
//     return a / b;
// }

// let res;
// try{
//     res = divide(5, 0);
//     console.log(res);
// } catch (error) {
//     console.log(error.name + ": " + error.message + ", stack: " + error.stack);
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", myFunction);

// function myFunction() {
//     let message = document.getElementById("txt");
//     let x = document.getElementById("demo").value;
//     message.innerHTML = "";
//     try {
//         if (x == ""){
//             throw "пусто"; // выбрасывается исключение
//         } if(isNaN(x)){
//             throw "не число";
//         }

//         if(x < 5){
//             throw "слишком маленькое число";
//         }
//         if(x > 10){
//             throw "слишком большое число";
//         }

//     } catch (err) {
//         message.innerHTML = "Вы ввели " + err;
//     }
// }

// function calculate (a, b){
//     if(typeof a != "number"){
//         throw "a - не число"; // может работать независимым элементом без try catch // но если мы так используем, то не увидим вторую ошибку, идущую после
//     }
//     return a + (b ** 2) / 3;
// }

// console.log(calculate(5, 3));
// console.log(calculate("Hello", 3));



// КЛАССЫ
// по типу данных являются функциями

// функция-конструктор -- старый подход
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person("Андрей", 23);
// console.log(person1);

// ==

// новый подход
// class Person2 {
//     constructor(name, age) { // служебный метод
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         document.writeln("Привет, " + this.name + "!")
//     }
// }

// const person2 = new Person2("Андрей", 23);
// console.log(person2);
// person2.sayHi();
// alert(typeof Person2); // function

// == можно иначе создать

// let User = class { // по аналогии с function expression, но только с заглавной
//     sayHi(){
//         alert("Привет");
//     }
// }

// let user = new User();
// user.sayHi();
// alert(MyClass); // за пределами нельзя обращаться к классу по внутреннему имени (пишется после класс)

// function makeClass(text){
//     return class {
//         sayHi(){
//         alert(text);
//     }
//     }
// }

// let User = makeClass("Наш текст для функции, в которой создаётся класс");
// new User().sayHi(); // так обращаемся к такой функции внутри // редко используется

// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     area(){
//         return this.height * this.width;
//     }
// }

// // создаём объект для класса
// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area());

// // rectangle.hello(){ // нельзя создавать методы за пределами функции
// //     console.log("Hello");
// // }











// ВСТАВИТЬ ЗАНЯТИЕ 28.07










// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   calculateArea() {
//     throw new Error("Метод calculateArea должен быть реализован");
//   }

//   describe() {
//     console.log(`Это ${this.name} площадью ${this.calculateArea()}`);
//   }
// }

// class Circle extends Shape { // наследник, их может быть много
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }

//   calculateArea() {
//     return (Math.PI * this.radius ** 2).toFixed(2);
//   }
// }

// class Square extends Shape {
//     constructor(name, side){
//         super(name); // вызываем конструктор родительского класса
//         this.side = side;
//     }

//     calculateArea(){
//        return this.side ** 2;
//     }
// }

// class Triangle extends Shape {
//     constructor(name, base, height) {
//         super(name);
//         this.base = base;
//         this.height = height;
//     }

//     calculateArea(){
//         return this.base * this.height / 2;
//     }
// }

// // const circle = new Circle("Круг", 5);
// // circle.describe();

// // const square = new Square("Круг", 5);
// // square.describe();

// // const triangle = new Triangle("Треугольник", 6, 3);
// // triangle.describe();

// // ==  полиморфизм

// const shapes = [
//     new Circle("Круг", 5),
//     new Square("Круг", 5),
//     new Triangle("Треугольник", 6, 3)
// ]

// shapes.forEach(shape => shape.describe());



// class Animal{
//     static count = 0; // статическое свойство чаще всего объявяляется перед конструктором // обращение к нему через имя класса

//     constructor(name){
//         this.speed = 0; // this - динамическое свойство
//         this.name = name;
//         Animal.count++; // будет показывать сколько экземпляров класса было создано let animal1 = new Animal("Мой питомец 1");
//     }

//     static counter(){
//         return Animal.count;
//     }

//     run(speed){
//         this.speed = speed;
//         document.writeln(`${this.name} бежить со скоростью ${this.speed} км/ч.<br>`);        
//     }

//     stop(){
//         this.speed = 0;
//         document.writeln(`${this.name} стоит.<br>`);``        
//     }
// }

// let animal1 = new Animal("Мой питомец 1");
// let animal2 = new Animal("Мой питомец 2"); // this - динамическое свойство, может меняться
// let animal3 = new Animal("Мой питомец 3");

// // console.log(animal1.name);
// // console.log(animal2.name);

// // console.log(Animal.name); // статическое свойство, так как получаем всегда название класса
// // console.log(Animal.count); // статическое свойство задано через static
// // console.log(animal1.count); // undefined, статическое свойство мы получаем только через имя класса, а через экземпляры нельзя

// console.log(Animal.counter());



// class User{
//     static takenNames = [];

//     static isNameTaken(name){
//         return User.takenNames.includes(name); // существует ли в takenNames имя, которое мы будем передавать
//     }

//     constructor(name){
//         this.name = name;
//         User.takenNames.push(name);
//     }
// }

// const user1 = new User("Сергей");
// const user2 = new User("Марина");

// console.log(User.takenNames);
// console.log(User.isNameTaken("Сергей")); // true
// console.log(User.isNameTaken("Николай")); // false

// // в статических свойствах мы можем привязываться к любому количеству созданных экземпляров





// class MathUtils {
//     static PI = 3.141592653589793;

//     static sum(...number) { // ...num - любое количество чисел
//         return number.reduce((total, num) => total + num, 0); // 0 делается на случай, если не передали значения в метод
//         /* Принцип работы reduce
//         let total = 0;
//         let num = [1, 2, 3, 4] 
//         0 + 1
//         1 + 2
//         3 + 3
//         6 + 4
//         total = 10
//         */
//     }

//     static average(...number){
//         return MathUtils.sum(...number) / number.length;
//     }

// }

// console.log(MathUtils.PI);
// console.log(MathUtils.sum(1, 2, 3, 4));
// console.log(MathUtils.average(1, 2, 3, 4));


// class Task{
//     constructor(title = Task.getDefaultTitle()){ // вместо undefined при отсуствии данных будет выводиться дефолтное сообщение в консоли, задано в соотвествующей фукнции
//         this.title = title;
//         this.done = false;
//         Task.count++;
//         // console.log("Происходит создание задачи...");
//     }

//     static getDefaultTitle(){
//         return "Задача";
//     }

//     get done(){ 
//         return this._done === true ? "Задача выполнена" : "Задача не выполнена"; 
//     }

//     set done(value){ // сеттер, чтобы нельзя было никаким образом изменить тип данных boolean
//         if(value !== undefined && typeof value == 'boolean'){
//             this._done = value;
//         } else {
//             console.error("Ошибка! Укажите значение либо true, либо false!")
//         }
//     }

//     complete(){
//         this.done = true;
//         console.log(`Задача "${this.title}" выполнена`);
//     }
// }

// Task.count = 0;

// let task1 = new Task("Выучить JavaScript");
// let task2 = new Task("Выучить frameworks");
// let task3 = new Task();

// console.log(task1.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log("Созданных задач: " + Task.count)

// task2.complete();

// console.log(task1.done);
// console.log(task2.done);


// class Header {
//     constructor(image, h1, h2){
//         this.src = image;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = ""; // делаем так, чтобы можно было видеть в дочерних классах переменную
//     }

//     render(id){
//         this.out = `
//             <img src="${this.src}" alt="Изображение">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// class HeaderExt extends Header {
//     constructor(image, h1, h2, tel){
//         super(image, h1, h2);
//         this.tel = tel;
//     }

//     get tel(){
//         return this._tel;
//     }

//     set tel(value){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(value)){
//             this._tel = value;
//         } else {
//             alert("Неккорретный номер телефона");
//         }
//     }

//     render(id){
//         super.render(id);

//         this.out += `<h3>${this.tel}</h3>`;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img = "https://kem.top-academy.ru/_images/BQ3NneHecFmeiFtj6KNEnC17pD0=/images/3330bd4e-5c2e-46ec-945d-bdd426f023b1_dizain-interera-1.png";
// let header1 = new Header(img, "Заголовок", "Описание");
// header1.render("header");


// let img2 = "https://kem.top-academy.ru/_images/WaJ942JgxTgWloyXAzPDls5gqy8=/images/493513e3-21b1-44e0-81f1-7c2fe051a8a5_courses-icon41-1.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// let img3 = "https://kem.top-academy.ru/_images/g_mPSzI-Ihe-vj9IZTkbw1FJh_w=/images/209a94ce-7c83-41ff-a8d0-50733f79d863_back-end-razrabotka.png";
// let header3 = new HeaderExt(img3, "Название", "Описание", "7 555 555-123-45");

// header3.tel = "Hello";
// // header3.tel = "+7 930 788-43-12";

// header3.render("header-ext");




// РАБОТА С CANVAS

const canvas = document.getElementById("test");
const c = canvas.getContext("2d"); // задаём пространство для работы в 2д или 3д

// c.fillStyle = "#369"; // цвет должен быть указан выше фигуры
// c.fillRect(10, 10, 60, 50);

// c.fillStyle = "#f60";
// c.fillRect(40, 50, 100, 90); // сама фигура

// c.setLineDash([15, 5]); // пунктирный контур, массив, кол-во линий и их длина
// c.lineWidth = 4.5; // контур
// c.strokeStyle = "#369";
// c.strokeRect(5, 5, 140, 140);

// c.clearRect(30, 30, 50, 50); // вырезать фигуру

// c.fillStyle = "#000";
// c.fillRect(20, 20, 160, 160);

// c.clearRect(50,  50, 100, 100);

// c.lineWidth = 4.5;
// c.strokeStyle = "#666";
// c.strokeRect(60, 60, 80, 80);

// c.beginPath(); // указыает начало пути 
// c.rect(30, 180, 100, 90); // тоже рисует прямоугольник
// c.closePath(); // указыает конец пути фигуры

// c.fillStyle = "yellow";
// c.strokeStyle = "brown"; // должен быть выше чем декларация самого контура
// c.fill(); // заливка прямоугольника выше
// c.stroke(); // контур

// c.clip(); // наложить следующую фигуру на предыдущую, то есть верхняя фигура маска

// c.beginPath();
// c.rect(10, 200, 140, 90);
// c.closePath();
// c.stroke();


// c.beginPath(); // помогают замыкать фигуры

// c.moveTo(80, 50); // координаты начала рисования
// c.lineTo(100, 80); // координаты конечной точки рисования
// c.lineTo(100, 30); // делает треугольник

// c.closePath();
// c.strokeStyle = "brown";
// c.stroke();
// c.fillStroke = "yellow";
// c.fill();


// c.beginPath();
// c.arc(200, 80, 40, 0, Math.PI * 2); // окружность 40 - радиус, 0 и пи - начальный и конечный точки усечения
// c.stroke();
// c.closePath();

// c.beginPath();
// c.moveTo(300, 80);
// c.arc(300, 80, 40, 0, Math.PI / 2, true); // true - развернуть в другую сторону
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(310, 90);
// c.arc(310, 90, 40, 0, Math.PI / 2, false);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(410, 90);
// c.arc(410, 90, 40, 0, Math.PI, false);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(180, 220);
// c.quadraticCurveTo(230, 160, 290, 220);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();

// c.beginPath();
// c.moveTo(180, 260);
// c.bezierCurveTo(240, 200, 220, 320, 290, 260);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();

// c.fillStyle = "blue";
// c.font = "30px Arial";
// c.fillText("Hello World", 160, 30);
// c.strokeText("Hello World", 320, 30);

// c.font = "30px Verdana";
// c.fillStyle = "orange";
// c.textAlign = "center";


// c.shadowOffsetX = 3; // тень, полож вправо, отриц влево
// c.shadowOffsetY = 3;
// c.shadowBlur = 3; // размытие
// c.shadowColor = "#AAA";

// c.fillText("Hello World", canvas.width / 2, canvas.height / 2); // вот так выровняет по центру


// let pic = new Image();
// pic.src = "https://kem.top-academy.ru/_images/g_mPSzI-Ihe-vj9IZTkbw1FJh_w=/images/209a94ce-7c83-41ff-a8d0-50733f79d863_back-end-razrabotka.png";
// pic.addEventListener("load", function(){
//     c.drawImage(pic, 10, 10, 100, 100);

//     c.drawImage(pic, 20, 0, 300, 130)
// })

// let gr = c.createLinearGradient(320, 0, 470, 0);
// gr.addColorStop(0, "red");
// gr.addColorStop(0.4, "magenta")
// gr.addColorStop(1, "yellow")

// c.fillStyle = gr;
// c.fillRect(320, 170, 150, 60);

// let st = c.createLinearGradient(320, 0, 470, 0);
// st.addColorStop(0, "yellow");
// st.addColorStop(1, "orange");
// c.strokeStyle = st;
// c.lineWidth = 10;
// c.strokeRect(320, 170, 150, 60);

// let grd = c.createRadialGradient(400, 270, 5, 400, 270, 60);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");
// c.fillStyle = grd;
// c.fillRect(320, 240, 150, 60);

// c.shadowOffsetX = 10;
// c.shadowOffsetY = 15;
// c.shadowBlur = 10;
// c.shadowColor = "#0F0"

// let gr = c.createRadialGradient(60, 60, 15, 75, 75, 75);
// gr.addColorStop(0, "#0F0");
// gr.addColorStop(1, "#0DA805");
// c.fillStyle = gr;
// c.beginPath();
// c.arc(75, 75, 75, 0, Math.PI * 2);

// c.fillStyle = gr;
// c.beginPath();
// c.arc(75, 75, 75, 0, Math.PI * 2);
// c.closePath();
// c.fill();



// c.fillStyle = "brown";
// c.fillRect(50, 50, 100, 100);

// c.fillStyle = "orange";
// c.globalAlpha = 0.5; // прозрачность. все эти свойства влияют на фигуры создаваемые ниже
// // c.translate(50, 25);
// // c.rotate(.52); // поворот на 30 грудусов
// c.scale(1.5, 1.5);
// c.fillRect(50, 50, 100, 100);


// РИСОВАЛКА В КАНВАС

const w = canvas.width;
const h = canvas.height;

const mouse = { x: 0, y: 0 };
let draw = false;


// нажатие мыши
canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);

});

// перемещение мыши
canvas.addEventListener("mousemove", function (e) {
    if (draw) { // draw == true
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

// отпускаем мышь
canvas.addEventListener("mouseup", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    c.lineTo(mouse.x, mouse.y);
    c.stroke();

    c.closePath();
    draw = false;
});

// commit