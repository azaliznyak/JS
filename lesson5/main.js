// Всі функції повинні бути описані стрілочним типом!!!!
// 1    - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s= (length, width)=>{
//     return length*width
// }
// console.log(s(22, 5));
// 2- створити функцію яка обчислює та повертає площу кола
// const p=3.14
// let s = (r)=>{
//     return p*r**2
// }
// console.log(s(3));
// 3- створити функцію яка обчислює та повертає площу циліндру
// const p= 3.14
// let s=(r,h)=>{
//     return 2*p*r*h
// }
// console.log(s(3, 4));
// 4- створити функцію яка приймає масив та виводить кожен його елемент
// let array = [ 22,'hello', 'phone', 'number']
// let arr=()=>{
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement}</div>`)
//     }
// }
// arr()

// 5- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let createP=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// createP(`hello world`)
// 6- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createElementLi=(text)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createElementLi(`Express publishing`)
// 7- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createElementLi=(text,number)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// createElementLi(`hello`,3)
// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array= [ 34,'hello', true,88,'okten', false]
// let listOfSth=()=>{
//     document.write(`<ol>`)
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// listOfSth()
// //
// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users =[
//     {
//         name:'Tanya',
//         age:18,
//         id:1,
//     },
//     {
//         name: 'Andrey',
//         age: 88,
//         id:2
//     },
//     {
//         name: 'Ann',
//         age: 33,
//         id: 3
//     }
// ]
//
// let takeArr=()=>{
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// takeArr()