const outerFun = (a) =>{
    let b = 10;
    const innerFun = () => {
        let sum = a+b;
        console.log(`the sume of a and b is ${sum}`);
    }
    innerFun();

}
outerFun(20);