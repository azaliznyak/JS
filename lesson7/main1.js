//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, factory,year,maxspeed,volume) {
//         this.model=model;
//         this.factory=factory;
//         this.year=year;
//         this.maxspeed=maxspeed;
//         this.volume=volume
//     }
//     drive (){
//         return `їдемо зі швидкістю ${this.maxspeed}  на годину`
//
// }
//
//     info(){
//         return `модель - ${this.model}, виробник - ${this.factory}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.volume}  `
//     }
//     increaseMaxSpeed (newSpeed){
//         return this.maxspeed + newSpeed
//     }
//
//     changeYear (newValue){
//         return this.year = newValue
//     }
//     addDriver (driver){
//         return this.driver= driver
//     }
//
// }
//

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, factory,year,maxspeed,volume){
//            this.model=model;
//            this.factory=factory;
//            this.year=year;
//            this.maxspeed=maxspeed;
//            this.volume=volume
//     this.drive= function () {
//         return `їдемо зі швидкістю ${this.maxspeed}  на годину`
//     }
//     this.info=function () {
//         return `модель - ${this.model}, виробник - ${this.factory}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.volume} `
//     }
//     this.increaseMaxSpeed= function (newSpeed){
//         return this.maxspeed + newSpeed
//     }
//     this.changeYear=function (newValue){
//         return this.year = newValue
//     }
//     this.addDriver=function (driver){
//         return this.driver= driver
//     }
// }

// let ca1 = new Car('Mercedes', 'Germany', 2020, 250, 2.9);
// console.log(ca1);
// console.log(ca1.drive());
// console.log(ca1.info());
// ca1.increaseMaxSpeed(300);
// ca1.changeYear(2021);
// ca1.addDriver('Jay')
// console.log(ca1)


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//
// class Cinderella{
//     constructor(name,age,footsize) {
//         this.name= name;
//         this.age= age;
//         this.footsize=footsize
//     }
// }
//
// let array = [
//     new Cinderella('anna', 55, 41),
//     new Cinderella('sofi', 21, 37),
//     new Cinderella('natalya', 24, 45),
//     new Cinderella('olya', 26, 33),
//     new Cinderella('nastya', 29, 38),
//     new Cinderella('olesya', 90, 47),
//     new Cinderella('mila', 87, 39),
//     new Cinderella('marta', 34, 40),
// ];
// console.log(array);
//
// class Prince{
//     constructor(name,age,shoes) {
//         this.name=name;
//         this.age= age;
//         this.shoes=shoes
//     }
// }
//
// let prince=new Prince('Harold', 25,37)
//
//
// let findCinderella=()=>{
//     for (let cinderella of array) {
//         if (cinderella.footsize===prince.shoes){
//             return ` You find ${cinderella.name}`
//
//         }
//     }
// }
// console.log(findCinderella());
//
//
// // let arrayFind= array.find((value)=>{
// //     return value.footsize===prince.shoes
// // })
// // console.log(arrayFind)
//
//
