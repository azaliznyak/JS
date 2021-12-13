//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

//  let button=document.getElementById('btn');
// button.onclick=function () {
//     let input1=document.forms.form1.input1.value
//     let input2=document.forms.form1.input2.value
//     let input3=document.forms.form2.input3.value
//     let input4=document.forms.form2.input4.value
//     console.log(input1,input2,input3,input4)
// }
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form=document.forms.form1;
// form.onsubmit=function (e) {
//     e.preventDefault()
//
//     let input1 = +form.rows.value;
//     let input2=+form.columns.value
//     let input3=form.text.value
//     console.log(input1,input2,input3)
//
//     let table=document.createElement('table');
//     document.body.appendChild(table);
//
//     for (let i = 0; i < input1; i++) {
//         let tr= document.createElement('tr');
//         table.appendChild(tr)
//         for (let j = 0; j < input2; j++) {
//             let td=document.createElement('td');
//             tr.appendChild(td);
//             td.innerText=input3
//
//         }
//
//     }
// }
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words=['silly', 'misfit', 'dull']
// let button=document.getElementById('button');
// button.onclick=function () {
//     let input=document.getElementById('input').value
//     for (let word of words) {
//         if (word===input){
//             alert('Inappropriate words')
//         }
//     }
//
// }

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// //
// let words=['silly', 'misfit', 'dull'];
// let button= document.getElementById('button');
// button.onclick=function () {
//     let input=document.getElementById('input').value
//     for (let word of words) {
//         if (word.includes(word)){
//             alert('Inappropriate word in the sentence')
//         }
//     }
// }
