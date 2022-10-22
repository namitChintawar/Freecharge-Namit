// let rank=['a','b','c','d'];
// for(let ranks in rank){
//     console.log(ranks);
// }
// rank.push('e');
// console.log(rank);
// rank.pop('d');
// console.log(rank);
// rank.reverse();
// console.log(rank);


class Sequence{
    constructor(start=0, end = Infinity, interval = 1){
        this.start=start;
        this.end=end;
        this.interval=interval;
    }

    [Symbol.iterator](){
        let counter=0;
        let nextIndex= this.start;
        return{
            next:() =>{
            if(nextIndex <= this.end){
                let result ={value: nextIndex, done: false}
                nextIndex+= this.interval;
                counter++;
            return result;
                    }
                    return { value : counter, done:true};
        }}
    }
}
let evenNumber = new Sequence(2,10,2);
for (const num in evenNumber){
    console.log(num);
}