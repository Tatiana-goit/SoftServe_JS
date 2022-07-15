// Morse
// You have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
// Good luck!
// Examples:
// decodeMorse('.... . -.-- .--- ..- -.. .') //should return "HEY JUDE"

const CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
};

// function decodeMorse(str) {
//   const SEPARATOR_SPACE = ' ';
//   const SEPARATOR_3SPACE = '   ';
//   const NO_SEPARATOR = '';

//   function workWithSymbol(letter) {
//     return CODE[letter];
//   }
//   function workWithWord(word) {
//     return word.split(SEPARATOR_SPACE).map(workWithSymbol).join(NO_SEPARATOR);
//   }

//   return str.split(SEPARATOR_3SPACE).map(workWithWord).join(SEPARATOR_SPACE);
// }

function decodeMorse(str) {
  return str
    .split('   ')
    .map(word =>
      word
        .split(' ')
        .map(letter => CODE[letter])
        .join(''),
    )
    .join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); //should return "HEY JUDE"

// function decodeMorse(str) {
//   const SEPARATOR_SPACE = ' ';
//   const SEPARATOR_3SPACE = '   ';
//   const NO_SEPARATOR = '';
//   let result = [];
//   const arrayOfWords = str.split(SEPARATOR_3SPACE);

//   for (let i = 0; i < arrayOfWords.length; i++) {
//     const arrayOfSymbols = arrayOfWords[i].split(SEPARATOR_SPACE);
//     for (let j = 0; j < arrayOfSymbols.length; j++) {
//       result.push(CODE[arrayOfSymbols[j]]);
//     }
//     result.push(SEPARATOR_SPACE);
//   }
//   return result.join(NO_SEPARATOR);
// }

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); //should return "HEY JUDE"
