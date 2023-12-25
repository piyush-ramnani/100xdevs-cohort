/*
1. Connect to a DB
2. Use zod for input validation
3. Save the user data in MongoDB
*/

const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:02041996@practisecluster.agvl9l9.mongodb.net/userData_test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// SCHEMA FOR MONGOOSE
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

//MODEL OR PRE-EXISTING COLLECTION
const User = mongoose.model("User", userSchema);

// ZOD VALIDATION SCHEMA
const userValidator = zod.object({
  username: zod.string(),
  password: zod.string(),
  email: zod.string().email(),
});

// MIDDLEWARE
function validateUserInput(req, res, next) {
  const userInput = req.body;

  try {
    // Input validation by zod
    const validatedUserInput = userValidator.parse(userInput);
    req.validatedUserInput = validatedUserInput; // Save validated data to the request object
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
}

app.post("/signup", validateUserInput, async function (req, res) {
  const { username, password, email } = req.validatedUserInput;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create a new user instance using the Mongoose model
    const newUser = new User({
      username,
      password,
      email,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
