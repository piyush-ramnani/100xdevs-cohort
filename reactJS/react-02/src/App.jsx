import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); //declaring an empty array
  const [newTodo, setNewTodo] = useState("");

  let globalId = 0;

  const addTodo = () => {
    if (newTodo.trim() != "") {
      // To check if there are no only white spaces in the newTodo item
      let newTask = { text: newTodo, completed: false, id: globalId++ };
      setTodos([...todos, newTask]); //spread operator to push the item into existing array
      setNewTodo(""); //resetting the newTodo state variable to ""
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.forEach((element) => {
        if (element.id === id) {
          if (element.completed == true) {
            element.completed = false;
          } else {
            element.completed = true;
          }
        }
      })
    );
  };

  /*--Using MAP--
  const toggleTodo = (id) => {
  setTodos(
    todos.map((element) =>
      element.id === id ? { ...element, completed: !element.completed } : element
    )
  );
};
  */

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
