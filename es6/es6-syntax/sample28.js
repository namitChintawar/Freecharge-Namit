class Animal{
    constructor(legs){
        this.legs=legs;
    }

    walk(){
        console.log('walking on' + this.legs + 'legs')
    }
}

class Bird extends Animal{
    
    constructor(legs,fle){
        super(legs);
        this.fle=fle;
   
    }

    fly(){
        console.log('flying with' + this.fle + 'wings');
    }
}

let bird = new Bird(2,4);
bird.walk();
bird.fly();