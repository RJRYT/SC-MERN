import React, { useState } from "react";
import {
  IoMdHome,
  IoMdPerson,
  IoMdSettings,
  IoMdNotifications,
  IoMdHelpCircle,
  IoMdLogOut,
} from "react-icons/io";

const SideMenu = () => {
  const [activeItem, setActiveItem] = useState(""); // State for active menu item

  const menuItems = [
    { icon: <IoMdHome size={20} />, label: "My Profile" },
    { icon: <IoMdPerson size={20} />, label: "Home" },
    { icon: <IoMdSettings size={20} />, label: "Booking" },
    { icon: <IoMdNotifications size={20} />, label: "Active Services" },
    { icon: <IoMdHelpCircle size={20} />, label: "Services" },
    { icon: <IoMdLogOut size={20} />, label: "Complaints" },
    { icon: <IoMdLogOut size={20} />, label: "Messages" },
    { icon: <IoMdLogOut size={20} />, label: "Settings" },
    { icon: <IoMdLogOut size={20} />, label: "Transactions" },
    { icon: <IoMdLogOut size={20} />, label: "History" },
    { icon: <IoMdLogOut size={20} />, label: "Help Center" },
    { icon: <IoMdLogOut size={20} />, label: "Terms & Conditions" },
    { icon: <IoMdLogOut size={20} />, label: "About Us" },
    { icon: <IoMdLogOut size={20} />, label: "Invite a Friend" },
  ];

  return (
    <div className="hidden lg:block bg-[#30323c]  py-6">
      {/* Sidebar */}
      <div className="text-white w-64 p-6 flex flex-col space-y-2">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-1 rounded cursor-pointer ${
                activeItem === item.label ? "bg-gray-500" : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveItem(item.label)} // Set active item
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
