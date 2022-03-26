// Задание №1
let age1;
let age2;
age1 = parseFloat(window.prompt('Введите год рождения'));
age2 = parseFloat(window.prompt('Введите текущий год'));
window.alert(['Вам ', age2 - age1,  ' лет']);

// Задание №2 

let beginNum = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  beginNum += 1;

  if ( beginNum === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);


