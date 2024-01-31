import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
  );
}

const Navbar = () => {
  // const [count, setCount] = useState(0);
  //We can use useState() hook for managing notification count of these buttons
  const notifications = useRecoilValue(notificationsAtom);
  const messages = useRecoilValue(messagingAtom);
  const jobs = useRecoilValue(jobsAtom);
  const [network, setNetwork] = useRecoilState(networkAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //   return network + jobs + notifications + messages;
  // }, [network, messages, notifications, jobs])

  return (
    <div>
      <div>
        <button>Home</button>

        <button>My Network ({network >= 100 ? "99+" : network})</button>
        <button>Jobs ({jobs >= 100 ? "99+" : jobs})</button>
        <button>Messaging ({messages >= 100 ? "99+" : messages})</button>
        <button>
          Notification ({notifications >= 100 ? "99+" : notifications})
        </button>

        <button>My Profile ({totalNotificationCount})</button>
      </div>
      <div>
        <button
          onClick={() => {
            setNetwork((c) => c + 1);
          }}
          style={{ margin: "20px" }}
        >
          setNetwork ++
        </button>
      </div>
    </div>
  );
};
export default App;
