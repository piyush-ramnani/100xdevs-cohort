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

/*
    forEach((el)=>{el = el.toUpperCase()}) wouldn't work here. 
    Each element is converted to uppercase within the callback function, but these changes are not reflected outside of the callback. Therefore we need to map the elements to a new array.

    NOTE: A normal for loop used to iterate over an array and modify its elements will not inherently modify the original array if you're working with primitive values like STRINGS or NUMBERS. In JavaScript, primitive values are passed by value, so modifying the loop variable inside the loop doesn't affect the original array elements.
*/
