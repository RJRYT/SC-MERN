import React from "react";
import {
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import { GoArrowLeft } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";

function Navbar2() {
  return (
    <div>
      <MTNavbar
        variant="gradient"
        className="mx-auto bg-custom-white px-4 py-3 h-28"
        style={{ borderRadius: "0px", maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between text-white">
          {/* Back Icon */}
          <div
            className="flex items-center mt-6 justify-center w-10 h-10 rounded-full"
            style={{
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <GoArrowLeft size={36} />
          </div>

          {/* Navbar Title */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer text-lg md:text-xl lg:text-2xl mx-auto mt-6"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "25px",
              color: "black",
            }}
          >
            Virginia M. Patterson
          </Typography>

          {/* Right Icons (Phone and Search) */}
          <div
            className="flex items-center mt-6 justify-end space-x-4"
            style={{
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <FiPhone size={32} />
            <RiSearch2Line size={32} />
          </div>
        </div>
      </MTNavbar>
    </div>
  );
}

export default Navbar2;
