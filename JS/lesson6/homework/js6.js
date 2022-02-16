//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let strng1 = 'hello world';
console.log(strng1.length);
let strng2 = 'lorem ipsum';
console.log('lorem ipsum'.length);
let strng3 = 'javascript is cool';
console.log(strng3.length);

//Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
console.log(str1.toUpperCase());

const str2 = 'lorem ipsum';
console.log(str2.toLocaleUpperCase());

const str3 = 'javascript is cool';
console.log(str3.toUpperCase());

//Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const st1 = 'HELLO WORLD';
console.log(st1.toLowerCase());

const st2 = 'LOREM IPSUM';
console.log(st2.toLowerCase());

const st3 = 'JAVASCRIPT IS COOL';
console.log(st3.toLocaleLowerCase());

//Є "брудна" стрінга let str = ' dirty string   ' .
//Почистити її від зайвих пробілів.
let str = '  dirty string  ';
console.log(str.trim());

//Напишіть функцію stringToarray(str), яка перетворює рядок
//на масив слів.
//let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let strin = 'Каждый охотник желает знать';
function stringToArray (strin) {
    return strin.split(' ');
}
console.log(stringToArray(strin));

//Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//що складається із зазначеної кількості символів.
//let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый
function delete_characters (stri, length) {
    return stri.substring(0, length);
}
let stri = 'Каждый охотник желает знать';
document.write(delete_characters(stri, 7));

//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і
//вставляє тире (-) між словами. При цьому всі символи рядка необхідно
//перевести у верхній регістр.
//let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let string = "HTML JavaScript PHP";
function insert_dash(string) {
    return string.replaceAll(' ', '-').toUpperCase();
}
console.log(insert_dash(string));

//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
//першого символу рядка з нижнього регістру у верхній.
 function registr (argument) {
     return (argument[0]).toUpperCase();
 }

//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне
//слово починається з великої літери.
function capitalize (strOne) {
     return strOne.charAt(0).toUpperCase() + strOne.slice(1);
}
document.write(capitalize('sasha is my family'));