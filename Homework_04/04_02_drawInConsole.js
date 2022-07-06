// 2. Малювання у консолі

// Створіть веб-програму, в якій користувач вводить ширину та символ. Вивести в консоль лінію заданої ширини заданим символом

function drawInConsole(width, symbol) {
  return symbol.repeat(width);
  // return Array(width).fill(symbol).join(' '); - тоже отличный вариант
}

// 2 способ
// function drawInConsole(width, symbol) {
//   let str = '';
//   for (let i = 1; i <= width; i++) {
//     str += symbol;
//   }
//   return str;
// }

console.log(drawInConsole(50, 's'));
console.log(drawInConsole(70, 'I'));
console.log(drawInConsole(55, 'x'));
