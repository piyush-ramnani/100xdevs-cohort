/*
Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.
*/

const read = require("readline");

const r = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForDelay() {
  return new Promise((resolve) => {
    r.question("Enter the delay you want (in ms): ", (inputA) => {
      var x = inputA;
      resolve(x);
    });
  });
}

function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Prints message after ${x / 1000} sec`);
      resolve();
    }, x);
  });
}

async function asynchronousSimulation() {
  const delayTime = await askForDelay();
  await delay(delayTime);
  r.close();
}

asynchronousSimulation();

/*
Web application that fetches data from an external API and displays it on a webpage. Since fetching data from an API is an asynchronous operation, we need to handle it without blocking the main thread.

NOTE: Promises provide a cleaner and more structured way to handle asynchronous operations, making the code more maintainable and easier to reason about. The async/await syntax builds on top of Promises, offering a more synchronous-like syntax for handling asynchronous code.

SETTIMEOUT()
using setTimeout in a real-world scenario, could be an API request, database query, or any operation that takes time to complete.
*/
