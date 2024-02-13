import "./App.css";
import { RevenueCard } from "./components/RevenueCard";
import { SideDrawer } from "./components/SideDrawer";
import { Nav } from "./components/nav";

function App() {
  return (
    <div id="page" className="h-100vh w-100% bg-[#FAFAFA]">
      <div
        id="container"
        className="w-[1440px] h-[882px] mx-auto border border-red-500 relative"
      >
        <div className="absolute">
          <SideDrawer></SideDrawer>
        </div>
        <Nav></Nav>
        <div className="flex justify-end">
          <div className="w-[1152px] h-[754px] top-[96px] left-[256px] m-[32px] flex border border-yellow-500">
            <div className="grid grid-cols-4">
              <RevenueCard
                title={"Amount pending"}
                amount={"92,312.20"}
                orderCount={"13"}
              ></RevenueCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
