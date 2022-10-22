function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=> {
        resolve([
            
                {username: 'john', email:'bgufh@gmail.com'},
                {username: 'jodfrghn', email:'bgufhdf@gmail.com'}
           
            
        ]);
    },1000);
});

}

const promise = getUser();
promise.then((users)=>{
    console.log(users);
})
