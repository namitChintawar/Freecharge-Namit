const person = {
    firstName: '',
    lastName: '',
    get fullName(){
        return `${person.firstName} ${person.lastName}`

    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

person.fullName ='john wick';
person.fullName='dweui qeuviuq';
person.fullName='efojhe qeijchb';
console.log(person);