function getUser(){
    return[
        {username:'john', email:'jeaaujnc@gmail.com'},
        {username:'jogdhn', email:'jessvaaujnc@gmail.com'},

    ]
}

function findUser(username){
    const users = getUser();
    const user =users.find((user)=> user.username===username);
    return user;
}

console.log(findUser('john'));