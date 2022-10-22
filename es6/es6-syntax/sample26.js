class Person{
    constructor(name){
        this._name=name;
    }
     get name(){
         return this._name;
     }
     set name(newName){
         newName=newName.trim();
         this._name=newName;
     }
}

let n = new Person("john");
console.log(n);
n.name="alex";
console.log(n);
