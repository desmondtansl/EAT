import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function sharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default sharedLayout;
