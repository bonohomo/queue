let num = +prompt("Введите любое пятизначное число", "39671");

let one, two, three, four, five;

console.log(num);

one = num % 10;
console.log(one);
num = parseInt(num / 10);
two = num % 10;
console.log(two);
num = parseInt(num / 10);
three = num % 10;
console.log(three);
num = parseInt(num / 10);
four = num % 10;
console.log(four);
num = parseInt(num / 10);
five = num % 10;
console.log(five);

alert("Произведение цифр: " + one * two * three * four * five);
console.log("Произведение цифр: " + one * two * three * four * five);
alert("Среднее арифметическое: " + (one + two + three + four + five) / 5);
console.log("Среднее арифметическое: " + (one + two + three + four + five) / 5);