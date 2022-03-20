//створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage
let name1 = document.forms.name1;
name1.onsubmit = function (a) {
    a.preventDefault();
    let nameInput = a.target.username.value;
    let ageInput = a.target.age.value;
    let form = {nameInput, ageInput};
    localStorage.setItem(nameInput, JSON.stringify(form));
};

//створити форму з інпутами для model, type та volume автівки
//при відпарвці форми об'єкти зберігаються в масиві в
//локальному сховищі.
let autoMasyv = JSON.parse(localStorage.getItem('autos')) || [];
document.forms.auto.onsubmit = function (a) {
    a.preventDefault();
    let model = a.target.model.value;
    let type = a.target.type.value;
    let volume = a.target.volume.value;
    let auto = {model, type, volume}
    autoMasyv.push(auto);
    localStorage.setItem('autos', JSON.stringify(autoMasyv));
};