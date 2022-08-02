const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const circleBtn = document.querySelector('.circle');
const pauseBtn = document.querySelector('.pause');
const secondsElm = document.querySelector('#seconds');
const minutesElm = document.querySelector('#minutes');
const millisecondsElm = document.querySelector('#milliseconds');
const circleResult = document.querySelector('.circle-result');

let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let circleMilliseconds = 0;
let circleSeconds = 0;
let circleMinutes = 0;

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  
  circleResult.insertAdjacentHTML(
    'beforeend',
    `<p> </p>`,
  );

  minutesElm.innerText = '00';
  secondsElm.innerText = '00';
  millisecondsElm.innerText = '00';
  interval = setInterval(() => {
    milliseconds++;


    if (milliseconds <= 9) {
      millisecondsElm.innerText = '0' + milliseconds;
    } else {
      millisecondsElm.innerText = milliseconds;
    }

    if (milliseconds > 99) {
      millisecondsElm.innerText = '00';
      milliseconds = 0;
      seconds++;
    }

    if (seconds <= 9) {
      secondsElm.innerText = '0' + seconds;
    } else {
      secondsElm.innerText = seconds;
    }

    if (seconds > 59) {
      secondsElm.innerText = '00';
      seconds = 0;
      minutes++;
    }

    if (minutes <= 9) {
      minutesElm.innerText = '0' + minutes;
    } else {
      minutesElm.innerText = minutes;
    }
  }, 10);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesElm.innerText = '00';
  secondsElm.innerText = '00';
  millisecondsElm.innerText = '00';
});

circleBtn.addEventListener('click', () => {
  minutes <= 9 ? (circleMinutes = '0' + minutes) : (circleMinutes = minutes);
  seconds <= 9 ? (circleSeconds = '0' + seconds) : (circleSeconds = seconds);
  milliseconds <= 9
    ? (circleMilliseconds = '0' + milliseconds)
    : (circleMilliseconds = milliseconds);

  circleMilliseconds;
  circleResult.insertAdjacentHTML(
    'beforeend',
    `<p>${circleMinutes}:${circleSeconds}:${circleMilliseconds}</p>`,
  );
});
