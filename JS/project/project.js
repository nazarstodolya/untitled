let usersBlock = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userInf of value) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user');
            let content = document.createElement('a');
            content.innerText = `${userInf.id} - ${userInf.name}`;
            content.href = `./user-details.html?data=${JSON.stringify(userInf)}`;
            userBlock.appendChild(content);
            usersBlock.appendChild(userBlock);
        }
    });