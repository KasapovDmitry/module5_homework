// ---------------------- Логический тип и ветвление --------------------------//
// Задание 1
// Напишите программу, которая работала будет проверять введенное число
let answer1 = document.querySelector('.answer1');
let input1 = document.querySelector('.input1');
let btn1 = document.querySelector('.btn1');
function func1() {
    let result = +input1.value;
    console.log(result);
    if (result !== 0) {
        if (typeof result === "number") {
            if (isNaN(result)) {
                answer1.innerHTML = 'Упс, кажется, вы ошиблись';
            } else {
                let result1 = result % 2;
            
                if (result1 == 0) {
                    answer1.innerHTML = `Число: "${result}" - чётное`;
                } else {
                    answer1.innerHTML = `Число: "${result}" - нечётное`;
                }
            }
        } else {
            answer1.innerHTML = 'Упс, кажется, вы ошиблись';
        }
    } else {
        answer1.innerHTML = '!!!Введите значение!!!';
    }
    input1.value = '';
}
btn1.onclick = func1;

// Задание 2
// Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число»
let answer2 = document.querySelector('.answer2');
let input2 = document.querySelector('.input2');
let btn2 = document.querySelector('.btn2');
function func2() {
    let result1 = input2.value;
    let result = +input2.value;
    if (result !== 0) {
        if (typeof result === "number") {
            if (isNaN(result)) {
                let noNumber = String(result1);
                console.log(noNumber);
                if (noNumber == "true" || noNumber == "false") {
                    answer2.innerHTML = `"${result1}" - логический тип`;
                } else {
                    answer2.innerHTML = `"${result1}" - строка`;
                }
            } else {
                answer2.innerHTML = `"${result}" - число`;
            }
        } else {
            answer2.innerHTML = 'Упс, кажется, вы ошиблись';
        }
    } else {
        answer2.innerHTML = '!!!Введите значение!!!';
    }
    input2.value = '';
}
btn2.onclick = func2;

// ----------------Строки и цифры --------------------------//
// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let answer3 = document.querySelector('.answer3');
let btn3 = document.querySelector('.btn3');
function func3() {
    let result = answer3.innerHTML.split('').reverse().join('');
    answer3.innerHTML = result;
}
btn3.onclick = func3;

// Задание 4
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
let answer4 = document.querySelector('.answer4');
let btn4 = document.querySelector('.btn4');
function func4() {
    let result = Math.round(Math.random()*100);
    answer4.innerHTML = result;
}
btn4.onclick = func4;

// ---------------- Массивы --------------------------//
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

// ---------------- Циклы --------------------------//
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

// Задание 7
// Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
let answer7 = document.querySelector('.answer7');
let input7 = document.querySelector('.input7');
let btn7 = document.querySelector('.btn7');
let btn71 = document.querySelector('.btn7-1');
let arr7= [];

// Собираем массив
function func7() {
    arr7.push(input7.value);
    input7.value = '';
    console.log(arr7);
}
btn7.onclick = func7;

//Выводим решение
function func71() {
    let num = 0;
    let chet = 0;
    let nechet = 0;
    let nich = 0;
    let minus = 0;
    for (let i = 0; i < arr7.length; i++) {

        if (arr7[i].length !== 0) {

            if(!isNaN(Number(arr7[i]))) {
                console.log(Number(arr7[i]));
                if (Number(arr7[i]) > 0) {

                    num = Number(arr7[i]) % 2;
                    if (num == 1) {
                        nechet++;
                    } else {
                        chet++;
                    }
                } else if (Number(arr7[i]) === 0) {
                    nich++;
                } else {
                    minus++;
                }
            } 
        } else {
            nich++;
        }
    }
    answer7.innerHTML = `В массиве: четных значений - ${chet}, нечетных - ${nechet}, нулевых -  ${nich}, отрицательных - ${minus}`;
}
btn71.onclick = func71;

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





