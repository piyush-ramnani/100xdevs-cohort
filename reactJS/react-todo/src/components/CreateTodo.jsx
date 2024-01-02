import { useState } from "react";
import axios from "axios";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postData = async () => {
    try {
      const todoItem = await axios.post("http://localhost:3000/todo", {
        title: title,
        description: description,
        completed: false,
      });

      if (todoItem) {
        alert("TodoItem created succesfully");
      }

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <center>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br></br> <button onClick={postData}>Add Todo</button>
    </center>
  );
}
