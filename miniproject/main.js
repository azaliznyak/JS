fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users =>{
            let usersBox= document.getElementsByClassName('users-box')[0];
            for (let user of users) {
                let json = JSON.stringify(user);

                let pUser=document.createElement('p')
                pUser.innerText=`${user.id} - ${user.name}`
                let detailsBtn= document.createElement('button');
                detailsBtn.innerText='details';
                detailsBtn.classList.add('button')
                // detailsBtn.href = `user-details.html?user=${json}`;
                detailsBtn.onclick = () => {
                    let block = document.querySelector('.users-details');
                    block.classList.add('user-details')
                    block.innerHTML = '';
                    console.log(block);
                    fetch('https://jsonplaceholder.typicode.com/users/' + user.id)
                        .then(response => response.json())
                        .then(value =>  {
                            const {id, name, username, email, phone, address: {city, street}, company: {name : companyName,catchPhrase,bs}, website} = value;
                            block.innerHTML = `
                        <h2>${id}. ${name} ${username}</h2>
                        <ul>
                            <li>Email: ${email}</li>
                            <li>Phone: ${phone}</li>
                        </ul>
                        
                        <ul> Address
                            <li>City: ${city}</li>
                            <li>Street: ${street}</li>
                        </ul>
                        
                        <ul> Company:
                            <li>Company name: ${companyName}</li>
                            <li>Catch Phrase: ${catchPhrase}</li>
                            <li>bs: ${bs}</li>
                        </ul>
                        
                        <a href="user-post.html?user-posts=${id}" class="xxx">Post of current user</a>
`
                        })
                }

                pUser.appendChild(detailsBtn);
                usersBox.appendChild(pUser);
            }
        },
    )
