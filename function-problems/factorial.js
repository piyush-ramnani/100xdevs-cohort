/*
Question-9:  Write a recursive function to calculate the factorial of a given number.
*/

function factorial(x) {
  if (x == 1) {
    return x;
  } else {
    let y = factorial(x - 1) * x;
    return y;
  }
}

console.log(`Factorial: `, factorial(5));
