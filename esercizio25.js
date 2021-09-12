const person = {
        set firstName(value) {
            this._firstName = value;
        },
        get firstName() {
            return this._firstName;
        },
        set lastName(value) {
            this._lastName = value;
        },
        get lastName() {
            return this._lastName;
        },
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    //il set serve per cambiarlo, stiamo dando dei parametri, un valore mentre
    // il get non modifica nulla, li riprende, li richiama.
const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins