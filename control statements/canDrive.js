/*
Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
*/

const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function canDrive(x) {
  if (x >= 18) {
    return `Can drive!`;
  } else {
    return `Underage, cannot drive!`;
  }
}

r.question("Enter the age of the person: ", function (userInputA) {
  let x = userInputA;

  console.log(canDrive(x));

  r.close();
});
