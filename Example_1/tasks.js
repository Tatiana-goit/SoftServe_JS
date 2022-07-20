// ----------------------------------5 HOMEWORK-------------------------------------

// 1. Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// function Paint() {
//   for (let line = '#'; line.length < 8; line += '#') console.log(line);
// }
// Paint();

// function Paint(n) {
//   let result = '';
//   for (let i = 1; i <= n; i++) {
//     result = result + '#';
//     console.log(result);
//   }
//   return 'Готова Елка';
// }
// Paint(7);

// 2. FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz

// The best solution
// function printNumbers() {
//     for (let i = 1; i <= 30; i++) {
//       let result = '';
//       if (i % 3 === 0) result = 'Fizz';
//       if (i % 5 === 0) result = 'Buzz';
//       console.log(result || i);
//     }
//   }

//   printNumbers();

// It doesn't work

// function printNumbers() {
//   for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log('FizzBizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log('Buzz');
//     }
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }

// 3. Шахматная доска
// Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

// ---------------------------

// Минимум
// В предыдущей главе была упомянута функция Math.min, возвращающая самый маленький из аргументов. Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// console.log(min(0, 10));
// console.log(min(0, -10));
// console.log(min(3, 3));

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else if (a < b) {
//     return a;
//   } else {
//     return `a=b=${a}`;
//   }
// }

// Рекурсия
// Мы видели, что оператор % (остаток от деления) может использоваться для определения того, чётное ли число ( % 2). А вот ещё один способ определения:
// Ноль чётный.
// Единица нечётная.
// У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
// Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

// function isEven(a) {
//   if (a === 0) {
//     return `Четное`;
//   } else if (a === 1) {
//     return `Нечетное`;
//   } else if (a < 0) {
//     return isEven(-a);
//   } else {
//     return isEven(a - 2);
//   }
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// Считаем бобы
// Символ номер N строки можно получить, добавив к ней .charAt(N) ( "строчка".charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, "к"). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length - 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

// function countBs(str, char) {
//   const newStr = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] == char) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countBs('The ball was big', 'b'));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {
//   const newStr = str.toLowerCase();
//   return newStr.includes('viagra') || newStr.includes('xxx');
//   // if (newStr.includes('viagra') || newStr.includes('xxx')) {
//   //     return true
//   // } else return false
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// const truncate = (str, maxlength) => str.length<=maxlength ? str : str.slice(0,maxlength-1)+'...'

// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
// console.log(truncate('Всем привет!', 20));

// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// const extractCurrencyValue = (str) => +str.slice(1)

// console.log(extractCurrencyValue('$120'))

// Операции с массивами
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

// const myArray = ["Джаз", "Блюз"];
// myArray.push("Рок-н-рол");
// console.log(myArray);

// myArray[Math.floor((myArray.length-1)/2)]="Классика";
// // myArray.length % 2 === 1? myArray[(myArray.length-1)/2]="Классика" : myArray[(myArray.length)/2]="Классика"
// console.log(myArray);

// console.log(myArray.shift());
// console.log(myArray);

// myArray.unshift("Рэп","Регги");
// console.log(myArray);

// Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//   let arrayOfNumbers = [];

//   while (true) {
//     let value = prompt('Введите число');
//     if (value === '' || value === null || !isFinite(value)) break;
//     arrayOfNumbers.push(+value);
//   }
//   console.log(arrayOfNumbers);
//   const sum = arrayOfNumbers.reduce((sum, el) => (sum += el), 0);
//   return sum;
// }

// console.log(sumInput());

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// let user2 =JSON.parse(JSON.stringify(user));
// console.log(user2);

// Деструктурирующее присваивание
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// let {name, years: age, isAdmin = false } = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// Максимальная зарплата
// У нас есть объект salaries с зарплатами:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let max = 0;
//   let findName = null;
//   for (let [ name, salarie ]  of Object.entries(salaries)) {
//     if (max < salarie) {
//       max = salarie;
//       findName = name;
//     }
//   }
//   return findName
// }

// function sumSalaries(salaries ){
//     let sum=0;
//     for(let salarie of Object.values(salaries)){
//         sum +=salarie
//     }
//     return sum
// }

// function sumSalaries(salaries ){
//     return Object.values(salaries).reduce((el, sum)=> sum +=el ,0)
// }

// console.log('Result = ', topSalary(salaries));
// console.log(sumSalaries(salaries));

// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта

// let user = {
//     name: 'John',
//     age: 30,
//     city: "Lviv"
//   };

// function count(user){
//     let count=0;
//     for (let prop of Object.keys(user)){
//         count +=1
//     }
//     return count
// }

// console.log( count(user) );

// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// function camelize(str) {
//   return str
//     .split('-')
//     .map((el, index) => (index == 0 ? el : el[0].toUpperCase() + el.slice(1))).join('')
// }

// console.log(camelize('list-style-image'));

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

// let arr = [5, 3, 8, 1, 3, 2, 5, 4, 9, 5];
// function filterRange(arr, a, b) {
//   let newArray = arr.filter(el => el >= a && el <= b);
//   return newArray;
// }

// console.log(filterRange(arr, 1, 5));

// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// let arr = [5, 3, 8, 4, 1, -8];
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }

// console.log(filterRangeInPlace(arr, 1, 4));

// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   return arr.slice().sort()
// }
// console.log(copySorted(arr))
// console.log(arr);

// Создать расширяемый калькулятор

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator;

// console.log(calc.calculate("3 + 7") ); // 10
// console.log(calc.calculate("3 - 7") )

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8

// console.log(powerCalc.methods);

// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// console.log(users);

// let names = users.map(el => el.name)

// console.log( names ); // Вася, Петя, Маша

// Трансформировать в объекты
//  У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id}
// ))

// console.log(usersMapped);
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//   arr.sort((a,b) => a.age - b.age);
//   return arr
// }

// console.log(sortByAge(arr));

// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(arr) {
//   return arr.reduce((sum, el) => sum + el.age, 0) / arr.length;
// }

// console.log(getAverageAge(arr)); //  28



// Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// function unique(arr) {
//   let newArray = [];
//   arr.forEach(el => {
//     if (!newArray.includes(el)) {
//       newArray.push(el)
//     }
//   })
//    return newArray
// }

// function unique(arr) {
//   return Array.from(new Set(arr))
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log( unique(strings) ); // кришна, харе, :-O
