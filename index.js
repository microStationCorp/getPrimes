export function isPrime(num) {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
export function primeInBetween(min, max) {
    let primes = [];
    for (let i = min; i <= max; i++) {
        isPrime(i) ? primes.push(i) : null;
    }
    return primes;
}