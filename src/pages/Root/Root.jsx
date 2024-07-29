import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
        <div className=" h-[65px] lg:h-[69px]">
        <Navbar />
        </div>
        <Outlet />
        <Footer/>
    </div>
  );
};

export default Root;
