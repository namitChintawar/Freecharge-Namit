// const getItems = () => {
//     return[10,20];
// }
// let items=getItems();
// console.log(items[2]);

// let thirdItem=items[2] != undefined ? items[2]:0;
// console.log(thirdItem);

const getProfile=()=>{
    return 
    'alex',
    'uhhadyuvb@gmail.com',
    ['srb','rga','srg'];

}

let[
    uname,
    email,
    [
        skill1,
        skill2,
        skill3
    ]
]=getProfile();

console.log(uname,email,skill3);