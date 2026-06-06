let count = parseInt(prompt("Введите количество символов:"));
let symbol = prompt("Введите символ:");
let orient = parseInt(prompt("Выберите ориентацию:\n0 - горизонтальная\n1 - вертикальная"));

if (orient == 0) {
    let line = "";
    
    for (let i = 0; i < count; i++) {
        line += symbol + " ";
    }
    
    document.writeln(line);
}
else if (orient === 1) {
    for (let i = 0; i < count; i++) {
        document.writeln(symbol + "<br>");
    }
}
else {
    document.writeln("Неверно указана ориентация линии");
}