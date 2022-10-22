// function sum(...arg){
//     let total = 0;
//     for(const a of arg){
//         total+=a
//     }
//     return total;
// }
// var res =sum(31,314,35,2,32,857,685);
// console.log(res);

function sum(...args){
    return args.filter(function(e){
        return typeof e === 'string';
    })
        .reduce(function(prev,curr){
            console.log(prev+ " " +curr)
            return prev + curr;
        })
        

}
let res = sum(20,'svvsd',232,'wryj',802);
        console.log(res);