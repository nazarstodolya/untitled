//Создать произвольный елемент с id = text. Используя
//JavaScript, сделайте так, чтобы при клике на кнопку исчезал
//элемент с id="text".
//Создайте кнопку, при клике на которую, она будет скрывать
//сама себя.
let clik = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    clik.style.display = 'none';
}

//створити інпут який приймає вік людини та кнопку яка
//підтверджує дію.При натисканні на кнопку зчитати
//інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//та повідомити про це користувача
document.getElementById('button1').onclick = function () {
  let age =   document.getElementById('age').value;
    if (age > 18) {
        alert('Welcome');
    } else if (age < 18) {
        alert('You are not welcome');
    } else {
        alert('Answer immediately!');
    }
}

//Создайте меню, которое раскрывается/сворачивается при клике
function someMenu() {
    let menuInfo = document.getElementById('menu-info');
    if (menuInfo.style.display == "block") {
        menuInfo.style.display = "none";
    }
    else {
        menuInfo.style.display = "block";
    }
}

//Создать список комментариев, пример объекта коментария -
//{title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке
//Добавьте каждому комментарию по кнопке для сворачивания его
//body.
let comments = [
    {name: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {name: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {name: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {name: 'lorem', body: 'lorem ipsum dolo sit ameti'},
];