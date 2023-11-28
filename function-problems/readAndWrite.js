/*
Question-6:  WAP to perform read and write operation in a text file in JS.
*/

const fs = require("fs");
const read = require("readline");

const r = read.Interface({
  input: process.stdin,
  output: process.stdout,
});

function writeToFile() {
  return new Promise((resolve) => {
    r.question("Enter the content to example.txt file: ", (input) => {
      let content = "" + input;
      fs.writeFileSync("example.txt", content);
      console.log("Written to file successfully!");
      resolve();
    });
  });
}

function readFromFile() {
  return new Promise((resolve) => {
    let content = fs.readFileSync("example.txt", "utf-8");
    console.log("File Content: ", content);
    resolve();
  });
}

async function readAndWrite() {
  await writeToFile();
  await readFromFile();
  r.close();
}

readAndWrite();

/*
Since JavaScript is syncronous in nature, it executes the code line by line, without waiting for any
incoming data or request completion. Therefore, await keyword makes sure we wait for the previous operation
to be completed first.

Example: Try removing await keyword from readAndWrite function, you will see that the read function executes
immediately.

NOTE: Whenever we are accessing data through APIs or DB, always use Async-await
*/
