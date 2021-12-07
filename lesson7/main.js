//1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//
// class User {
//     constructor(id,name,surname,email,phone) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone
//
//     }
// }
//
// let array=[
//     new User(1,'olya','popova','olya@asd.com',45678),
//     new User(2,'katya','mykytyn','katya@auio.com',98765),
//     new User(3,'sofi','shev','sofi@asd.com',74278),
//     new User(4,'andrey','zaliz','andrey@asd.com',86722),
//     new User(5,'karina','gritsak','karina@asd.com',78533),
//     new User(6,'oleg','telyk','oleg@asd.com',99572),
//     new User(7,'nastya','keda','nastya@asd.com',93578),
//     new User(8,'marta','sangrit','marta@asd.com',23456),
//     new User(9,'roman','tymchyk','roman@jkl.com',67890),
//     new User(10,'sasha','swarow','sasha@asfd.com',47844),
//
// ]
// console.log(array);
// //
// //2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter((item)=>{
//     return item.id%2===0;
// })
// console.log(filter);
//
// //
// //3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort= array.sort((a,b)=>{
//     return a.id - b.id
// })
// console.log(sort);
//
//4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}
let array= [
    new Client(1,'olya','popova','olya@asd.com',45678,['phone','tv']),
    new Client(2,'katya','mykytyn','katya@auio.com',98765, ['case','perfume']),
    new Client(3,'sofi','shev','sofi@asd.com',74278, ['book', 'pen']),
    new Client(4,'andrey','zaliz','andrey@asd.com',86722, ['ps','cd']),
    new Client(5,'karina','gritsak','karina@asd.com',78533, ['copybook','socks']),
    new Client(6,'oleg','telyk','oleg@asd.com',99572, ['sneakers','suit','skirt']),
    new Client(7,'nastya','keda','nastya@asd.com',93578, ['apartment','sofa']),
    new Client(8,'marta','sangrit','marta@asd.com',23456, ['headphone', 'phone']),
    new Client(9,'roman','tymchyk','roman@jkl.com',67890, ['cosmetics','mirror']),
    new Client(10,'sasha','swarow','sasha@asfd.com',47844, ['shoes', 'dress']),

]
console.log(array);


//5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort=array.sort((a,b)=>{
    return a.order.length - b.order.length
})
console.log(sort);