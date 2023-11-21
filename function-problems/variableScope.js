/*
Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
*/

const readline = require("readline");

// Global variable to track the overall score

function playGame() {
  let globalScore = 0;
  // Function with local variable to track the score for the current round

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Round of questions:
  const questions = ["What is 2 + 1?", "What is 2 + 2?", "What is 2 + 3?"];
  let questionIndex = 0;

  function askQuestion() {
    let roundScore = 0;
    rl.question(questions[questionIndex], (answer) => {
      if (parseInt(answer) === 2 + (questionIndex + 1)) {
        console.log("Correct!");
        roundScore += 10; //Local variable updated
        console.log(`Round Score: ${roundScore}`);
      } else {
        console.log("Incorrect!");
        console.log(`Round score ${roundScore}`);
      }

      questionIndex++;
      globalScore += roundScore;

      if (questionIndex < questions.length) {
        askQuestion();
      } else {
        displayScores();
        rl.close();
      }
    });
  }

  askQuestion();

  function displayScores() {
    // function with global variable to keep track of overall score
    console.log(`Global Score: ${globalScore}`);
  }
}

playGame();

/*
the global variable (globalScore) serves as a container for information that needs to persist across different parts of the program, while the local variable (roundScore) is used to store temporary data specific to the context of the playGame function. This distinction helps manage and organize data effectively, preventing unintended interactions between different parts of the program.
*/
