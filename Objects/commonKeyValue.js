/*
Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.
*/

const obj1 = {
  name: "John",
  age: 27,
  city: "Example City",
  country: "India",
};

const obj2 = {
  name: "Sammi",
  age: 30,
  city: "Bhopal",
  country: "Dubai",
};

function common(obj1, obj2) {
  const newObj = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      newObj[key] = obj1[key];
    }
  }

  return { newObj };
}

console.log(common(obj1, obj2));
