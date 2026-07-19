// Первый конструктор

function Person(nm, ag, jb) {
    this.name = nm;
    this.age = ag;
    this.job = jb;
}

Person.prototype.who = function () {
    return document.writeln("Я " + this.name + " мне " + this.age + " лет. Я работаю " + this.job);
}

let dmi = new Person("Дмитрий", 26, "Дизайнером").who();
document.writeln("<br>");
let stan = new Person("Станислав", 29, "Программистом").who();
document.writeln("<br>");
let ser = new Person("Сергей", 35, "Менеджером").who();
document.writeln("<br>");
document.writeln("<br>");

// Второй конструктор

function Automobile(clr, mdl, yr, mnf) {
    this.color = clr;
    this.model = mdl;
    this.year = yr;
    this.manufact = mnf;
}

Automobile.prototype.whatColor = function() {
    return document.writeln("Цвет машины: " + this.color + "<br>");
}

Automobile.prototype.autoInfo = function() {
    return document.writeln("Модель машины: " + this.model + "<br>" + "Год выпуска: " + this.year + "<br>" + "Производитель автомобиля: " + this.manufact + "<br>" + "<br>");
}

let nis = new Automobile("Красный", "Nissan Skyline", 2007, "Nissan");
let toy = new Automobile("Черный", "Toyota Corolla", 2009, "Toyota");
let vol = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");
nis.whatColor();
nis.autoInfo();
toy.whatColor();
toy.autoInfo();
vol.whatColor();
vol.autoInfo();