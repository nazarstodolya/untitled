//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
//який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = prompt('Яка чверть години зараз?');
if (time >= 0 && time <= 14 ) {
    console.log('перша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('друга чверть');
} else if (time >= 30 && time <= 44) {
    console.log('третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('четверта чверть');
} else if (time >59) {
    console.log('Wtf, dude? O_o');
}
//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
//половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let month = prompt('Давай визначимо декаду місяця! Введи число!');
if (month >= 0 && month <= 10) {
    console.log('перша декада місяця');
} else if (month >= 11 && month <= 20) {
    console.log('друга декада місяця');
} else if (month >= 21 && month <= 31) {
    console.log('третя декада місяця');
} else if (month > 31) {
    console.log('нема стільки днів у місяці, чел');
}
//У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше
//виведіть 'Неправильно'. Перевірте роботу скрипта при test, що дорівнює
//true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt ('Напиши слово "вірно"');
if (test === 'вірно') {
    console.log('вірно');
} if (test !== 'вірно') {
    console.log('невірно');
}
//Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть
//'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Введи цифру');
if (a !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}
//Скласти розклад на тиждень за домопоги switch. Користувач вводить
//порядковий номер дня тижня і на екрані відображається інфа що
// заплановано на цей день.
let schedule = prompt('День тижня');
switch (schedule) {
    case '1':
        console.log('okten lecture');
        break;
    case '2':
        console.log('okten homework');
        break;
    case '3':
        console.log('okten classwork');
        break;
    case '4':
        console.log('okten practice');
        break;
    case '5':
        console.log('okten lecture');
        break;
    case '6':
        console.log('lazy day on sofa');
        break;
    case '7':
        console.log('lazy day on cauch');
        break;
}
//Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
//„Яка «офіційна» назва JavaScript?“. Якщо користувач вводить «ECMAScript»
//то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка «офіційна» назва JavaScript?');
if (js === 'ecmascript') {
    alert('Great! You are right!');
} else {
    alert('Do not know? It is "ECMAScript"');
}