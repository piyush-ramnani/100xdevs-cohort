const express = require("express");
const jwt = require("jsonwebtoken");
const { Todos } = require("./db");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors");

const app = express();

//--MIDDLEWARES
app.use(express.json());
app.use(cors());

//--ROUTES
app.post("/todo", async function (req, res) {
  const todoPayload = req.body;
  const parsedPayload = createTodo.safeParse(todoPayload);
  console.log("parsedPayload:", parsedPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      error: "Invalid payload type",
    });
    return;
  }

  try {
    const created = await Todos.create({
      title: parsedPayload.data.title,
      description: parsedPayload.data.description,
      completed: false,
    });

    if (created !== null && created !== undefined) {
      res.status(200).json({ message: "Todo Created" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server when creating todo in DB" });
  }
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await Todos.find({});
    if (todos) {
      res.status(200).json({ todos });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos from DB" });
  }
});

app.put("/completed", async function (req, res) {
  const updatedPayload = req.body;

  const parsedPayload = updateTodo.safeParse(updatedPayload);
  console.log(parsedPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      error: "Invalid payload type",
    });
    return;
  }

  try {
    const updated = await Todos.findOneAndUpdate(
      { _id: parsedPayload.data.todoId },
      { completed: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Todo not found!" });
    }

    res.status(200).json({ message: "Todo Marked Completed!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error!" });
  }
});

//--PORT--
app.listen(3000, console.log("Server is running on port 3000"));
