function memoize(fn) {
    let cache = {};

    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num];
        }

        console.log('CalculatingNew' + num);
        let result = fn(num);
        cache[num] = result;
        return result;
    }
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));