const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function baseToExponent(base, exponent) {
  let result = Math.pow(base, exponent);
  let view = `${base} ^ ${exponent}`;

  return `${view} : ${result}`;
}

r.question("Enter the base: ", function (inputA) {
  r.question("Enter the exponent: ", function (inputB) {
    let base = inputA;
    let exponent = inputB;

    console.log(baseToExponent(base, exponent));

    r.close();
  });
});
