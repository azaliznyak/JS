/// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array = [ 'golder', 'silver', 'blue', 'white', 'red', 145,167,78,45,98,true,false]
// console.log(array)
// let num=[55,33,66,77,22]
// console.log(num)
// let string=['hello', 'red', 'green', 'black', 'yellow']
// console.log(string)
// //
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array =[]
// array[1]= 22
// array[0]='hello'
// console.log(array)
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=1; i<=10; i++){
//     document.write('<div>welcome</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=1; i<=10; i++){
//     document.write(`<div>number${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=1
// while (i<=20){
//
//     document.write('<h1>hello</h1>')
//     i++
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=1
// while (i<=20){
//     document.write(`<h1>hello my world ${i}</h1>`)
//
//     i++
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array =[22,44,56,23,58,123,90,455,50,111]
//  for (let i=1; i<=20; i++){
//      console.log(array)
//  }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['black','white','red','green','blue','pink','purple','gold','silver','brown']
// for (let arr of array){
//     console.log(array)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array =['hello',55,89,'strong',true,123,'world', 'number', false,77]
// for (let arr of array){
//     console.log(array)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array =['hello',55,89,'strong',true,123,'world', 'number', false,77]
// for (let arr of array){
//     if (typeof arr==='boolean'){
//         console.log(arr)
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array =['hello',55,89,'strong',true,123,'world', 'number', false,77]
// for (let arr of array){
//     if (typeof arr==='string')
//         console.log(arr)
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array =['hello',55,89,'strong',true,123,'world', 'happiness', false, 77]
// for (let arr of array){
//     if (typeof arr ==='number')
//         console.log(arr)
//
//
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array =[]
// array[0]='hello'
// array[1]=55
// array[2]=89
// array[3]='strong'
// array[4]=true
// array[5]=123
// array[6]='world'
// array[7]='number'
// array[8]=false
// array[9]=77
// for (let arr of array){
//     console.log(array)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=1; i<=10; i++){
//     document.write(`<div>Step ${i}</div>`)
//     console.log(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=1;i<=100; i++){
//     document.write(`<div>${i}</div>`)
//     console.log(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=2; i<100; i++){
//     document.write(`<div>${i}</div>`)
//     console.log(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i<=100; i+=2){
//     document.write(`<div>${i}</div>`)
//     console.log(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=1; i<=100; i+=2){
//     document.write(`<div>${i}</div>`)
//     console.log(i)
// }