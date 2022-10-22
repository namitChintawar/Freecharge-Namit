class Person{
    constructor(name,age){
        this.setPerson(name,age);
      
    }
    getPerson(){
        return this.name+ " " + this.age;
    }
    setPerson(newName,newAge){
        newName = newName.trim();
        this.name=newName;
        this.age=newAge;    }
}
let p = new Person('John dow',334);
console.log(typeof p);
console.log(p instanceof Person)
console.log(p);