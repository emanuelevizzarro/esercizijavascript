class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        this._firstName = name;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(surname) {
        this._lastName = surname;
    }
    get age() {
        return this._age;
    }
    set age(old) {
        this._age = old;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);