// Дитяча казка
// Напишіть функцію, яка прийматиме рядок довільної довжини та символ, який замінюватиме всі голосні літери в цьому рядку. Виведіть користувачеві смішний рядок, щоб порадувати його та його дітей.

// Вхідні дані:

// Рядок - довільний текст із змістом
// Рядок - один символ для заміни
// Вихідні дані: Рядок - смішний рядок

const btnTale = document.querySelector('.button__tale');

btnTale.addEventListener('click', showTranslate);

function showTranslate() {
  const str = document.querySelector('.input__tale').value;
  const newStr = str.replace(/[аи]/g, 'у');
  document.querySelector('.text-result__tale').innerHTML = newStr;
}

const example =
  'Попелюшка принесла ящірок, і чарівниця обернула їх на шістьох лакеїв у строкатих лівреях; вони стрибнули на приступку позад карети, та так спритно, ніби за своє життя нічого іншого й не робили.';
