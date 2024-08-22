import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";

const App = () => {
  return (
    <div className='max-w-[1440px] m-auto'>
      <NavItems />
      <Outlet />

    </div>
  );
};

export default App;