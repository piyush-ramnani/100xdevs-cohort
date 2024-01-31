import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  // const [count, setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      {/* <CountContext.Provider value={count}> */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      {/* </CountContext.Provider> */}
    </div>
  );
}

function Count() {
  //Component that does not use state variable but the component re-renders
  console.log("Count component re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Even />
    </div>
  );
}

function CountRenderer() {
  // const count = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  // const count = useContext(CountContext);
  console.log("Button re-rendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Even() {
  const count = useRecoilValue(countAtom);
  return <div>Even : {count % 2 === 0 ? `Yes` : `No`}</div>;
}
//Or you can define selectors in recoil to memoize the derived states (That depends on some changes in state variable)

export default App;
