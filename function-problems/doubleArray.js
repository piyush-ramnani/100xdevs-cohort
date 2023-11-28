/*
Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.
*/

function doubleArray(A, callback) {
  console.log("Array: ", A);

  callback(A);
}

const A = [1, 3, 2, 5, 4, 10];

doubleArray(A, () => {
  let n = A.length;

  for (let i = 0; i < n; i++) {
    A[i] = A[i] * 2;
  }

  console.log("Double Array: ", A);
});
