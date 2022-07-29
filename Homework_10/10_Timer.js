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

startBtn.addEventListener('click', () => {
  clearInterval(interval);
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
    if (minutes <= 9) {minutes = '0' + minutes;}
    if (seconds <= 9) {seconds = '0' + seconds;}
    if (milliseconds <= 9) {milliseconds = '0' + milliseconds   ;}


    circleResult.innerHTML = `${minutes}:${seconds}:${milliseconds}`
});

