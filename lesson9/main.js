// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta

// let div= document.createElement('div');
// document.body.appendChild(div);
// div.innerText='hello world';
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background='cornflowerblue';
// div.style.color='red';
// div.style.fontSize='50px';
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let cloneDiv=div.cloneNode(true);
// document.body.appendChild(cloneDiv)
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let array=  ['Main','Products','About us','Contacts'];
// let menu=document.getElementsByClassName('menu')[0];
//     for (let arr of array) {
//         let li= document.createElement('li');
//         menu.appendChild(li);
//         li.innerText=arr
//
//
//
//     }
// console.log(array)
//
// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
//
// for (let element of coursesAndDurationArray) {
//     let div=document.createElement('div');
//     document.body.appendChild(div);
//
//    div.innerText=`${element.title}, ${element.monthDuration}`
//
//
// }

// //
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (let element of coursesAndDurationArray) {
//     let div=document.createElement('div');
//     document.body.appendChild(div);
//     div.classList.add('item');
//
//     let h1=document.createElement('h1');
//     document.body.appendChild(h1);
//     h1.classList.add('heading');
//     h1.innerText=`${element.title}`;
//
//     let p = document.createElement('p');
//     document.body.appendChild(p);
//     p.classList.add('description')
//     p.innerText=`${element.monthDuration}`
// }
//
//
