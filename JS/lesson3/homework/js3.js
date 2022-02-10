//створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль.
let numerical = [2, 4, 8, 16, 32];
let string = ['two', 'four', 'eight', 'sixteen', 'thirty two'];
let mixed = [2, 'two', true, false, 'sixteen'];
console.log(numerical);
console.log(string);
console.log(mixed)

//Створити пустий масив. Наповнити його будь-якими значеннями
//звертаючись до конкретного індексу. Вивести в консоль
let masyv = [];
masyv[0] = 10;
masyv[1] = 'javascript';
masyv[2] = false;
masyv[3] = 'okten is';
masyv[4] = true;
console.log(masyv)

//За допомогою циклу for і document.write() вивести 10 блоків
//div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>I need to be eager to learn</div>`)
}
//За допомогою циклу for і document.write() вивести 10 блоків
//div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} I need to be very eager to learn</div>`)
}
//За допомогою циклу while вивести в документ 20 блоків
//h1 c довільним текстом всередині.
let h1 = 0;
while (h1 < 20) {
    document.write(`<h1>my goal is to be a great QA</h1>`);
    h1++;
}
//За допомогою циклу while вивести в документ 20 блоків
//h1 c довільним текстом і індексом всередині.
let h = 0;
while (h < 20) {
    document.write(`<h1>${h}Okten is great</h1>`)
h++;
}
//Створити масив з 10 числових елементів. Вивести в консоль
//всі його елементи в циклі.
let masyv2 = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 0];
for (let b = 0; b < masyv2.length; b++) {
    console.log(masyv2[b])
}
//Створити масив з 10 строкрових елементів. Вивести в консоль
//всі його елементи в циклі.
let masyv3 = ['123, 321, 231, 132, 312, 213, 333, 111, 222'];
for (let c = 0; c < masyv3.length; c++) {
    console.log(masyv3[c])
}
//Створити масив з 10 елементів будь-якого типу. Вивести в
// консоль всі його елементи в циклі.
let masyv4 = ['okten is good', true, 123456789, 'okten is not false',
    'great mentors in okten', 'hope they are well paid', 'infinity'];
for (let a = 0; a < masyv4.length; a++) {
    console.log(masyv4[a])
}
//Створити масив з 10 елементів числового, стірчкового i булевого
// типу. За допомогою if та typeof вивести тільки булеві елементи
let masyv5 = ['okten is good', true, 123456789, false, true, 'great mentors in okten', 'hope they are well paid', false];
for (g = 0; g < masyv5.length; g++) {
    if (typeof masyv5[g] === 'boolean') {
        console.log(masyv5[g])
    }
}
//Створити масив з 10 елементів числового, стірчкового і булевого
//типу. За допомогою if та typeof вивести тільки числові елементи
let masyv6 = [123, '123', 231, '231', 312, '312', 111, '111', 222, '333'];
for (d = 0; d < masyv6.length; d++) {
    if (typeof masyv6[d] === 'number') {
        console.log(masyv6[d])
    }
}
//Створити масив з 10 елементів числового, стрічкового і булевого
//типу. За допомогою if та typeof вивести тільки рядкові елементи
let masyv7 = [false, true, 'mentor - give me the best rate', 10, 'true', 'not false, never', 'true'];
for (e = 0; e < masyv7.length; e++) {
    if (typeof masyv7[e] === 'string') {
        console.log(masyv7[e])
    }
}
//Створити порожній масив. Наповнити його 10 елементами
//(різними за типами) через звернення до конкретних індексів.
//Вивести в консоль всі його елементи в циклі.
let empty = [];
empty[0] = 'mentor';
empty[1] = 'give me';
empty[2] = 'the best rate';
empty[3] = 10/10;
empty[4] = true;
empty[5] = 10;
empty[6] = 1;
empty[7] = 'will you, bro?';
empty[8] = 'i knew you will';
empty[9] = false;
for (y = 0; y < empty.length; y++) {
    console.log(empty[y])
}
//Створити цикл for на 10  ітерацій з кроком 1. Вивести
//поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}