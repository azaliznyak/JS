// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form= document.forms.f1;
// let button=document.getElementById('button');
// form.onclick=function (e) {
//     e.preventDefault();
//     let name= this.name.value;
//     let age=this.age.value;
//     button.onclick=function () {
//
//
//     localStorage.setItem('user', JSON.stringify({name,age}));
// }
// }
//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let form= document.forms.f1;
// let button= document.getElementById('button');
// form.onsubmit=function (e) {
//     e.preventDefault();
//     let model= this.model.value;
//     let type= this.type.value;
//     let volume=this.volume.value;
//
//     localStorage.setItem('cars', JSON.stringify({model,type,volume}));
// }