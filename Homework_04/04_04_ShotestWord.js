// 4. Найкоротше слово

// Напишіть функцію, що отримує у якості аргумента рядок слів та повертає довижину найкоротшого

// Приклад:

// "bitcoin take over the world maybe who knows perhaps" --> 3
// "turns out random test cases are easier than writing out basic ones" --> 3
// "lets talk about javascript the best language" --> 3
// "i want to travel the world writing code one day" --> 1
// "Lets all go on holiday somewhere very cold" --> 2

// function findShotestWord(str) {
// return Math.min(...str.split(' ').map(el => el.length));
// }

const findShotestWord = str =>
  str.split(' ').reduce((a, b) => (a.length < b.length ? a : b)).length;

console.log(
  findShotestWord('bitcoin take over the world maybe who knows perhaps'),
);


// 2 вариант
// function findShotestWord(str) {
//   let arrayOfWords = str.split(' ')
//   let shotest = arrayOfWords[0].length
//   let word = arrayOfWords[0]
//   for (let i = 1; i < arrayOfWords.length - 1; i++) {
//     if (shotest > arrayOfWords[i].length) {
//       shotest = arrayOfWords[i].length
//       word = arrayOfWords[i]
//     }
//   }
//   return word.length
// }

// console.log(findShotestWord('bitcoin take over the world maybe who knows perhaps'),
// )
// console.log(findShotestWord('i want to travel the world writing code one day'))
// console.log(findShotestWord('Lets all go on holiday somewhere very cold'))
