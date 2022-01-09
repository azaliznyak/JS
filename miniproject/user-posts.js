const userId = new URL(location).searchParams.get('user-posts');
console.log(userId);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        let postsBox= document.getElementsByClassName('user-posts')[0]
        for (let post of posts) {
            console.log(post);
            let json = JSON.stringify(post);
            console.log(json)
            let pPost=document.createElement('p')
            pPost.classList.add('posts')
            pPost.innerText=`${post.title}  - `
            let postBtn= document.createElement('a');
            postBtn.innerText='details';
            postBtn.classList.add('details')
            postBtn.href = `post-details.html?post-comments=${json}`;

            postsBox.appendChild(pPost);
            pPost.appendChild(postBtn)

        }

    })