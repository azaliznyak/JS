// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let text=document.getElementById('text');
// let button=document.getElementById('button');
// button.onclick= function () {
//     text.style.display='none'
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let button1= document.getElementById('button1')
// button1.onclick= function () {
//     button1.style.display='none'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form=document.forms.check;
// form.onsubmit=function (e) {
// e.preventDefault();
// if (this.age<18){
//     alert('The user is not 18 years old')
// }else {
//     alert('The user has 18 yers old')
// }
// }

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu=document.getElementsByClassName('menu')[0];
// menu.onclick=function () {
//     this.classList.toggle('hide')
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

// let comments=[
//     {title: 'phrase1', body:'Hello everyone'},
//     {title: 'phrase2', body:'what is wrong?'},
//     {title: 'phrase3', body:'never mind'}
//
// ]
// for (let comment of comments) {
//     let div= document.createElement('div');
//     document.body.appendChild(div);
//     let title= document.createElement('h1')
//     document.body.appendChild(title);
//     title.innerText=comment.title
//     let body=document.createElement('div')
//     document.body.appendChild(body)
//     body.innerText=comment.body
//
//     let button=document.createElement('button');
//     document.body.appendChild(button)
//     button.innerText='hide';
//
//     button.onclick=function () {
//         body.classList.toggle('hide')
//     }
//
//
//
// }