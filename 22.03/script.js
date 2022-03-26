//#1

function shomNum () {
    let nums = prompt('Введите число');
    let x = 0;
}

function returnNum (){
    while (nums !=99){
        x++;
        nums = prompt('Введите число');
    }
    return;
}

function result (){
    console.log('Количество чисел = ' + x);
}

shomNum();
returnNum();
result();


//#2
function numbers (){
    let q = 0;
    let sum = 0;
    let count = Number(prompt('Введите число'));
}

function returnNums(){
    while(count != 999){
        q++;
         sum += count;
         count = Number(prompt('Введите число'));       
    }
    return;
}
function showResult(){
    console.log('Количество чисел = ' + q, '; Сумма чисел = ' + sum);
}

numbers();
returnNums();
showResult();




