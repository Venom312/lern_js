let cars = [
    {
        name:"Lexus",
        color:"black",
        price:"25000",
        saleProcent:"9"
    },
    {
        name:"Chevrolet",
        color:"red",
        price:"48000",
        saleProcent:"7"
    },
    // {
    //     name:"Chevrolet",
    //     color:"red",
    //     price:"48000",
    //     saleProcent:"7"
    // },
    
    {
        name:"Mercedes",
        color:"white",
        price:"35500",
        saleProcent:"8"
    },
    // {
    //     name:"Lexus",
    //     color:"black",
    //     price:"25000",
    //     saleProcent:"9"

    // },
    // {
    //     name:"Chevrolet",
    //     color:"red",
    //     price:"48000",
    //     saleProcent:"7"
    // },
    // {
    //     name:"Mercedes",
    //     color:"white",
    //     price:"35500",
    //     saleProcent:"8"
    // },
    // {
    //     name:"Lexus",
    //     color:"black",
    //     price:"25000",
    //     saleProcent:"9"

    // },
    // {
    //     name:"Chevrolet",
    //     color:"red",
    //     price:"48000",
    //     saleProcent:"7"
    // },
    // {
    //     name:"Mercedes",
    //     color:"white",
    //     price:"35500",
    //     saleProcent:"8"
    // },
    // {
    //     name:"Lexus",
    //     color:"black",
    //     price:"25000",
    //     saleProcent:"9"

    // },

   
]

let counts = [
    {
        count: 0,
        company: 'chevrolet'
    },
    {
        count: 0,

        company: 'merc'
    },
    {
        count: 0,
        company: 'lexus'
    }
]

let cheap = []
let expensive = []

// Создайте цикл, проверяющий объекты массива Cars. 
// Разделите их на дешевые и дорогие массивы в зависимости от стоимости объекта. 
// И посчитаем в массиве count, сколько машин находится в массиве cars для каждой кампании.

// for(let car of cars){
//     for(let count of counts){
 
//     }
// }
for(let i = 0; i <= cars.length -1; i++){
    for(let k = cars.length -1; 0 <= k; k--){
        if(cars[i].price > cars[k].price){
            cheap.push(cars[i])
        }
    }
}
console.log(cheap)