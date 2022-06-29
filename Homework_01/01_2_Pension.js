// 2. Пенсія

// Створіть веб-аплікацію, яка питає у користувача його вік та виводить скільки йому залишилось до пенсії та в якому році вона настане.
// Приклад:
// --> 30
// <-- 35, 2057
// --> 1
// <-- 64, 2086

const PENSION = 65;
const date = new Date();
const age = prompt('Введите свой возраст');
const resultAge = PENSION - age;
// const year = 2022+result;
const year = date.getFullYear() + resultAge;
console.log(`До пенсии вам осталось ${resultAge} лет и она начнется в ${year} году`)