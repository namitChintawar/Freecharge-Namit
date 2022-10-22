class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `i am ${this.name} !!!!!`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    // static add(a+b){
    //     return a+b;
    // }

}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision,language,gitHub){
        super(givenName, givenExperience, givenDivision);
        this.language=language;
        this.gitHub=gitHub;
    }
     favlang(){
        if(this.language=='python'){
            return 'Python'
        }
        else{
            return 'Javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
    
    
}

let namit =new Employee("namit",22,"division");
console.log(namit);
console.log(namit.joiningYear());
let rohan = new Programmer("rohan","67","division 323","python","wyuegfgu");
console.log(rohan);
console.log(rohan.favlang());
console.log(Programmer.multiply(42,324));