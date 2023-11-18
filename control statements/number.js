/*
Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."
*/

const readline = require("readline");

const r = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function checkFor10(x) {
  if (x > 10) {
    return `greater than 10`;
  } else {
    return `smaller than 10`;
  }
}

r.question("Enter the number: ", function (userInputA) {
  let x = userInputA;
  console.log(checkFor10(x));

  r.close();
});
