// for(var i=0; i<10; i++){
//     console.log("inside loop:",i);
// }
// console.log("=========")
// console.log("ouside loop:" ,i);

// function welcome(message="hmm"){
//     console.log(message);
// }
//  welcome('Hi');
// welcome("hello");

function addition(x=10,y=20,z=30){
    return x+y+z;
}
console.log(addition());
console.log(addition(20));
console.log(addition(50,10));
