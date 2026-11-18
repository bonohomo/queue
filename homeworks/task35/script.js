class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error("Метод calculateArea должен быть реализован");
  }

  describe() {
    console.log(`Это ${this.name} площадью ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    calculateArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    calculateArea(){
        return this.base * this.height / 2;
    }
}

const circle = new Circle("Круг", 5);
circle.describe();

const triangle = new Triangle("Треугольник", 5, 3);
triangle.describe();