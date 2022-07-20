window.onload = function () {
  window.setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
      hours = `0${sehoursconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    let clock = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.clock').innerHTML = clock;

    let arrayOfDays = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    let dayOfWeek = arrayOfDays[date.getDay()];

    let day = date.getDate();
    let arrayOfMonth = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    let month = arrayOfMonth[date.getMonth()];
    let year = date.getFullYear();

    let data = `${day} ${month} ${year} р `;
    let info = `${dayOfWeek}, ${data}`;

    document.querySelector('.dateInfo').innerHTML = info;
  }, 1000);
};
