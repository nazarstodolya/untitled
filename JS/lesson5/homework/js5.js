//створити функцію яка обчислює та повертає площу прямокутника
let rect = (a, b) => a * b;
console.log(rect(2,4));
document.write('Rectangle area:' + rect(2,4));

//створити функцію яка обчислює та повертає площу кола
let circ = (r) => {
    let radius = r ** 2;
    return 3.14 * radius;
}
console.log(circ(5));
document.write('Circle Area:' + circ(5));

//створити функцію яка обчислює та повертає площу циліндру
let cyl = (r, h) => {
    let pi = 2 * 3.14;
    return pi * r * h;
}
console.log(cyl(3,6));
document.write('Cylinder area:' + cyl(3,6));

//створити функцію яка приймає масив та виводить кожен його
//елемент
let masyv = [2, 4, 8, 'java', 'script', true];
let eachElement = (masyv) => {
    for (let i = 0; i < masyv.length; i++) {
        console.log(masyv[i]);
    }
}
eachElement(masyv);

//створити функцію яка  створює параграф з текстом. Текст
//задати через аргумент
let xxx = (text) => {
document.write(`<p>${text}</p>`);
}
xxx('some paragraph with text');

//створити функцію яка  створює ul з трьома елементами li.
//Текст li задати через аргумент всім однаковий
let yyy = (tripleLi) => {
    document.write(`<ul>`);
    document.write(`<li>${tripleLi}</li>`);
    document.write(`<li>${tripleLi}</li>`);
    document.write(`<li>${tripleLi}</li>`);
    document.write(`</ul>`);
}
yyy('triple li');

//створити функцію яка  створює ul з трьома елементами li.
//Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом,який є числовим
let funct = (boolean, num1) => {
    document.write('<ul>');
    for (let i = 0; i < num1; i++) {
        document.write(`<li>${boolean}</li>`);
    }
    document.write(`</ul>`)
}
funct('false', 3);

//створити функцію яка приймає масив примітивних елементів
//(числа,стрінги,булеві), та будує для них список
let zzz = [1, 2, 'three', 'four', true, false];
let everyElement = (zzz) => {
    for (let i = 0; i < zzz.length; i++);
    document.write(`<li>${zzz}</li>`);
}
everyElement(zzz);

//створити функцію яка приймає масив об'єктів з наступними
//полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.
let array = [{id:101, name:'okten', age:101}, {id:102, name:'web', age:102}, {id:103, name:'school', age:103}];
let everyObject = (array) => {
    for (const item of array) {
        document.write(`<div>${item.id}: ${item.name}: ${item.age}</div>`);
    }
}
everyObject(array);
