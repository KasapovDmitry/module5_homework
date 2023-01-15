// Задание 4
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
let answer4 = document.querySelector('.answer4');
let btn4 = document.querySelector('.btn4');
function func4() {
    let result = Math.round(Math.random()*100);
    answer4.innerHTML = result;
}
btn4.onclick = func4;
