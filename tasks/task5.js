// Задание 5
// Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let answer5 = document.querySelector('.answer5');
let input5 = document.querySelector('.input5');
let btn5 = document.querySelector('.btn5');
let btn51 = document.querySelector('.btn5-1');
let cards = document.querySelector('.elements5');
let arr5 = [];

// Собираем массив
function func5() {
    arr5.push(input5.value);
    input5.value = '';
    //console.log(arr5);
}
btn5.onclick = func5;

//Выводим массив
function func51() {
    answer5.innerHTML = `Элементов в массиве:  ${arr5.length}`;
    for (let i = 0; i < arr5.length; i++) {
        cards.innerHTML += `<li class="card">${arr5[i]} </li>`;
    }
}
btn51.onclick = func51;