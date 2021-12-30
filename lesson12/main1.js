// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
    .then(posts=>{
        console.log(posts)
        for (let post of posts) {
            let div=document.createElement('div');
            document.body.appendChild(div)
            div.innerText=`${post.id} ${post.title} ${post.body}`



            let button = document.createElement('button');
            document.body.appendChild(button)
            button.innerText = 'click';
            button.onclick=function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                         let commentsWrap=document.createElement('div');
                         div.appendChild(commentsWrap);
                        for (let comment of value) {
                            let commentDiv=document.createElement('div');
                            commentDiv.innerText=comment.body;
                            div.appendChild(commentDiv)

                        }
                    })
            }





        }
    })