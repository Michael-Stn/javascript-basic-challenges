function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(10));
console.log(isPrimeNumber(15));
console.log(isPrimeNumber(29));