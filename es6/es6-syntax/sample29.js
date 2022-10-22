// let s = Symbol('');
// console.log(typeof s);

// let firstName=Symbol('first Name'),
// lastName=Symbol('last name');

// console.log(firstName);
// console.log(lastName);

let statuse={
    OPEN: Symbol('open'),
    IN_PROGRESS: Symbol('in progress'),
    COMPLETED: Symbol('completed'),
    HOLD: Symbol('on hold'),
    CANCELED: Symbol('canceled')
};

console.log(statuse.CANCELED);

let status=Symbol('status')
let task={
    [status]: statuse.OPEN,
    description: 'learning'
};
console.log(statuse);
