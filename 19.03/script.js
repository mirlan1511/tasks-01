// Задания №1

let func1 = delay => 
{
    alert ('Hello ' + delay + ' seconds');
};

setTimeout(func1, 4000, 4);
setTimeout(func1, 12000, 8);

// Задания №2

let mul = (n,m) => n * m ;
console.log(mul(5, 10));

// Задания №3

function faktorial (num)
    {
        let result = 1;
        while (num){
        result *= num--;
    }
    return result;
}

alert(faktorial(7));