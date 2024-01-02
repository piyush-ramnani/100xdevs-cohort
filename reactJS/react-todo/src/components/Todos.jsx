/*
todos = {
    title: "Title"
    description: "Description"
}
*/

import axios from "axios";

export function Todos({ todos }) {
  const markCompleted = async (todoId) => {
    try {
      const completedItem = await axios.put("http://localhost:3000/completed", {
        todoId: todoId,
        completed: true,
      });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todos, index) => {
          return (
            <li key={index}>
              <h2>{todos.title}</h2>
              <p>{todos.description}</p>
              <button onClick={() => markCompleted(todos._id)}>
                {todos.completed == true ? "Completed" : "Mark as Complete"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
