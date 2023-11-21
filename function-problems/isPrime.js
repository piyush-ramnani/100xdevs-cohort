const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(num) {
  if (num < 2) {
    return `${num} is not Prime`;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not Prime`;
    }
  }

  return `${num} is Prime!`;
}

r.question("Enter the number to check: ", function (inputA) {
  let num = inputA;

  console.log(isPrime(num));

  r.close();
});

/*
By checking divisibility up to the square root, you can efficiently determine whether a number is prime without unnecessary iterations. For example: Let's take a prime number, 23. The square root of 23 is approximately 4.8. We only need to check up to 4.
*/
