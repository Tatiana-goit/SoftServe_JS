// 1. Однакові цифри в діапазоні

// Створіть веб-програму, в якій користувач вводить два числа (межі діапазону) від 10 до 99. Потрібно знайти і вивести в консоль через кому всі числа в діапазоні, які мають хоч дві однакові цифри.

function findNumber(a, b) {
  const arrayOfNumbers = [];
  for (let i = a; i <= b; i++) {
    let firstDigit = Math.floor(i / 10);
    let lastDigit = i % 10;
    if (firstDigit === lastDigit){
      arrayOfNumbers.push(i);
    }
  }
  if (arrayOfNumbers.length !== 0) {
    return arrayOfNumbers
  } else {
    return 'Таких чисел в диапазоне нет'
  }
}

// console.log(findNumber(20, 90));

// 2 вариант

// function findNumber(a, b) {
//   for (let i = a; i <= b; i++) {
//     let firstDigit = Math.floor(i / 10)
//     let lastDigit = i % 10
//     if (firstDigit === lastDigit) {
//       console.log(i)
//       i += 11
//       while (i <= b) {
//         console.log(i)
//         i += 11
//       }
//       break
//     }
//   }
// }

// findNumber(20, 90)
