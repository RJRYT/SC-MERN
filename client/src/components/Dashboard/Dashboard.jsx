import React from "react";
import SideMenu from "../sidemenu/Sidemenu";
import Content from "../content/Content";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
  {/* SideMenu */}
  <div className="sm:hidden md:hidden bg-gray-800 flex-shrink-0 hidden  lg:block lg:w-48">
    <SideMenu />
  </div>

  {/* Content */}
  <div className="flex-1   overflow-y-auto">
    <Content />
  </div>
</div>

  );
};

export default Dashboard;
