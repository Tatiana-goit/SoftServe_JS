// 3. Кількість дублікатів* ускладнене, додаткове

// Напишіть функцію, яка повертатиме кількість окремих нечутливих до регістру символів алфавіту та числових цифр, які зустрічаються у вхідному рядку більше одного разу. Можна припустити, що вхідний рядок містить лише алфавіти (як у верхньому, так і в нижньому регістрі) та числові цифри.

// Приклад:

// "abcde" -> 0
// "aabbcde" -> 2 # 'a' та 'b'
// "aabBcde" -> 2 # 'a' двічі та 'b' двічі (`b` та `B`)
// "indivisibility" -> 1 # 'i' 6 разів
// "Indivisibilities" -> 2 # 'i'7 разів 's' 6
// "aA11" -> 2 # 'a' та '1'
// "ABBA" -> 2 # 'A' та 'B'

// function countChars(data) {
//   const dataArray = data.toLowerCase().split('')
//   const dataMap = new Map()
//   for (let i = 0; i < dataArray.length; i++) {
//     // let count = result[dataArray[i]] ? result[dataArray[i]] : 0
//     // result[dataArray[i]] = count + 1
//     dataMap.set(dataArray[i],+1)
//     console.log(dataMap)
//   }
  // const dataArray = data.toLowerCase().split('')
  // let result = {}
  // for (let i = 0; i < dataArray.length; i++) {
  //   let count = result[dataArray[i]] ? result[dataArray[i]] : 0;
  //   result[dataArray[i]] = count + 1;
  //   // console.log(dataArray[i]);
  //   // console.log( result[dataArray[i]]);
  // }
  //   for (let key in result) {
  //   // console.log('key',key);
  //   // console.log('result.key',result.key);
  //   // console.log('result[key]',result[key]);
  //   if (result[key]===1 ) {
  //       delete result[key];
  //   }
  // }
  // return result
// }

// 1 решение
function countChars(data) {
  const dataArray = data.toLowerCase().split('')
  let result = {}
  for (let i = 0; i < dataArray.length; i++) {
    let count = result[dataArray[i]] ? result[dataArray[i]] : 0
    result[dataArray[i]] = count + 1
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key]
    }
  }
  return result
}

// console.log(countChars('abcde'));
// console.log(countChars('aabbcde'));
// console.log(countChars('aabBcde'));
console.log(countChars('indivisibility'))
// console.log(countChars('aabBIndivisibilitiescde'));
// console.log(countChars('aA11'));
// console.log(countChars('ABBA'));

// Образец 1 решения
// function countChars(data) {
//   const dataArray = data.toLowerCase().split('')
//   let result = {}
//   for (let i = 0; i < dataArray.length; i++) {
//     let count = result[dataArray[i]] ? result[dataArray[i]] : 0;
//     result[dataArray[i]] = count + 1;
//     // console.log(dataArray[i]);
//     // console.log( result[dataArray[i]]);
//   }
//     for (let key in result) {
//     // console.log('key',key);
//     // console.log('result.key',result.key);
//     // console.log('result[key]',result[key]);
//     if (result[key]===1 ) {
//         delete result[key];
//     }
//   }
//   return result
// }
