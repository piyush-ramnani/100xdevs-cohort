/*
Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
*/

const readline = require("readline");

let globalScore = 0; // Global variable to track the overall score

function playGame() {
  let roundScore = 0; // Local variable to track the score for the current round

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Round of questions:
  const questions = ["What is 2 + 1?", "What is 2 + 2?", "What is 2 + 3?"];
  let questionIndex = 0;

  function askQuestion() {
    rl.question(questions[questionIndex], (answer) => {
      if (parseInt(answer) === 2 + (questionIndex + 1)) {
        console.log("Correct!");
        roundScore += 10; //Local variable updated
        console.log(`roundScore: ${roundScore}`);
      } else {
        console.log("Incorrect!");
        console.log(`roundScore: ${roundScore}`);
      }

      questionIndex++;

      if (questionIndex < questions.length) {
        askQuestion();
      } else {
        rl.close();
        displayScores();
      }
    });
  }

  askQuestion();

  function displayScores() {
    // Update the global score based on the round score
    globalScore += roundScore;

    console.log(`Round Score: ${roundScore}`);
    console.log(`Global Score: ${globalScore}`);
  }
}

playGame();

/*
the global variable (globalScore) serves as a container for information that needs to persist across different parts of the program, while the local variable (roundScore) is used to store temporary data specific to the context of the playGame function. This distinction helps manage and organize data effectively, preventing unintended interactions between different parts of the program.
*/
