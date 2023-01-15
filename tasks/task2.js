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