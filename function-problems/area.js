const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function area(l, w) {
  return `Area: ${l * w}`;
}

r.question("Enter length: ", function (userInputA) {
  r.question("Enter width: ", function (userInputB) {
    let l = parseInt(userInputA, 10);
    let w = parseInt(userInputB, 10);

    console.log(area(l, w));

    r.close();
  });
});
