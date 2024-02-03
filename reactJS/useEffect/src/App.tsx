import { useState, useEffect } from "react";
import "./App.css";

interface DemoProps {}

function App({}: DemoProps) {
  const [count, setCount] = useState(0); //React is watching this..

  //basic side Effect..
  useEffect(() => {
    //The code that we want to run
    console.log("The count is: ", count);

    //Optional return function used for cleanup
    return () => {
      console.log("useEffect being cleaned up!");
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
