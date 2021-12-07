//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str= 'hello world'
// console.log(str.length);
// let str1='lorem ipsum'
// console.log(str1.length);
// let str2='javascript is cool'
// console.log(str2.length);

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
//3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str.toLowerCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());

//4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let trim=str.trim()
// console.log(trim)
//
//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// // let arr = stringToArray(str);
// // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//  let stringToArray = (str)=>{
//   return str.split(' ')
//  }
// let arr = stringToArray(str);
// console.log(arr);
//
//6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//  let delete_characters=(str,length)=>{
//   return str.substring(0, length);
//  }
// let str = 'Каждый охотник желает знать'
// console.log(delete_characters(str,7));

//
//7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str1 = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash= (str)=>{
//  return str.split(' ').join('-').toUpperCase()
// }
// console.log(insert_dash(str1))


//
//8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//   let upperCase=(value)=>{
//     return value[0].toUpperCase()+ value.slice(1)
//   }
// console.log(upperCase('hello world'));
// //
//
//9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//  let capitalize=(str)=>{
//     return str.toUpperCase()
//  }
// console.log(capitalize('hello world'));