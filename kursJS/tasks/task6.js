// Задание 6
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let answer6 = document.querySelector('.answer6');
let input6 = document.querySelector('.input6');
let btn6 = document.querySelector('.btn6');
let btn61 = document.querySelector('.btn6-1');
let arr6= [];

// Собираем массив
function func6() {
    arr6.push(input6.value);
    input6.value = '';
    console.log(arr6);
}
btn6.onclick = func6;

//Выводим массив
function func61() {
    for (let i = 0; i < arr6.length - 1; i++) {
        if(arr6[i] !== arr6[i+1]) {
            answer6.innerHTML = '"false" Элементы в массиве не одинаковы';
            break;
        } else {
            answer6.innerHTML = '"true" Элементы в массиве одинаковы';
        }
    }
}
btn61.onclick = func61;