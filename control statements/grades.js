/*
Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
*/

const readline = require("readline");

const r = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function grades(Arr) {
  let n = Arr.length;

  for (let i = 0; i < n; i++) {
    if (Arr[i] >= 90 && Arr[i] <= 100) {
      console.log(`Subject ${i + 1}: A`);
    } else {
      console.log(`Subject ${i + 1}: B`);
    }
  }
}

r.question("Enter the array of Marks: ", function (userInputA) {
  let Arr = userInputA.split(" ");
  console.log(Arr);

  console.log(grades(Arr));

  r.close();
});
