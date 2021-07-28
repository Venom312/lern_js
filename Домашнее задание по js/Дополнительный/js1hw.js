
// Создайте функцию, которая принимает три набора array и возвращает сумму чисел.

let array1 = [1,2];

let array2 = [10,42];

let array3 = [141,263];

// Функция для получения общей суммы
function arrSum (arr, arr1, arr2){
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let all_sum = 0;
    for(let i = 0; i <= 0; i++){
        for(let i = 0; i <= arr.length -1; i++){
            sum1 += arr[i];
        }
        for(let i = 0; i <= arr1.length -1; i++){
            sum2 += arr1[i];
        }
        for(let i = 0; i <= arr2.length -1; i++){
            sum3 += arr2[i];
        }
        all_sum = sum1 + sum2 + sum3;
        
    }
    return all_sum
}
// Функция для получения суммы одного массива

function arraySum(arr){
    let sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum;
}

console.log(arraySum(array2));
console.log(arrSum(array1, array2,array3))