// 1. Площа

// Створіть веб-аплікацію, яка питає у користувача радіус кола та видає площу цього кола.

// *Приклад:*
// --> 123
// <-- 47529.15525615998
// --> 3.09
// <-- 29.996240815740702

// const radius = prompt('Введите радиус колеса');
// const result = Math.PI * radius ** 2;
// console.log(`Площадь круга с радиусом ${radius} = `, result);

// 2. Пенсія

// Створіть веб-аплікацію, яка питає у користувача його вік та виводить скільки йому залишилось до пенсії та в якому році вона настане.

// Приклад:
// --> 30
// <-- 35, 2057
// --> 1
// <-- 64, 2086

// const age = prompt('Введите свой возраст')
// const resultAge = 65 - age
// const date = new Date()
// // const year = 2022+result;
// const year = date.getFullYear() + resultAge
// console.log(
//   `До пенсии вам осталось ${resultAge} лет и она начнется в ${year} году`,
// )

// 3. Навпаки

// Запросіть у користувача трицифрове число і виведіть його задом наперед.

// Приклад:
// --> 321
// <-- 123
// --> 109
// <-- 901

// 1 вариант - самый простой

// const num = prompt('Введите трехзначное число')
// const firstNumber = Math.floor(num / 100)
// const secondNumber = Math.floor(num / 10) % 10
// const lastNumber = num % 10
// console.log(
//   `Перевернутое число будет: ${lastNumber}${secondNumber}${firstNumber}`,
// )



// 2 вариант (с дополнительной проверкой по введенной информации)

var num = 0
while (true) {
  num = +prompt('Введите трехзначное число')
  if (num < 100 || num >=1000) {
    alert('Введите корректное трехзначное число')
  }else  {
    console.log(
        `Перевернутое число будет: ${num % 10}${Math.floor(num / 10) % 10}${Math.floor(num / 100)}`,
      )
    break};
  
}

// const num = prompt('Введите трехзначное число')
// const firstNumber = Math.floor(num / 100)
// const secondNumber = Math.floor(num / 10) % 10
// const lastNumber = num % 10
// console.log(
//   `Перевернутое число будет: ${lastNumber}${secondNumber}${firstNumber}`,
// )
