let success= false;

function getUsers(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            if(success){
                resolve([
                    {username:'john', email:'ewnvd@gmail.com'},
                    {username:'jefohn', email:'ewnvad@gmail.com'}

                ]);
            }else{
                reject('failed to list the user');
            }
        },1000);
    })
}

// const promise = getUsers();
// promise.then((users)=>{
//     console.log(users);
// },(error)=> {
//     console.log(error);
// }
// )

getUsers().then( (users)=> {
    console.log(users);
}).catch((error)=> {
    console.log(error);
}).finally( () => {
    console.log('i am finally block');
});