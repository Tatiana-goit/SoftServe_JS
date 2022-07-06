// 4. Ремонт

// Ваш улюблений дядько – директор фірми, яка робить євроремонти в офісах. У зв'язку з фінансово-економічною кризою, дядечко вирішив оптимізувати своє підприємство. Давно ходять чутки, що бригадир у дядеччиній фірмі купує зайву кількість будматеріалів, а залишки використовує для обробки своєї нової дачі. Ваш дядько зацікавився, скільки банок фарби необхідно для фарбування стін в офісі довжиною L метрів, шириною - W і висотою - H, якщо однієї банки вистачає на 16м2, а розмірами дверей і вікон можна знехтувати? Замовлень багато, тому дядько попросив написати програму, яка все це рахуватиме.
// Вхідні дані три натуральні числа L, W, H – довжину, ширину та висоту офісу в метрах відповідно, кожне з яких не перевищує 1000.
// Вихідні дані мінімальна кількість банок фарби, необхідні для фарбування стін в офісі.

function countCups(l, w, h) {
  return Math.ceil(((l + w) * h * 2) / 16);
}
console.log('Для покраски нужно', countCups(30, 40, 3), 'банок');

// const paint = (l, w, h) => ~~(l*h/8+w*h*/8) + 1;

// const paint = (l, w, h) => l * w * h;
// console.log(paint(5, 4, 2));

// console.log(55555);
