// n any factorization of n, at least one of the factors must be less than or equal to the square root of n

// * An integer is prime if it is not divisible by any prime less than or equal to its square root

function isPrime(n) {
  if (n < 2) return false;

  if (n === 2) return true;

  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  console.log(i, "is", isPrime(i) ? "prime" : "Not prime");
}
