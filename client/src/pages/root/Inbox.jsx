import React from "react";
import Navbar2 from "../../components/root/Navbar2";
import { Button } from "@material-tailwind/react";
import { FaSmile } from "react-icons/fa";

function Inbox() {
  return (
    <div>
      {/* Navbar */}
      <Navbar2 />

      {/* Main Content */}
      <div className="p-4">
        <div className="flex justify-center mt-4">
          {/* Button */}
          <Button color="blue" size="lg" className="normal-case bg-buton-white">
            Today
          </Button>
        </div>
      </div>

      {/* Secondary Content */}
      <div className="mt-5 flex ">
        <Button className="w-96 h-14 normal-case flex justify-between px-6">
          {/* Button Text */}
          <span>Hi, Nicholas Good Evening</span>
          {/* Smile Icon */}
          <FaSmile className="text-lg text-gray-500" />
        </Button>
      </div>
    </div>
  );
}

export default Inbox;
