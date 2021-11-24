// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function s(a,b,){
//     return a*b;
// }
// let s1 = s(4,3)
// console.log(s1)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const pi=3.14
// function calculate(a){
//     return pi * a**2
// }
//
// console.log(calculate(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const pi=3.14
// function calculate(a,b){
//     return 2*pi*(a*b)
// }
//
// console.log(calculate(2, 4));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [ 22,'hello', 'phone', 'number']
// function arr(){
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement}</div>`)
//     }
// }
//
// arr()

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createP (text){
//     document.write(`<p>${text}</p>`)
// }
// createP('some text')
//


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createUl('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl(text,quantity){
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl('some text', 10)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array= [ 11,'string', true,22,'hello', false]
// function acceptAr(){
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// acceptAr(array)

//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array =[
//     {
//         name:'Anya',
//         age:17,
//         id:1,
//     },
//     {
//         name: 'Andrey',
//         age: 22,
//         id:2
//     },
//     {
//         name: 'Olya',
//         age: 33,
//         id: 3
//     }
// ]
// function createOb(){
//     for (let arr of array) {
//         document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`)
//     }
// }
// createOb()