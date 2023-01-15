// ---------------- Ассоциативные массивы --------------------------//
// Задание 8
// Получите ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let answer8 = document.querySelector('.answer8');
let error8 = document.querySelector('.error8');
let input81 = document.querySelector('.input8-1');
let input82 = document.querySelector('.input8-2');
let btn8 = document.querySelector('.btn8');
let btn81 = document.querySelector('.btn8-1');
let newMap = new Map();

// Собираем массив
function func8() {
    let newKey = input81.value;
    let newInf = input82.value;
    if (newKey.length == 0 || newInf.length == 0) {
        error8.innerHTML = "!!!Заполните все поля!!!";
    } else {
        error8.innerHTML = "";
        newMap.set(newKey, newInf);  
        input81.value = '';
        input82.value = '';
        console.log(newMap);
    }
    
}
btn8.onclick = func8;

//Выводим массив
function func81() {
    newMap.forEach((value, key) => {
        answer8.innerHTML += `<li>Ключ - ${key}, значение - ${value}</li>`;
      });
}
btn81.onclick = func81;
