// function createUser  (name,age) {
// return{
//     name:name,
//     age:age
// };
// }
// var obj= createUser("ioah",23)
// console.log(obj.name+" "+obj.age);

let server={
    name : "server",
    // restart: function(){
    //     console.log("the"+ this.name+ "is restarting");
    // }

    restart(){
        console.log("the"+ this.name+ "is restarting");
    },
    'restart2'(){
        console.log("the"+ this.name+ "is starting");
    }
    
}
server.restart();
server['restart2']();