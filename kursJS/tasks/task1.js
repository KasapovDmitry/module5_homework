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