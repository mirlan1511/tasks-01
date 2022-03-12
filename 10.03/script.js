/*let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
    result.push(arr[i]); //вывод не чётных чисел массива
}*/



function minNum(a,b) {
    return (a < b ) ? a : b;
}
function showNum(x) {
    console.log(x);
}
let result = minNum(86, 66);
showNum(result);