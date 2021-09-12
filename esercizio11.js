/*const sum = function(a, b) {
    return a + b;
}

const log = function(value) {
    console.log(value);
}

log(sum(2, 5)); */
// Trasformare le due variabili funzione (sum e log) in due arrow functions
const sum = (a, b) => a + b;
const log = (value) =>
    console.log(value);

log(sum(2, 5));