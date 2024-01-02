const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:02041996@practisecluster.agvl9l9.mongodb.net/Todo_DB?retryWrites=true&w=majority"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = {
  Todos,
};
