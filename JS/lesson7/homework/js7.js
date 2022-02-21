//Створити функцію конструктор для об'єктів User з полями
//id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this['id'] = id;
    this['name'] = name;
    this['surname'] = surname;
    this['email'] = email;
    this['phone'] = phone;
}
let user = new User(1, 'Nazar', 'Gorodyskyi', 'gnz@gmail.com', 970100101);
console.log(user);

//створити пустий масив, наповнити його 10 об'єктами new User
let array = [];
array[0] = new User(1, 'qw', 'er', '@', 123);
array[1] = new User(3, 'er', 'ty', '@@', 456);
array[2] = new User(2, 'ty', 'ui', '@@@', 789);
array[3] = new User(4, 'ui', 'sp', '@@@@', 312);
array[4] = new User(9, 'er', 'ty', '@@', 456);
array[5] = new User(8, 'ty', 'ui', '@@@', 789);
array[6] = new User(7, 'ui', 'sp', '@@@@', 212);
array[7] = new User(6, 'er', 'ty', '@@', 456);
array[8] = new User(5, 'ty', 'ui', '@@@', 789);
array[9] = new User(10, 'ui', 'sp', '@@@@', 112);
console.log(array);

//Взяти масив з  User[] з попереднього завдання, та
//відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let filter = array.filter((pair) => {
    if (pair.id % 2 === 0) {
        return pair
    }
});
console.log(filter);

//Взяти масив з  User[] з попереднього завдання, та
//відсортувати його по id. по зростанню (sort)
console.log(array.sort(function (a,b){return a.id - b.id}));

//створити класс для об'єктів Client з полями id, name,
//surname , email, phone, order (поле є масивом зі списком товарів).
//Cтворити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientArray = [];
clientArray[0] = new Client (1, 'qw', 'er', '@', 123, ['red dead redemption 2', 'ps5']);
clientArray[1] = new Client(3, 'er', 'ty', '@@', 456, ['bicycle', 'god of war 2', 'horizon - zero down']);
clientArray[2] = new Client(2, 'ty', 'ui', '@@@', 789, ['laptop', 'fifa 22', 'the last of us 2', 'the last of us']);
clientArray[3] = new Client(4, 'ui', 'sp', '@@@@', 312, ['ps5']);
clientArray[4] = new Client(9, 'er', 'ty', '@@', 456, ['dying light - stay human']);
clientArray[5] = new Client(8, 'ty', 'ui', '@@@', 789, ['computer', 'motorcycle', 'dying light', 'honda accord', 'some useless thing']);
clientArray[6] = new Client(7, 'ui', 'sp', '@@@@', 212, ['porshe cayenne']);
clientArray[7] = new Client(6, 'er', 'ty', '@@', 456, ['jeep cherokee', 'okten web','logos', 'fiogos', 'herogos']);
clientArray[8] = new Client(5, 'ty', 'ui', '@@@', 789, ['ps4']);
clientArray[9] = new Client(10, 'ui', 'sp', '@@@@', 112, ['horizon - forbidden west']);
console.log(clientArray);

//Взяти масив (Client [] з попереднього завдання).Відсортувати
//його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArray.sort(function (a,b){return a.order.length - b.order.length}));
