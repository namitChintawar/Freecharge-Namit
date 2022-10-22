// let a=101;
// b=221;

// [a,b]=[b,a]
// console.log(a);
// console.log(b);

const stat=(a,b)=>{
    return [
        a+b,
        (a+b/2),
        a-b
    ];
}
let [sum,avg,sub]=stat(121,345);

console.log(`the sum is ${sum}, the avg is ${avg} and the difference is ${sub}`);