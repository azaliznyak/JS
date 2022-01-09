const url = new URL(location).searchParams.get('user');
const user = JSON.parse(url);

console.log(user);

const {id, name, username, email, phone, address: {city, street}, company: {name : companyName,catchPhrase,bs}, website} = user;

const block = document.querySelector('.details-wrap');
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

const x = document.querySelector('.xxx');
console.log(x);