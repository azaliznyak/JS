//1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function acceptNum(a,b,c){
//     if (a > b && c > b ){
//         return b
//     }else if (b > a && c > a){
//         return a
//     }else if (a > c && b > c){
//         return c
//     }
// }
//
// console.log(acceptNum(33, 12, 65));


//2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function acceptNum(a,b,c){
//     if (a > c && a > b){
//         return a;
//     }else if (c > b && c > a){
//         return c;
//     }else if (b > a && b > c){
//         return b
//     }
// }
//
// console.log(acceptNum(44, 7, 111));

// //3 - створити функцію яка повертає найбільше число з масиву
// let array =[ 33,5,66,234,55,7]
// function maxNum(){
// let max= array[0]
//     for (let arr of array) {
//         if (arr>max){
//             max=arr;
//         }
//     }
//     return max
// }
// console.log(maxNum())
//4 - створити функцію яка повертає найменьше число з масиву
// function minNum(){
//     let min= array[0]
//     for (let arr of array) {
//         if (arr<min){
//             min=arr
//         }
//     }
//     return min
// }
//
// console.log(minNum());

//5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array =[ 33,5,66,234,55,7]
// function sum(){
//     let result = 0
//     for (let arr of array) {
//         result=result+arr;
//     }
//     return result
// }
//
// console.log(sum());

//6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array =[ 33,5,66,234,55,7]
// function averageArr(){
//     let result=0
//     for (let arr of array) {
//         result= result+arr
//     }
//     return result/array.length
// }
//
// console.log(averageArr());
//7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array =[ 33,5,66,234,55,7]
// function minMax(array){
//     let max = array[0];
//     let min = array[0];
//     for (let num of array) {
//         if (num> max){
//             max=num
//         }
//         if (num<min){
//             min=num
//         }
//     }
//     console.log(max)
//     return min
// }
// minMax( [ 33,5,66,234,55,7])

//8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomNum(){
//     for (let i = 0; i <100; i++) {
//         let r = Math.round(Math.random()*100)
//         document.write(`<div>${r}</div>`)
//
//     }
//
// }
// randomNum()

//9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomizer(limit){
//     for (let i = 0; i < 100; i++) {
//         let r = Math.round(Math.random()*limit)
//         document.write(`<div>${r}</div>`)
//     }
// }
// randomizer(500)

//10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array =[ 33,5,66,234,55,7]
// function viseVersa(){
//     let newArray=[]
//     for (let i = array.length - 1, r=0; i >= 0; i--, r++) {
//         const newArrayElement = array[i];
//         newArray[r]=array[i]
//     }
//     return newArray
//
//     }
//
// console.log(viseVersa());
//
//
//

