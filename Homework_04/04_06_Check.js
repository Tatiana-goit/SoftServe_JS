// 6. Чек-методи Створити масив, який описує чек у магазині. Кожен елемент масиву складається із назви товару, кількості та ціни за одиницю товару. Написати такі функції.

// Роздруківка чека на екран.

// Підрахунок загальної суми покупки.

// Отримання найдорожчої покупки у чеку.

// Підрахунок середньої вартості одного товару у чеку.
const checkArray = [
  {
    name: 'water',
    count: 2,
    price: 15,
  },
  {
    name: 'bread',
    count: 1,
    price: 25,
  },
  {
    name: 'chocolate',
    count: 1,
    price: 35,
  },
];

function paint(checkArray) {
  console.log('Чек');
  checkArray.forEach(el => console.log(`Наименование: ${el.name}, Количество: ${el.count}, Стоимость за единицу товара: ${el.price} грн, Стоимость: ${el.count*el.price} грн`));
    //   checkArray.forEach(el => console.log(JSON.stringify(el)));
}

function summa(checkArray) {
  return checkArray.reduce(
    (sum, checkArray) => sum + checkArray.count * checkArray.price,
    0,
  );
}

function maxPrice(checkArray) {
  checkArray.sort((a, b) => b.price - a.price);
  return `Самая дорогая покупка это ${checkArray[0].name} по цене ${checkArray[0].price} грн`;
}

function mediumPrice(checkArray) {
  const sum = summa(checkArray);
  const countSum = checkArray.reduce(
    (countSum, checkArray) => (countSum += checkArray.count),
    0,
  );
  const result = sum / countSum.toFixed(0);
  return `Средняя стоимость одного товара в чеке ${result} грн`;
}

paint(checkArray);
console.log(`Общая сумма покупки = ${summa(checkArray)} грн`);
console.log(maxPrice(checkArray));
console.log(mediumPrice(checkArray));
