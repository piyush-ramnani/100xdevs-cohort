/*
Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
*/

const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function weekdays(x) {
  switch (x) {
    case 1:
      return `Sunday`;
    case 2:
      return `Monday`;
    case 3:
      return `Tuesday`;
    case 4:
      return `Wednesday`;
    case 5:
      return `Thursday`;
    case 6:
      return `Friday`;
    case 7:
      return `Saturday`;
    default:
      return `undefined`;
  }
}

r.question("Enter a number between 1 to 7: ", function (userInput) {
  let x = parseInt(userInput, 10);
  //input is taken as string

  console.log(weekdays(x));

  r.close();
});
