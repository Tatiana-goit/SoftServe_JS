// Коло
// Реалізувати клас, що описує коло. У класі мають бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, що повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, що повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструвати роботу властивостей та методів.

class Circle {
    constructor (r) {
        this.r=r;
    }

    get radius() {
        return this.r;
    }

    set radius(newR){
        this.r=newR;
    }

    get diameter() {
        return this.r*2;
    }

    square () {
        return (Math.PI*this.r**2).toFixed(2);
    }

    length() {
        return (2*Math.PI*this.r).toFixed(2);
    }
}

let circle = new Circle(10);
console.log("Радиус = ", circle.radius);
circle.radius=15;
console.log("Радиус = ",circle.radius);
console.log("Диаметр = ", circle.diameter);
console.log("Площадь = ", circle.square());
console.log("Длина окружности = ", circle.length());


