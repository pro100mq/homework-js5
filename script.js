let select = prompt("Кава , Чай , Сік")
switch(select){
    case "Кава".toLowerCase():
        alert("Ви бажаєте каву?")
    break;

    case "Чай".toLowerCase():
        alert("Ви бажаєте чаю?")
    break;

    case "Сік".toLowerCase():
        alert("Ви бажаєте соку?")
    break;
}

const dayWeek = prompt("Введіть день тижня")
switch(dayWeek){
    case "Понеділок".toLowerCase():
        alert("Цей день є робочим")
    break;
    case "Вівторок".toLowerCase():
        alert("Цей день є робочим")
    break; 

    case "Середа".toLowerCase():
        alert("Цей день є робочим")
    break; 

    case "Четвер".toLowerCase():
        alert("Цей день є робочим")
    break; 

    case "П'ятниця".toLowerCase():
        alert("Цей день є робочим")
    break;

    case "Субота".toLowerCase():
        alert("Цей день є вихідним")
    break; 

    case "Неділя".toLowerCase():
        alert("Цей день є вихідним")
    break; 
}

const month = Number(prompt("Введіть число місяця"))
switch(month){
    case 1:
        alert ("Зима, Січень")
    break;

    case 2:
        alert ("Зима, Лютий")
    break;

    case 3:
        alert ("Весна, Березень")
    break;

    case 4:
        alert ("Весна, Квітень")
    break;

    case 5:
        alert ("Весна, Травень")
    break;

    case 6:
        alert ("Літо, Червень")
    break;

    case 7:
        alert ("Літо, Липень")
    break;

    case 8:
        alert ("Літо, Серпень")
    break;

    case 9:
        alert ("Осінь, Вересень")
    break;

    case 10:
        alert ("Осінь, Жовтень")
    break;

    case 11:
        alert ("Осінь, Листопад")
    break;

    case 12:
        alert ("Зима, Грудень")
    break;

    default:
        alert("Такого місяця не існує")
}

const dayMonth = prompt("Введіть назву місяця")
switch(dayMonth){
    case "Січень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Лютий".toLowerCase():
        alert ("У цьому місяці 29 днів")
    break;

    case "Березень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Квітень".toLowerCase():
        alert ("У цьому місяці 30 день")
    break;

    case "Травень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Червень".toLowerCase():
        alert ("У цьому місяці 30 день")
    break;

    case "Липень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Серпень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Вересень".toLowerCase():
        alert ("У цьому місяці 30 день")
    break;

    case "Жовтень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    case "Листопад".toLowerCase():
        alert ("У цьому місяці 30 день")
    break;

    case "Грудень".toLowerCase():
        alert ("У цьому місяці 31 день")
    break;

    default:
        alert("Такого місяця не існує")
}

const color = prompt("Введіть назву кольору світлофора")
switch(color){
    case "Червоний".toLowerCase():
        alert("Стояти, рух заборонено!")
    break;

    case "Жовтий".toLowerCase():
        alert("Приготуватись")
    break;

    case "Зелений".toLowerCase():
        alert("Рух дозволено")
    break;

    default:
        alert("Такого кольору у світлофора не існує")
}

const firstNumber = parseFloat(prompt("Введіть перше число"))
const secondNumber = parseFloat(prompt("Введіть друге число"))
const operation = prompt("Виберіть знак: + - * / ")
switch(operation){
    case "+":
        alert(firstNumber + secondNumber)
    break;

    case "-":
        alert(firstNumber - secondNumber)
    break;

    case "*":
        alert(firstNumber * secondNumber)
    break;

    case "/":
        alert("Ділити на нуль неможливо")
        alert(firstNumber / secondNumber)
    break;

    default:
        alert("Операцію не виконано")
}