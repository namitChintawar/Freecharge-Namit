// function Person(givenName,givenLname){
//     this.name=givenName;
//     this.lname=givenLname;
// }

// Person.prototype.getName=function(){
//     return this.name;
// }

// Person.prototype.getLname=function(){
//     return this.lname;
// }


// var p = new Person("namit");
// console.log(p.getName());

// var p1 = new Person("chin");
// console.log(p1.getLname());


class Person{
    constructor(name){
        this.name=name;
    }

    getname(){
        return this.name;
    }
}

let namit = new Person("john");
console.log(namit.getname());

