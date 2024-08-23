import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";

const App = () => {
  return (
    <>
      <NavItems />
      <Outlet />

    </>
  );
};

export default App;