// 1) Операторы инкремента и декремента:
/*let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
console.log(num); *!/

let num = 10;
num = ++ num;
num = ++ num;
num = -- num;
console.log(num);*/



//2) Операторы присвоения:
/*let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);

let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
alert(num1);*/


// Примеры на все комбинации операторов && и ||;
// 1) /**************** && ********************/

// true + true = true;
/*const a = 3;
const b = -2;
console.log(a > 0 && b < 0);*/

//true + false = false;
/*const a = 1;
const b = -1;
console.log(a > 0 && b < 0);*/

//false + true = false;
/*const a = 5;
const b = -5;
console.log(a < 0 && b < 0);*/

//false + false = false;
/*const a = 5;
const b = 10;
console.log(a > b && b < a);*/

// 2) /**************** || ********************/

// true + true = true;

/*const a = 15;
const b = 5;
console.log(a == 15 || b == 5);*/

//true + false = false;

/*
const a = true;
const b = false;
console.log(a === true || b === false);
*/


//false + false = false;

/*
const a = 100;
const b = 200;
console.log(a == b || b < a);
*/


//false + true = false;

const a = 10 * 2;
const b = 5 - 1;
console.log(a < b || b < a);














