// 3. Навпаки

// Запросіть у користувача трицифрове число і виведіть його задом наперед.
// Приклад:
// --> 321
// <-- 123
// --> 109
// <-- 901

const myNumbReverse = (myNumber) => console.log(myNumber.toString().split('').reverse().join(''));
myNumbReverse(354); 

// 1 вариант - самый простой

// const num = prompt('Введите трехзначное число')
// const firstNumber = Math.floor(num / 100)
// const secondNumber = Math.floor(num / 10) % 10
// const lastNumber = num % 10
// console.log(`Перевернутое число будет: ${lastNumber}${secondNumber}${firstNumber}`)



// 2 вариант (с дополнительной проверкой по введенной информации)

// var num = 0
// while (true) {
//   num = prompt('Введите трехзначное число')
//   if (num < 100 || num >= 1000) {
//     alert('Введите корректное трехзначное число')
//   } else {
//     console.log(
//       `Перевернутое число будет: ${num % 10}${
//         Math.floor(num / 10) % 10
//       }${Math.floor(num / 100)}`,
//     )
//     break
//   }
// }


// 3 вариант перевернуть произвольное число через строку

// const n = 12345678;
// const str = n + '';
// let newStr = '';

// for (let i = str.length - 1; i >= 0; i = i - 1){
//     newStr += (str[i]);
// }
// console.log('Для числа ', str,' перевернутое число будет: ', newStr);



// 4 вариант перевернуть произвольное число через массив

// const n = 12345678;
// const str = String(n);
// var arr = [];
// for (let i = 0; i < str.length; i++) {
//   arr.push(str[i]);
// }
// console.log(arr.reverse());