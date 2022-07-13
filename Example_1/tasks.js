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

function camelize(str) {
  return str
    .split('-')
    .map((el, index) => (index == 0 ? el : el[0].toUpperCase() + el.slice(1))).join('')
}

console.log(camelize('list-style-image'));
