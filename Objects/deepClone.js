/*
Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.
*/

function deepClone(original) {
  if (Array.isArray(original)) {
    let cloned = [...original];
  }

  let cloned = {};

  for (const key in original) {
    cloned[key] = original[key];
  }

  cloned.address.city = "Bhopal";

  return cloned;
}

const originalObject = {
  name: "Piyush",
  age: 27,
  address: {
    city: "original city",
    country: "original country",
  },
};

console.log("Original Object", originalObject);

console.log("Changed clone", deepClone(originalObject));

/*
A deep clone of an object refers to creating a new object that is a completely independent copy of the original object, such that changes made to the cloned object do not affect the original, and vice versa. This involves creating copies not only of the top-level properties but also of nested objects and arrays within the original object.
*/
