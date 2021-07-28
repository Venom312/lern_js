// создать функцию для создания калькулятора с prompt и консолью
let num1 = +prompt('Введите первое число', '0');
let num2 = +prompt('Введите второе число', '0');
let oper = prompt('Выберите математическую операцию: "+", "-", "/", "%", "*", "**"');

// Функции математических операций
let operAddition = (par1, par2) => {
    let sum = par1 + par2;
    console.log(sum)
}
let operSubtraction = (par1, par2) => {
    let sum = par1 - par2;
    console.log(sum)
}
let operDivision = (par1, par2) => {
    let sum = par1 / par2;
    console.log(sum)
}
let operRemainderofDvision = (par1, par2) => {
    let sum = par1 % par2;
    console.log(sum)
}
let operMultiply = (par1, par2) => {
    let sum = par1 * par2;
    console.log(sum)
}
let operRaisePower = (par1, par2) => {
    let sum = par1 ** par2;
    console.log(sum)
}

// Проверка пользовательских данных с вызовом операций
if(isNaN(num1) == true || isNaN(num2) == true){
    alert(`Вы ввели ${num1} и ${num2}, что то из них не число`);
} else if(isNaN(num1) == true || isNaN(num2) == true){
    alert(`Вы ввели ${num1} и ${num2}, что то из них не число`);
} else if(oper == '+'){
    operAddition(num1,num2);
} else if(oper == '-'){
    operSubtraction(num1,num2);
} else if(oper == '/'){
    operDivision(num1,num2);
} else if(oper == '%'){
    operRemainderofDvision(num1,num2);
} else if(oper == '*'){
    operMultiply(num1,num2);
} else if(oper == '**'){
    operRaisePower(num1,num2);
} else{
    alert('Не верная операция');
}




