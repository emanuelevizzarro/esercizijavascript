function pow(base) {
    return (exponent) => Math.pow(base, exponent);
}
//La funzione Math.pow è usata per cacolare la potenza di un numero, cioè calcolare la base alla potenza di esponente.
const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4)); // 625
console.log(pow5(2)); // 25
console.log(pow5(8)); // 390625