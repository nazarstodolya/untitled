//створити функцію яка обчислює та повертає площу
// прямокутника зі сторонами а і б
function rectangle(a, b) {
return a * b;
}
console.log(rectangle(2,4))

//створити функцію яка обчислює та повертає площу кола з
// радіусом r
function square (r) {
    let a = r**2;
    let b = Math.PI*a;
    return b;
}
console.log(square(5))

//створити функцію яка обчислює та повертає площу циліндру
//висотою h, та радіутом r
function cylinder (h,r) {
    let squareCylinder = 2**3.14 * h * r;
    return squareCylinder;
}
console.log(cylinder(5,2))

//створити функцію яка приймає масив та виводить кожен
//його елемент
let mas = [1,2,3,4,5,6,7,8];
function every (mas) {
    for (const every of mas) {
        console.log(every);
    }
}
every(mas)//iніціалізація змінної

//створити функцію яка створює параграф з текстом.
//Текст задати через аргумент
function xxx (text) {
    console.log(`<p>${text}</p>`);
    document.write(`<h2>${text}</h2>`);
}
xxx('Why JS is so hard?');
xxx ('Cuz you are not so good as JS')

//створити функцію яка створює ul з трьома елементами li.
//Текст li задати через аргумент всім однаковий
function yyy (message) {
    document.write(`<ul>`);
    document.write(`<li>${message}</li>`);
    document.write(`<li>${message}</li>`);
    document.write(`<li>${message}</li>`);
    document.write(`</ul>`);
}
yyy('Best text ever');
yyy('Worst text ever')

//створити функцію яка створює ul з трьома елементами li.
//Текст li задати через аргумент всім однаковий. Кількість
//li визначається другим аргументом, який є числовим
//(тут використовувати цикл)
function zzz(msg, three) {
    document.write('<ul>');
    for (let i = 0; i < three; i++) {
        document.write(`<li>${msg}</li>`);
    }
    document.write(`</ul>`)
}
zzz('message', 3)

//створити функцію яка приймає масив примітивних елементів
//(числа,стрінги,булеві), та будує для них список
let aaa = [1, 2, 'three', 'four', true, false];
function array (arr) {
   document.write('<ul>')
    for (let d = 0; d < arr.length; d++) {
    document.write(`<li>${arr}</li>`);
    }
    document.write('</ul>');
}
array (aaa)

//створити функцію яка приймає масив об'єктів з наступними
//полями id, name, age,та виведіть їх в документ.
//Для кожного об'єкту окремий блок.
let bigArray = [{id:101, name:'okten', age:101}, {id:102, name:'web', age:102}, {id:103, name:'school', age:103}];
function masyv (bigArr) {
    for (const item of bigArr) {
        document.write(`<div>${item.id}: ${item.name}: ${item.age}</div>`);
    }
}
masyv(bigArray)
