//Напишіть код,  котрий:

//отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);

//отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules);

//замініть текст параграфа з id 'content' на будь-який інший
let contentChange = content.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.'
console.log(contentChange);

//замініть текст параграфа з id 'rules' на будь-який інший
let rulesChange = rules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
console.log(rulesChange);

//змініть кожному елементу колір фону на червоний
let color = document.body.children;
for (let red of color) {
    red.style.background = 'silver'
};

//змініть кожному елементу колір тексту на синій
let blueColor = document.body.children;
for (let blue of blueColor) {
    blue.style.color = 'blue';
}

//отримати весь список класів елемента з id=rules і вивести
//їх в console.log
let clas = document.getElementById('rules');
console.log(clas.classList);

//поміняти колір тексту у всіх елементів fc_rules на червоний
let redRules = document.getElementsByClassName('fc_rules');
for (let redColor of redRules) {
    redColor.style.color = 'red';
}