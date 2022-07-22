// Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнила в маркері (у відсотках);
// метод друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// Додаткове завдання:
// Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

class Marker {
  constructor(color, quantity = 100) {
    if (typeof color === 'string') {
      this.color = color;
    } else {
      alert(`Введите правильно цвет`);
    }

    this.quantity = quantity;
  }

  print(text) {
    if (this.quantity >= 0.5) {
      let result = '';
      for (let i = 0; i <= text.length; i++) {
        result += text[i];
        if (text[i] !== ' ') {
          this.quantity -= 0.5;
          if (this.quantity < 0.5) {
            break;
          }
        }
      }
      document.querySelector(
        '.marker',
      ).innerHTML += `<p style="color: ${this.color}"> ${result}</p>`;
    } else {
      alert(`Чернила закончились`);
    }
  }
}

class refillingMarker extends Marker {
  constructor(color, quantity) {
    super(color, quantity);
  }

  refilling() {
    this.quantity = 100;
  }
}

const marker = new refillingMarker('blue', 40);
const marker2 = new refillingMarker('red', 80);

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus laboriosam deserunt ratione quasi dicta libero cupiditate sed assumenda est quo cumque nihil non expedita, et alias aut! Voluptate ipsum magnam omnis, dolores aliquam facere! Distinctio doloremque ea officia facilis exercitationem similique numquam, quia sit! Dicta ipsa ipsum eum temporibus?`;

marker.print(text);
marker.refilling();
marker.print(text);

marker2.print(text);
