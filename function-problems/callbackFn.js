/*
Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.
*/

function outer(A, callback) {
  //---(1)
  console.log("Original Array: ", A);

  callback(A); //---(2)
}

const myArray = ["item1", "item2", "item3"];

outer(myArray, (A) => {
  //---(3)
  let n = A.length;

  for (let i = 0; i < n; i++) {
    A[i] = A[i] + "modified";
  }
  console.log("callback function executed!");
  console.log(myArray);
});

/* --NOTES--
1. the 'outer' function would not take an arrow function as a parameter directly.
2. the function perimiter should be called in the 'outer function'
3. arrow function would be taken as argument when calling the 'outer' function.
*/
