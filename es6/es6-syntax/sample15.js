let person={
    firstname: 'iuwfeni',
    lastName: 'wefjh'
};

// let fname=person.firstname;
// let lname=person.lastName;

// console.log(fname+" "+lname);

let{firstname:fname,lastName:lname}=person;
console.log(fname+" "+lname);

let{firstname,lastName}=person;
console.log(firstname+' '+lastName)