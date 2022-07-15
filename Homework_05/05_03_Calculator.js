// Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати (+ - * /), переводить операнди у числа, вирішує приклад та повертає результат.

function Calculator(a, b, sign) {
  let result = eval(a + sign + b);
  return result % 1 === 0 ? result : result.toFixed(1);
}

console.log(Calculator(12, 4, '+'));
console.log(Calculator(1, 4, '-'));
console.log(Calculator(12, 0, '/'));
console.log(Calculator(1.2, 3, '*'));


// function Calculator(a, b, sign) {
//   let result;
//   switch (sign) {
//     case '+':
//       result = a + b;
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     case '/':
//       result = a / b;
//       break;
//   }
//   return result % 1 === 0 ? result : result.toFixed(1);
// }
