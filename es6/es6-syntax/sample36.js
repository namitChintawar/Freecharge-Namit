function getUser(callback){
    setTimeout(()=>{
        callback([
            {username: 'john', email:'bgufh@gmail.com'},
            {username: 'jodfrghn', email:'bgufhdf@gmail.com'},
        ]);
    },1000);
}

    function findUser(username,callback){
        getUser((resp)=>{
            const user = resp.find((user)=> user.username=== username);
            callback(user);
        });
    }

    findUser('john',console.log);

    
