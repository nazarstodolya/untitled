// let max = +prompt ('введіть перше число);
// let min = +prompt ('введіть друге число');
// if (max > 2) {
//     console.log('Два це - максимальне число');
// } else if (max < 2) {
//     console.log('Це не максимальне число');
// } else if (max === 2) {
//     console.log('Це рівне число');
// } else if (max < 2) {
//     alert('Не існує');
// }
//У першому під'їзді квартири з 1 до 20. У другому з 21 по 48
//У третьому з 49 по 90. Користувач вводить номер квартири
//просто в змінні або через prompt(''). Програма повинна
//зазначити, в якому під'їзді знаходиться дана квартира.

let first = +prompt ('В якому підїзді дана квартира?');
if (first >= 1 && first <= 20) {
    console.log('перший підїзд');
} else if (first >= 21 && first <= 48) {
    console.log('другий підїзд');
} else if (first >= 49 && first <= 90) {
    console.log('третій підїзд');
} else if (first > 90) {
    console.log('не існує стільки квартир');
}
//Ми маємо змінну number в яку користувач задає числове
//значення, якщо змінна рівна 10 вивести повідомлення ВІРНО,
//якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt ('введіть число від о до 10');
if (number === 10) {
    alert('вірно');
} else {
    alert('невірно');
}
// тернальний оператор//
number === 10 ? alert('вірно'): alert('невірно');

//маємо змінну x в яку користувач задає значення,якщо в змінну
// записане число, вивести 1, якщо в змінну записали стрінгу
// вивести 2, якщо булеве значення - 3, якщо об'єкт або масив
// - 3. якщо в змінну записали щось інше, спрацьовує else.
let x = undefined;
    if (typeof x === 'number') {
    console.log(1);
} else if (typeof x === 'string') {
        console.log(2);
} else if (typeof x === 'boolean') {
        console.log(3);
} else if (typeof x === 'object') {
        console.log(4);
} else {
        console.log('warning');
    }
