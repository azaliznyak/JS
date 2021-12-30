// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
let postWrap = document.getElementsByClassName('posts')[0]
fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
    .then(posts=>{
        console.log(posts)
        for (let post of posts) {
            let divP=document.createElement('div');
            divP.classList.add('post');

            postWrap.appendChild(divP)

            let postId=document.createElement('div');
            postId.innerText=`${post.id}`;

            let postUserId=document.createElement('div');
            postUserId.innerText=`${post.userId}`

            let postTitle= document.createElement('div');
            postTitle.innerText=`${post.title}`;

            let postBody=document.createElement('div');
            postBody.innerText=`${post.body}`

            divP.append(postId,postUserId,postTitle,postBody)




        }
    })





//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// let commentsD= document.getElementsByClassName('comments')[0]
//
// fetch(` https://jsonplaceholder.typicode.com/comments`).then(value => value.json())
// .then(comments=>{
//     console.log(comments)
//     for (const comment of comments) {
//         let div= document.createElement('div');
//         div.classList.add('comment');
//         commentsD.appendChild(div)
//
//         let commentsPostId=document.createElement('div');
//             commentsPostId.innerText=`${comment.postId}`;
//
//             let commentsId=document.createElement('div');
//             commentsId.innerText=`${comment.id}`
//
//             let commentsName= document.createElement('div');
//             commentsName.innerText=`${comment.name}`;
//
//             let commentsEmail= document.createElement('div');
//             commentsEmail.innerText=`${comment.email}`
//
//             let commentsBody=document.createElement('div');
//             commentsBody.innerText=`${comment.body}`
//
//         div.append(commentsPostId,commentsId,commentsName,commentsEmail,commentsBody)
//     }
// })