import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  let count = useMemo(() => {
    console.log("memo got called");
    let finalCount = 0;

    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);
  //useMemo also has a dependency array that is watched by React

  return (
    <div style={{ padding: "500px", border: "white 2px" }}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Find sum from 1 to n"
      ></input>
      <p>
        sum from 1 to {inputValue} is {count}
      </p>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
    </div>
  );
}

export default App;
