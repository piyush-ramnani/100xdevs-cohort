import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtomFamily } from "./atoms";
import React from "react";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <TodoUpdater />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

//THIS MUST BE INSIDE RECOILROOT TO WORK which is why <TodoUpdater/> component is being used in the App function.
function TodoUpdater() {
  const updateTodo = useSetRecoilState(todoAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: "Todo changed",
        description: " Todo changed by the  updater effect",
      });
    }, 3000);
  }, []);
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id));

  return (
    <div>
      {currentTodo.id}
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </div>
  );
}

export default App;
