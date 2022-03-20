/*2) На старте вы получаете массив. Необходимо написать функцию, которая будет  
   возвращать массив удвоенных значений исходного массива.
   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

   /*
   const double1 = (arr) => {
       const result = arr.map((currentValue) => {
            return currentValue * 2;
       })
       return result;
   }

   //сокращенная версия
   const double2 = (arr) => arr.map((currentValue) => currentValue * 2);

console.log(double1([4, 1, 1, 1, 4]));
console.log(double2([4, 1, 1, 1, 4]));
*/

/********** FILTER ********/
/*
const myNumbers = [10, 20, 130, 70, 80, 12];

const filtered1 = myNumbers.filter(function(currentValue){
    return currentValue > 50;
})

//сокращенный вариант

const filtered2 = myNumbers.filter(currentValue => currentValue > 50);

console.log(filtered1);
console.log(filtered2);
*/


const goods = [
    {
        name: 'iPhone 12',
        price: 790 
    },
    {
        name: 'iPhone 12 pro',
        price: 800
    },
    {
        name: 'iPhone 12 pro max',
        price: 800
    },
    {
        name: 'iPhone 13 pro',
        price: 1000
    },
    {
        name: 'iPhone 13 pro max',
        price: 1200
    }
]

const filterPrice = (goodsArray, price, operator) => {
    return goodsArray.filter(good => {
        if (operator === '>'){
            return good.price  > price;  
        } else if(operator === '<'){
            return good.price < price;
        }
    })
}

console.log(filterPrice(goods, 800, '>'));


const filter = (arr) => 
{
    let group1 = [];
    let group2 = [];

    for(let i = 0; i < arr.length; i++){
        if (arr[i].price > 800){
            group2.push(arr[i].name);
        }else if(arr[i].price <= 800){
            group1.push(arr[i].name);
        }
    }
    
    return{
        group1, 
        group2
    }
}

console.log(filter(goods));


