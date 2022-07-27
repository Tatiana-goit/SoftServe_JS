// Класи
// Придумайте як описати та опишіть такі класи:

// Батарейка (>=3 властивості, >=1 метод)
// Стіл (>= 4 властивості, >= 0 методів)
// Двері (>= 3 властивості, >= 2 метода)
// Кондиціонер (>= 5 властивостей, >= 4 методи)

// Батарейка (>=3 властивості, >=1 метод)
// Шаблон
// --------------Свойста------------------------
// - Виды батареек (солевые, алколиновыебртутныеб серябряные, воздушно-цинковые, литиевые)
// - Размеры батареек (ААА - R3, АА - R6, С - R14, D - R20)
// - Страна производитель (Китай, Украина, Тайвань, США)
// --------------Методы-----------------------
// - Вывод на печать
// - вычисление мощности
// - определение размера (число)

class Battery {
  constructor(kind, size, country) {
    this.kind = kind;
    this.size = size;
    this.country = country;
  }

  power() {
    return ((this.numberSize(this.size) * 0.7) / 2.59).toFixed(2);
  }

  numberSize() {
    return +this.size.replace('R', '');
  }

  print() {
    console.log(
      `Этот тип батареек размера ${this.size} имеет мощность ${this.power()}`,
    );
  }
}

const battery = new Battery('солевые', 'R3', 'Китай');
battery.print();


// Стіл (>= 4 властивості, >= 0 методів)
// -------------------Свойства--------------------
//  - форма (прямоугольный, квадратный, круглый, овальный)
//  - количесвто ножек (4, 5, 6, 8)
//  - материал (дуб, сосна, дсп)
//  - назначение (кухонный, учебный, стеклянный, рабочий, журнальный, раскладной)
//  - высота (35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85)
// --------------------Метод-----------------
//  - Вывод


class Table {
    static MIN_PRICE = 1000;
    static count = 0;
    #shape;
    #tableLegs;
    #material;
    #appointment;
    #hight;
    constructor(shape, tableLegs, material, appointment, hight){
        this.#shape = shape;
        this.#tableLegs = tableLegs;
        this.#material = material;
        this.#appointment = appointment;
        this.#hight = hight;

        Table.count++
    }

    print() {
        console.log(`Вы выбрали ${this.#material} ${this.#appointment} стол ${this.#shape} формы высотой ${this.#hight} см с ${this.#tableLegs} ножками`)

    }
}

const table = new Table("прямоугольной", 4, "дубовый", "кухонный", 75);
console.log(`${Table.count} стол`);
table.print()
const table2 = new Table("круглый", 5, "стеклянный", "журнальный", 35);
console.log(`${Table.count} стол`);
table2.print()


// Двері (>= 3 властивості, >= 2 метода)
// -------------------Свойства----------------
// - высота
// - ширина
// - толщина
// -----------------Методы-----------------
// - площадь 1 стороны
// - площадь торцов
// - общая площадь для покраски
// - Количество банок для покраски
// - обем двери
// - вес двери 
class Door {

  constructor(hight, width,  thickness) {
    this.hight = hight;
    this.width = width;
    this.thickness = thickness;
  }

  get square () {
    return this.hight*this.width
  }

  get squareSide () {
    return (this.hight*this.thickness+this.width*this.thickness)*2
  }

  get volume () {
    return this.hight*this.width*this.thickness
  }

  squareAll() {
    return 2*this.square+this.squareSide
  }

  tinsOfPaint () {
    return Math.ceil(this.squareAll()/10000/10)
  }

  weight(){
    return this.volume*0.00068
  }
}


const door = new Door(200, 90, 4);
console.log(`Общая площадь = ${door.squareAll()} см^2 =  ${door.squareAll()/10000} м^2`);
console.log(`Для покраски необходимо ${door.tinsOfPaint()} банки(a) краски`);
console.log(`V двери = ${door.volume} cм^3`);
console.log(`Вес двери = ${door.weight()} кг`);









