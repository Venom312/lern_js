// let total = 0
// let cashback = 0

// let products = [
//     {
//         name: 'Молоко',
//         pieces: 1,
//         price: 10000,
//         sale: 14,
//         cashback: 4
//     },
//     {
//         name: 'Йогурт',
//         pieces: 5,
//         price: 14500,
//         sale: 7.5,
//         cashback: 3
//     },
//     {
//         name: 'Шоколад',
//         pieces: 2,
//         price: 18000,
//         sale: 21,
//         cashback: 6.5
//     },
//     {
//         name: 'Говядина',
//         pieces: 2,
//         price: 65000,
//         sale: 1,
//         cashback: 0
//     },
//     {
//         name: 'Энергетик',
//         pieces: 2,
//         price: 14500,
//         sale: 2,
//         cashback: 5
//     },
// ]
// for(let item of products){
//     let all_price = item.price * item.pieces;
//     total += all_price - (all_price / 100 * item.sale);
//     cashback += total / 100 * item.cashback;
//     console.log(cashback)
// }
// console.log(total, cashback)
// for(let item of test){
    //Создаем ключ
//     item.key = item.key1 - (item.key2 / 100 * item.key3);
// }
// console.log(test);

for(let item in obj){
    total += obj[item].x + obj[item].y + obj[item].z;
}