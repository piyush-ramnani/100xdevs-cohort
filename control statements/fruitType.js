/*
uestion-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
*/

const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

let citrus = ["Orange", "Lemon", "Lime", "Grapefruit", "Tangerine"];
let berries = [
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Cranberry",
];
let tropical = ["Banana", "Pineapple", "Mango", "Papaya", "Kiwi"];

function fruitType(x) {
  switch (true) {
    case citrus.includes(x):
      return `${x} is a Citrus fruit`;
    case berries.includes(x):
      return `${x} is a Berry`;
    case tropical.includes(x):
      return `${x} is a Tropical Fruit`;
  }

  //Using switch (true) allows for a cleaner way to express multiple conditions in a switch case, as each case statement is evaluated independently based on the truthiness of its expression.
}

r.question(
  "Enter the fruit name (starting with a capital letter): ",
  function (userInputA) {
    let x = userInputA;
    console.log(fruitType(x));

    r.close();
  }
);
