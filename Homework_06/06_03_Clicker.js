// Клікер
// Створити html-сторінку з клікером.

// При кліку на кнопку "Додати" рахунок додається на 1
// При кліку на кнопку "Відняти" рахунок віднімається на 1

const btnDecrementEl = document.getElementById('decrement');
const btnIncrementEl = document.getElementById('increment');
const valueEl = document.getElementById('value');

let counterValueEl = 0;

function decrement() {
  counterValueEl -= 1;
  valueEl.innerHTML = counterValueEl;
}

function increment() {
  counterValueEl += 1;
  valueEl.innerHTML = counterValueEl;
}

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);
