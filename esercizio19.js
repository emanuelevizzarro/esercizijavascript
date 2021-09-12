const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const person2 = person1;


// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';
//In questo esercizio è stata assegnata la stessa proprietà person2 a person1
//quindi se viene modificata la proprietà "firstName" di person2 in "Simon" node esercizio19.js mi dà errore
// perchè entrambi gli oggetti puntano alla stessa proprietà firstName.
console.log(person1);
console.log(person2);