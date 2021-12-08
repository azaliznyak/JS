//
//1 - Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n4 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
//
// let nameOf = (name) => {
//       return name
//           .replaceAll('..',' ')
//           .replaceAll('---', ' ')
//           .replaceAll('__', ' ')
//
//
//     }
// console.log(nameOf(n4));


//
//
// 2    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random=()=>{
//     let array= []
//     for (let i = 0; i < 100; i++) {
//
//        let num= Math.round(Math.random()*100)
//         document.write(`<div>${num}</div>`)
//         array.push(num)
//
//     }return array
//
// }
// console.log(random());
// 3- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = [ 22,77,5,3,90]
// let sort= arr.sort((num1,num2)=>{
//     return num1 - num2
// })
// console.log(sort);

//4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filter= arr.filter((item)=>{
//     return item%2===0
// })
// console.log(filter);
//5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//  let map = arr.map((value => {
//      return value + ''
//  }))
// console.log(map);
//6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums= nums.sort((a,b)=>{
//     return a - b
// })
// console.log(sortNums);
// //
//7 - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// let sort= coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration - a.monthDuration
// })
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = coursesAndDurationArray.filter((value)=>{
//     return value.monthDuration>=5
// })
// console.log(filter)