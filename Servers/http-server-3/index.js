/*
 1. Use JWT to login and retrieve data
 2. The token should be created at the time of login
 3. The token should be verified at the time of data retrieval.
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
const port = 3000;

app.use(express.json());

const ALL_USERS = [
  {
    username: "ramnani.piyush@gmail.com",
    password: "password01",
    name: "Piyush Ramnani",
  },
  {
    username: "gupta.samrat@gmail.com",
    password: "password02",
    name: "Samrat Gupta",
  },
  {
    username: "singla.sahil@gmail.com",
    password: "password03",
    name: "Sahil Singla",
  },
];

function verifyUser(username, password) {
  let user = ALL_USERS.find(
    (u) => u.username === username && u.password === password
  );
  return user;
}

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!verifyUser(username, password)) {
    res.status(401).send({ message: "Invalid Username or Password" });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const authHeader = req.headers.authorization;

  try {
    const decoded = jwt.verify(authHeader, jwtPassword); //returns error on fail
    const username = decoded.username;
    res.json({
      //return all users except the logged in user
      users: ALL_USERS.filter((user) => user.username !== username),
    });
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
