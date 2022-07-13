// 5. Ваше замовлення Ваше завдання - відсортувати заданий рядок. Кожне слово в рядку міститиме одне число. Це число є позиція, яку має мати слово в результаті. Примітка. Числа можуть бути від 1 до 9. Отже, 1 буде першим словом (а не 0).

// Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку будуть містити лише дійсні послідовні числа. Приклад:

// "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"

// "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"

function sort(text) {
  let arrayWords = text.split(' ');
  arrayWords.sort((a, b) => a.match(/\d/g) - b.match(/\d/g));
  return arrayWords.join(' ');
}

// 2 solution
// function sort(text) {
//   let array = text.split(' ');
//   let arraySort = [];
//   array.forEach(word => {
//     if (word.search(/\d/) != -1) {
//       let pos = word.search(/\d/);
//       let sign = word.slice(pos, pos + 1);
//       arraySort[sign - 1] = word;
//     }
//   });
//   return arraySort.join(' ');
// }

console.log(sort('is2 Thi1s T4est 3a'));
console.log(sort('4of Fo1r pe6ople g3ood th5e the2'));
