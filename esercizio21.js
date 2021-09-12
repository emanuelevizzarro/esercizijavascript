const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: {
        state: 'Italy',
        region: 'Lazio',
        city: 'Rome'
    }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
const person2 = JSON.parse(JSON.stringify(person1));
//Con questo codice andiamo a convertire l'oggetto originale in una stringa JSON e poi lo ritrasformiamo in oggetto,
// creando una copia profonda. In questo modo non dovremo più preoccuparci che la nostra variabile punti all'indirizzo sbagliato.
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';


console.log(person1);
console.log(person2);