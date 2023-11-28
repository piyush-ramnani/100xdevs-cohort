/*
Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.
*/

function oddArray(A, callback) {
  console.log("Array: ", A);

  callback(A);
}

const A = [1, 3, 4, 2, 6, 5, 7, 4, 3, 5, 34, 7];

oddArray(A, () => {
  let n = A.length;

  let oddArray = [];

  for (let i = 0; i < n; i++) {
    if (A[i] % 2 != 0) {
      oddArray.push(A[i]);
    }
  }

  console.log("Odd array: ", oddArray);
});

/*
Modifying Array Length Inside Loop:

    if Array.pop() method is used inside the loop, which modifies the length of the array. This can lead to unexpected results and skipping elements.
*/
