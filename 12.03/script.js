// Задания №1
let getName = (name) => {
    if (name === undefined){
        name = 'гость';
    } console.log('Привет, ' + name);
 }
 getName('Василий')
 
 // Задания №2
 
 const array = [1, 2, 3, 4, 5, 6, 7]
 let doubleValue = array.map((currentValue) => currentValue * 2); // удваение элементов массива 
 console.log(doubleValue)