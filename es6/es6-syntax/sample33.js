// let info=()=>{
//     const log=console.log;
//     log("I");
//     log("sam learning");
//     log("Web app dev");
   
// }
// info();

// function* generate(){
//     const log=console.log;
//     log("invoked first!!");
//     yield 1;

//     log("invoked second!!");
//     yield 2;
//     for(let yel in yield){
//         log(yel);
//     }
// }


// let gen=generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
function* numGen(){
    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;

    while(true){
        yield i++;
    }


}

const gen= numGen();
const log=console.log;
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
l