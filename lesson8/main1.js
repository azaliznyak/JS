// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let mainH=document.getElementById('main_header');
// console.log(mainH)
// mainH.classList.add('class')
//

// b) робить шириниу елементу ul 400px
// let list=document.getElementsByTagName('ul');
// console.log(list);
// list[0].style.width='400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let list= document.getElementsByClassName('linkList');
// console.log(list);
// for (let listElement of list) {
//     listElement.style.width='50%';
//     listElement.style.background='silver';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// function listEl2 (text){
//     let list=document.getElementsByClassName('listElement2');
//     list.innerText=text
// return list
// }
//
// console.log(listEl2());

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liElement= document.getElementsByTagName('li');
// for (let li of liElement) {
//     li.style.background='silver'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let aEl=document.getElementsByTagName('a');
// console.log(aEl);
// for (let a of aEl) {
//     a.classList.add('anchor')
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let getA=document.getElementsByTagName('a');
// console.log(getA);
// for (let aElement of getA) {
//     if (aElement.innerText==='link3'){
//         aElement.style.fontSize='40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aEl=document.getElementsByTagName('a');
// console.log(aEl);
// for (let a of aEl) {
//     let classN=a.innerText
//     a.classList.add(classN)
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// console.log(sub);
// for (let subElement of sub) {
//     subElement.style.background=prompt('enter color')
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getSub=document.getElementsByClassName('sub-header');
// console.log(getSub);
// for (let subElement of getSub) {
//     if (subElement.innerText==='content 2 segment'){
//         subElement.style.color=prompt('enter color')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content=document.getElementsByClassName('content_1');
// console.log(content);
// content[0].innerText=prompt('Write sth');
// l) отримати елементи p та змінити їм padding на 20px
// let pElement=document.getElementsByTagName('p');
// console.log(pElement);
// for (const p of pElement) {
//     p.style.padding='20px'
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text=document.getElementsByClassName('text2');
// console.log(text);
// text[0].innerText='sep-2021';