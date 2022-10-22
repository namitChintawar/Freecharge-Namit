// function format(literals,...substitutions){
//     let result=" ";

//     console.log(literals);
//     console.log(substitutions);

//     for(let i=0; i<substitutions.length; i++){
//         result+= literals[i];
//         result+= substitutions[i];
//     }
//     result+= literals[literals.length-1];
// }
// let quantity=9,
// priceEach=8.99,
// result=format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}`

// console.log(result);

// function gs(){
//     return [212,112,4124,12];
// }
// let[x,y,z,a]=gs();
// console.log(x);
// console.log(y);console.log(z);
// console.log(a);

const details={
    name: "namit",
    age: 33,
    hobby:{
        one:'cri',
        two:'foot'
    }
}
let{name,age,hobby}=details;

console.log(`my name is ${name} , i am ${age} and my hobby is playing ${hobby.two}`);
