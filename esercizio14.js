function greet(greeting) {
    return (personName) => `${greeting}, ${personName}`;
};

const greetWithHello = greet('Hello'); // Hello
const greetWithBye = greet('Bye'); // Bye
const greetWithHi = greet('Hi'); // Hi

const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');

console.log(greetPaulWithHello); // Hello, Paul
console.log(greetPaulWithHi); // Hi, Paul
console.log(greetJohnWithBye); // Bye, John
console.log(greetSimonWithHello); // Hello, Simon