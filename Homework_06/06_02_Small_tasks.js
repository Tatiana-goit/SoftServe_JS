// Small tasks
// Написати функцію, яка приймає двоцифрове число і повертає його в текстовому вигляді. Наприклад: 35 – тридцять п'ять, 89 – вісімдесят дев'ять, 12 – дванадцять.
const PLACE_1_9 = {
  '1': 'один',
  '2': 'два',
  '3': 'три',
  '4': 'четыре',
  '5': 'пять',
  '6': 'шесть',
  '7': 'семь',
  '8': 'восемь',
  '9': 'девять',
};

const PLACE_11_19 = {
  '10': 'десять',
  '11': 'одиннадцать',
  '12': 'двенадцать',
  '13': 'тринадцать',
  '14': 'четырнадцать',
  '15': 'пятнадцать',
  '16': 'шестнадцать',
  '17': 'семнадцать',
  '18': 'восемнадцать',
  '19': 'девятнадцать',
};

const PLACE_TENSES_20_99 = {
  '2': 'двадцать',
  '3': 'тридцать',
  '4': 'сорок',
  '5': 'пятьдесят',
  '6': 'шестьдесят',
  '7': 'семьдесят',
  '8': 'восемьдесят',
  '9': 'девяносто',
};

function textMode(num) {
  const firstDigit = Math.floor(num / 10);
  const secondDigit = num % 10;
  if (firstDigit === 0) {
    return PLACE_1_9[num];
  }
  if (firstDigit === 1) {
    return PLACE_11_19[num];
  }
  if (secondDigit === 0) {
    return PLACE_TENSES_20_99[firstDigit];
  }
  return PLACE_TENSES_20_99[firstDigit] + ' ' + PLACE_1_9[secondDigit];
}

console.log(textMode(5));
console.log(textMode(16));
console.log(textMode(97));
console.log(textMode(31));
console.log(textMode(20));
console.log(textMode(10));

// Написати функцію, яка приймає рядок та виводить статистику про неї: кількість літер, кількість цифр та кількість інших знаків.

function statistic(str) {
  let numberOfLetters = 0;
  let numberOfDigits = 0;
  let numberOfOther = 0;

  const letters = str.match(/[a-zA-Zа-яА-Я]/g);
  const digits = str.match(/[0-9]/g);
  const other = str.match(/[^\d\sA-Z]/gi);

  if (letters !== null) {
    numberOfLetters = letters.length;
  }
  if (digits !== null) {
    numberOfDigits = digits.length;
  }
  if (other !== null) {
    numberOfOther = other.length;
  }

  return `${str} \n Количество букв = ${numberOfLetters}, количество цифр = ${numberOfDigits}, количество остальных знаков ${numberOfOther}`;
}

console.log(statistic('*Fo1r the2 g3ood 4of th5e pe6ople!!!'));
console.log(statistic('*For the good of the people!!!'));
console.log(statistic('%5%5%'));

// Написати функцію, яка замінює в отриманому рядку великі літери на маленькі, малі – на великі, а цифри – на знак нижнього підкреслення.
function change(str) {
  const result = str
    .replace(/\s/g, '_')
    .split('')
    .map(symbol => {
      return symbol === symbol.toLowerCase()
        ? symbol.toUpperCase()
        : symbol.toLowerCase();
    })
    .join('');
  return result;
}

console.log('FOR the GOOD2 of the PEOPLE');
console.log(change('FOR the GOOD2 of the PEOPLE'));
