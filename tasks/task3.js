// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let answer3 = document.querySelector('.answer3');
let btn3 = document.querySelector('.btn3');
function func3() {
    let result = answer3.innerHTML.split('').reverse().join('');
    answer3.innerHTML = result;
}
btn3.onclick = func3;