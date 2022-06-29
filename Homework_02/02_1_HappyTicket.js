// 1. Щасливий квиток

// Напишіть веб-аплікацію для розрахунку щасливого квитка.
// Користувач вводить шестизначний номер квитка (трамвай/тролейбус).
// Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр.
// Виведіть повідомлення про "щасливість" квитка користувачеві.

const ticketNumber = 123321;
const ticketArray = Array.from('' + ticketNumber).map(Number);
// const ticketArray=Array.from(ticketNumber.toString(), Number);
// const ticketArray=[...''+ticketNumber].map(Number)

let firstPart = 0;
let secondPart = 0;

for (let i = 0; i <= 2; i++) {
  firstPart += ticketArray[i]
}
for (let i = 3; i <= 5; i++) {
  secondPart += ticketArray[i]
}

if (firstPart === secondPart) {
  console.log('Ваш билет счастливый')
} else {
  console.log('Ваш билет не счастливый')
}
