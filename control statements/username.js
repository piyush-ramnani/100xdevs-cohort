/*
Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted".
*/

const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function username(x) {
  let l = x.length;
  if (l < 6) {
    return `Username too short!`;
  } else if (l > 15) {
    return `Username too long!`;
  } else {
    return `Username accepted :)`;
  }
}

r.question("Enter the username: ", function (userInputA) {
  let x = userInputA;

  console.log(username(x));

  r.close();
});
