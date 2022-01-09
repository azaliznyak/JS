const postId = new URL(location).searchParams.get('post-comments');
console.log(postId);
const {id} = JSON.parse(postId);
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let commentsBox= document.getElementsByClassName('user-comments')[0];
        for (const comment of comments) {
            let json = JSON.stringify(comment);
            console.log(json);
            let pComment=document.createElement('p')
            pComment.classList.add('postComments')
            pComment.innerText=`${comment.postId} ${comment.id} ${comment.name} ${comment.email} ${comment.body}`
            commentsBox.appendChild(pComment)
        }

    })
