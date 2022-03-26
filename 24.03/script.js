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
