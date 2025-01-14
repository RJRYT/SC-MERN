import { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Logo from  "../../assets/images/navLogo.png"
import User from "../../assets/images/user.png"
import { BiSolidLogOut } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="flex h-[85px] z-11 w-screen bg-black px-5 lg:px-20 justify-between items-center relative">
      {/* Left Section */}
      <div className="flex gap-3 justify-center items-center">
        {/* Hamburger Menu */}
        {/* <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars />
        </div> */}
        <div className="flex items-center gap-3">
          <img className="hidden lg:flex" src={Logo} alt="Logo" />
          <span className="text-white lg:text-3xl md:text-2xl text-xl">Service Connect</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-3 justify-center items-center space-x-6">
        <div className="flex justify-center items-center space-x-4">
          <FaBell className="text-white w-7 h-7 lg:hidden" />
          <span className="text-[#f35777] hidden md:flex lg:flex">John Doe</span>
          <div className="relative flex flex-row text-center">
            {/* Profile Image */}
            <div
              className="relative w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] md:cursor-default lg:cursor-default sm:cursor-pointer"
              onClick={toggleDropdown} 
            >
              <img
                src={User}
                alt="User Profile"
                className="w-full h-full rounded-full object-cover border-[3px] border-[#f35777]"
              />
              {/* Online/Offline Indicator */}
              <div
                className={`absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>

            {/* Dropdown Menu */}
         {/* Dropdown Menu */}
         {showDropdown && (
  <div className="absolute flex flex-col right-0  md:hidden lg:hidden w-[320px] py-6 pl-3 items-center justify-center bg-black bg-opacity-85 text-white rounded-lg shadow-lg ">
    {/* Close button */}
    <div className="flex justify-end items-center px-3 w-full text-white text-xl cursor-pointer">
      <IoCloseCircleOutline className="text-white text-2xl" onClick={() => setShowDropdown(!showDropdown)} />
    </div>

    {/* User Profile Section */}
    <div className="flex gap-4 px-4 py-2 w-full items-center">
      <div
        className="relative w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] md:cursor-default lg:cursor-default sm:cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={User}
          alt="User Profile"
          className="w-full h-full rounded-full object-cover border-[3px] border-[#f35777]"
        />
        {/* Online/Offline Indicator */}
        <div
          className={`absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 rounded-full ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>
      <div className="flex-col flex">
        <span className="text-[#f35777] text-sm">Jhon doe</span>
        <span className="text-yellow-800 text-sm">Jhon doe</span>
        <span className="text-green-600 text-sm">Jhon doe</span>
      </div>
    </div>

    {/* Menu Items */}
    <ul className="py-2 w-[80%] ">
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">My Profile</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Home</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Booking</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Active Services</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Services</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Complaints</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Messages</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Settings</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Transactions</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">History</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Help Center</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">Terms & Conditions</li>
      <li className="px-4 py-1 text-left hover:bg-gray-700 cursor-pointer rounded-lg">About Us</li>
    </ul>

    {/* Logout Section */}
    <div className="flex w-full gap-2 text-center text-2xl justify-center px-3 py-3 items-center">
      <BiSolidLogOut />
      <span>Logout</span>
    </div>
  </div>
)}

          </div>

          <div className="hidden md:flex lg:flex text-2xl justify-center items-center text-white font-titillium gap-2">
            <span>Logout</span>
            <MdOutlineLogout className="text-white" />
          </div>
        </div>
      </div>

      {/* Full-Screen Menu */}
      {/* {showMenu && (
        <div className="absolute top-[100px] left-0 w-80%  bg-gray-800 text-white flex flex-col items-center justify-center z-10">
          <ul className="text-center space-y-2">
            <li className="text-2xl hover:text-gray-400 cursor-pointer">My Profile</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Home</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Booking</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Active Services</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Services</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Complaints</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Messages</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Settings</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Transactions</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">History</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Help center</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Terms & Conditions</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="text-2xl hover:text-gray-400 cursor-pointer">Invite a Friend</li>




          </ul>
          <button
            className="absolute top-5 right-5 text-3xl text-white"
            onClick={toggleMenu}
          >
            ✖
          </button>
        </div>
      )} */}
    </div>
  );
};
