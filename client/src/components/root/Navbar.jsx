import React from "react";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

function CustomNavbar() {
  return (
    <div>
      <MTNavbar
        variant="gradient"
        className="mx-auto bg-custom-dark-purple px-4 py-3 h-28"
        style={{ borderRadius: "0px", maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between text-white">
          {/* Back Icon */}
          <div
            className="flex items-center  mt-6 justify-center w-10 h-10 border border-white rounded-full"
            style={{
              backgroundColor: "transparent",
              color: "white",
      
            }}
          >
            <IoIosArrowBack size={24} />
          </div>

          {/* Navbar Title */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer text-lg md:text-xl lg:text-2xl mx-auto mt-6"
            style={{ marginLeft: "auto" , marginRight: "auto",fontSize:"30px" }}
           
          >
            Notifications Settings
          </Typography>

        
        </div>
      </MTNavbar>
    </div>
  );
}

export default CustomNavbar;
