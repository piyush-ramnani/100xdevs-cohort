/*
--PROBLEM STATEMENT--
1. DB should have 2 collections: Users and Cars 
2. User should be able to register and Login in the DB 
3. Logged in user should get a token for authorization
4. Authorized user should get all cars
5. Only authorized users can add, edit or delete cars
6. Car collection has fields: model, brand, year, price
7. Only authorized user can fetch cars by its year.
8. Write test cases for each APIs in jest.
*/

//--PACKAGES--
const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const jwtPassword = "123456";
const app = express();
app.use(express.json());

//--DB CONNECTION--
mongoose.connect(
  "mongodb+srv://admin:02041996@practisecluster.agvl9l9.mongodb.net/userData_test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//--SCHEMA : MongoDB--
const CarSchema = mongoose.Schema({
  model: String,
  brand: String,
  year: Number,
  price: Number,
});

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", UserSchema);
const Cars = mongoose.model("Cars", CarSchema);

//--INPUT VALIDATION : ZOD--
const InputValidationUsers = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const InputValidationCars = z.object({
  model: z.string(),
  brand: z.string().min(2),
  year: z.number(),
  price: z.number(),
});

//--MIDDLEWARES--
function CarsValidationMiddleware(req, res, next) {
  const userInput = req.body;

  try {
    const validatedInput = InputValidationCars.parse(userInput);
    console.log(validatedInput);
    req.validatedInput = validatedInput;
    next();
  } catch (error) {
    res.status(404).json({ error: "Invalid car details" });
  }
}

function UserValidationMiddleware(req, res, next) {
  const userInput = req.body;

  try {
    const validatedInput = InputValidationUsers.parse(userInput);
    req.validatedInput = validatedInput;
    next();
  } catch (err) {
    res.status(404).json({ error: "Invalid user details" });
  }
}

function tokenValidationMiddleware(req, res, next) {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({
      error: "Please provide Auth token so that we know you are logged in!",
    });
  }

  try {
    const authorizedUser = jwt.verify(token, jwtPassword);
    if (authorizedUser) {
      next();
    }
  } catch (error) {
    return res
      .status(403)
      .send({ error: "Invalid token. You shall not pass :'(" });
  }
}

//--POST: USER REGISTRATION--
app.post("/registerUser", UserValidationMiddleware, async (req, res) => {
  let { name, email, password } = req.validatedInput;

  try {
    let user = await Users.findOne({ email });
    if (user) {
      return res.status(409).send("Email already in use");
    } else {
      await new Users({ name, email, password }).save();
      res.status(200).json({ message: "User registred in DB" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error saving the user in DB" });
  }
});

//--POST: USER LOGIN & JWT TOKEN--
app.post("/login", UserValidationMiddleware, async (req, res) => {
  let { email, password } = req.validatedInput;

  try {
    const user = await Users.findOne({ email });
    if (user && user.password === String(password)) {
      var token = jwt.sign({ email: email }, jwtPassword);
      res.status(200).json({ token });
    } else {
      res
        .status(404)
        .json({ message: "User not found or Invalid credentials!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in as a user" });
  }
});

//--GET: GET ALL CARS & AUTH HEADER TOKEN--
app.get("/allCars", tokenValidationMiddleware, async (req, res) => {
  try {
    const cars = await Cars.find();
    if (cars) {
      return res.status(200).json(cars);
    } else {
      return res.status(404).json({ message: "No car available" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error fetching data from DB" });
  }
});

//--GET: GET A CAR BY YEAR & AUTH HEADER TOKEN--
app.get("/cars/:year", tokenValidationMiddleware, async (req, res) => {
  const year = Number(req.params.year);

  if (!year) {
    return res.status(400).send("Parameter missing in the link");
  }

  try {
    const cars = await Cars.find({ year: year });
    if (cars) {
      res.status(200).json(cars);
    } else {
      res.status(404).json(`No cars from ${year}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching from DB" });
  }
});

//POST: if logged in, Create an entry in the DB
app.post(
  "/createCar",
  tokenValidationMiddleware,
  CarsValidationMiddleware,
  async (req, res) => {
    const { model, brand, year, price } = req.validatedInput;

    try {
      const newCar = await new Cars({ model, brand, year, price }).save();
      if (newCar) {
        res
          .status(200)
          .json({ message: "New entry for a car created in the DB" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error creating a DB record of a car" });
    }
  }
);

//UPDATE: if logged in, update a car by id

//DELETE: if logged in, delete a car by id

app.listen(3000, console.log("Server running on port 3000"));
