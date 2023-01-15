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