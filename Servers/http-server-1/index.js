//Create a simple server that listens to a port

const express = require("express");

const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
