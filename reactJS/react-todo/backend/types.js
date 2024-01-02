const { z } = require("zod");

const zCreateTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const zUpdateTodo = z.object({
  todoId: z.string(),
});

module.exports = {
  createTodo: zCreateTodo,
  updateTodo: zUpdateTodo,
};
