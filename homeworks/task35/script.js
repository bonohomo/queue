class Circle {
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
    }

    calculateArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

