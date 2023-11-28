/*
Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.
*/

function toUppercase(A) {
  let n = A.length;

  const modifiedArray = A.map((el) => el.toUpperCase());

  console.log("Modified Array: ", modifiedArray);
}

const A = ["piyush", "samrat", "sahil"];

toUppercase(A);
