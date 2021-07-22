let students = [
    {
        name:"Annah",
        mark: "Harvard",
        count: 1,
    },
    {
        name:"Geroge",
        mark: "SamDU",
        count: 1,
    },
    {
        name:"Megan",
        mark: "Oxford",
        count: 1,
    },
    {
        name:"Tony",
        mark: "Harvard",
        count: 1,
    },
    {
        name:"Harry",
        mark: "Oxford",
        count: 1,
    },
    {
        name:"Justin",
        mark: "SamDU",
        count: 1,
    },
    {
        name:"Sherin",
        mark: "Harvard",
        count: 1,
    },
    {
        name:"Bob",
        mark: "Oxford",
        count: 1,
    },
    {
        name:"Mike",
        mark: "SamDU",
        count: 1,
    },
    {
        name:"Bob",
        mark: "Oxford",
        count: 1,
    },
]

let count = [
    {
        university:"Harvard",
        number:0
    },
    {
        university:"Oxford",
        number:0
    },
    {
        university:"SamDU",
        number:0
    },
]




// Создайте цикл, проверяющий объекты массива Students.
// Затем вычислите в массиве count количество студентов, обучающихся в каждом университете.
 
for(let univ of count){
    for(let student of students){
        if (student.mark == univ.university) {
            univ.number += student.count
        }
    }
}
console.log(count);