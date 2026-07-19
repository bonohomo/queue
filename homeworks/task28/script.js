const autoParam = {
    name: 'Игорь',
    colors: ["белый", "чёрный", "красный", "жёлтый", "голубой", "сиреневый", "розовый", "синий", "зелёный"],
    brand: 'Porsche',
    random: function(){
        return document.writeln(this.name + " выиграл " + this.colors[Math.floor(Math.random() * this.colors.length)] + " " + this.brand);
    }
};

autoParam.random();