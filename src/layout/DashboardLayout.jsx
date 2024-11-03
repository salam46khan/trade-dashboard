import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import SideNav from "../pages/SideNav/SideNav";

const DashboardLayout = () => {
    return (
        <div className=" bg-[#050E13] overflow-hidden">
            {/* overflow-hidden */}
            <div className="container">
                <div className="p-3 ">
                    <Header></Header>
                </div>
                <div className=" flex items-stretch p-3 gap-2 overflow-hidden">
                    <p className="md:w-20 overflow-hidden">
                        <SideNav></SideNav>
                    </p>
                    <div className="flex-1 overflow-hidden">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;