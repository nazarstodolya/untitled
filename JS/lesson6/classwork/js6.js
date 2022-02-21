//Дано список імен.
//Написати функцію, яка приймає будь яке не валідне імя, та
//нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
function normName (name) {
    name
        .replaceAll('..',' ')
        .replaceAll('---',' ')
        .replaceAll('__',' ')
}

//створити функцію, яка генерує масив рандомних числових
//цілих значень в діапазоні від 0 до 100.
function masyv (length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}