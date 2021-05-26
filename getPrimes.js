// define the getPrimes function
function getPrimes (number) {
    let primes = []

    // loop every number under given parameter from 1
    for (let i = 1; i < number; i++) {
        let factors = []

        // define the factors of that current number that we're looping
        for (let j = number - 1; j > 0; j--) {
            if (i % j === 0) {
                factors.push(j)
            }
        }

        // define wheter it was a prime number or not
        if (factors.length === 2) primes.push(factors[0])
    }
    return primes
}

// calling out the function
console.log(getPrimes(5)); // [2, 3]
console.log(getPrimes(7)); // [2, 3, 5]
console.log(getPrimes(100));