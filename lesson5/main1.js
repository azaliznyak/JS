// Всі функції повинні бути описані стрілочним типом!!!!
//1    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum=(num1,num2,num3)=>{
//    if (num1>num2 && num3>num2){
//        return num2
//    }else if (num2>num3 && num1>num3){
//        return num3
//    }else if (num2>num1 && num3>num1){
//        return num1
//    }
// }
// console.log(minNum(55, 99, 120));

//2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNum=(num1,num2,num3)=>{
//     if (num1>num2 && num1>num3){
//         return num1
//     }else if (num2>num1 && num2>num3){
//         return num2
//     }else if (num3>num1 && num3>num2){
//         return num3
//     }
// }
// console.log(maxNum(77, 90, 89));
//3 - створити функцію яка повертає найбільше число з масиву
// let array =[66,90,890,11,23,44]
// let returnMax=()=>{
//     let max =array[0]
//     for (let arr of array) {
//         if (arr>max){
//             max=arr
//         }
//     }return max
// }
// console.log(returnMax());
//4 - створити функцію яка повертає найменьше число з масиву
// let returnMin=(array)=>{
//     let min=array[0]
//     for (let arr of array) {
//         if (arr<min) {
//             min = arr
//         }
//     }return min
// }
// console.log(returnMin([66, 90, 890, 11, 23, 44]));

//5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array =[66,90,890,11,23,44]
// let sum=()=>{
//     let result =0
//     for (let arr of array) {
//         result = result+arr
//     }return result
// }
//
// console.log(sum());
//6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array =[66,90,890,11,23,44]
// let averageNum=()=>{
//     let result=0
//     for (let arr of array) {
//         result= result+arr
//     } return result/array.length
// }
//
// console.log(averageNum());
//7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbersArr=(numbers)=>{
//     let max = numbers[0]
//     let min = numbers[0]
//     for (const number of numbers) {
//         if (number<min){
//             min=number
//         }else if (number>max){
//             max=number
//         }
//     } console.log(max)
//     return min
//
// }
// console.log(numbersArr([66, 99, 12, 45, 777]));

//8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomNum=()=>{
//     for (let i = 0; i < 100; i++) {
//        let r= Math.round(Math.random()*100)
//         document.write(`<div>${r}</div>`)
//
//     }
// }
// randomNum()

//9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomNum=(limit)=>{
//     for (let i = 0; i < 100; i++) {
//        let r= Math.round(Math.random()*limit)
//         document.write(`<div>${r}</div>`)
//
//     }
// }
// randomNum(20)


//10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array =[66,90,890,11,23,44]
// let viseVersa=()=>{
//     let newArray=[]
//     for (let i =  array.length-1,r=0; i>=0; i--, r++) {
//         const newArrayElement = array[i];
//         newArray[r]=array[i]
//
//     }return newArray
// }
// console.log(viseVersa());