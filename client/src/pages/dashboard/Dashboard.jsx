import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Dashboard/Navbar"; // Adjust the import path as necessary
import SideMenu from "../../components/sidemenu/Sidemenu"; // Adjust the import path as necessary
import Widget from "../../components/widget/Widget";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 text-gray-800 h-screen ">
      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full h-full">
        {/* Navbar */}
        <div className="w-full top-0  z-10 fixed">
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 mt-[85px]">
          {/* Sidebar */}
          
          <SideMenu />

          {/* Main Content (Right of the sidebar) */}
         
            {/* Scrollable Outlet */}
            <div className=" flex flex-1 w-screen overflow-y-auto ov">
              <Outlet />
            </div>

            {/* Widget */}
            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 md:hidden lg:hidden sm:block">
              <Widget />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
