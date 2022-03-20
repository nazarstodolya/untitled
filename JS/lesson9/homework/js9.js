// Все робити за допомоги js.
// - створити блок,
//- додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону,
//колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div')
console.log(block);
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
block.style.background='red';
block.style.color='silver';
block.style.fontSize='10px';
document.body.appendChild(block.cloneNode(true))

// - Є масив: ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий
//для кожного елементу масиву створює li та додає його до
//блоку .menu
//Завдання робити через цикли.
let array = ['Main','Products','About us','Contacts'];
let script = document.getElementsByClassName('menu')[0];
console.log(script);
for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    li.innerText = array[i];
    script.appendChild(li);
}
//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести
// інформацію про title та monthDuration
// Завдання робити через цикли.
let titleArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const everyArray of titleArray) {
    let div = document.createElement('div')
    div.innerText= `${everyArray.title} - ${everyArray.monthDuration}`;
    document.body.appendChild(div)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
for (const itemArray of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')
    let h1 = document.createElement('h3');
    h1.innerText = itemArray.title;
    h1.classList.add('heading')

    let a = document.createElement('a')
    a.classList.add('description')
    a.innerText = itemArray.monthDuration;

    div.appendChild(h1)
    div.appendChild(a)
    document.body.appendChild(div)
    console.log(div)
}