import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  function max() {
    if (count >= 20) {
      return;
    }
    setCount(count + 1);
  }

  function min() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={max}>Increase</button>
        <button onClick={min}>Decrease</button>
      </div>
    </>
  );
}

export default App;
