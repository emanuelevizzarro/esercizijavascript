const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

// Print values of person using Object.values

for (let item of Object.values(person)) {
    console.log(item);
}