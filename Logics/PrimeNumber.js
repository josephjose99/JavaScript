function getPrimesUpTo(max) {
  const primes = [];

  for (let num = 2; num <= max; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}

// Example usage
const primeNumbers = getPrimesUpTo(50);
console.log(primeNumbers);
