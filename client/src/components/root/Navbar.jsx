import React from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <MTNavbar
        variant="gradient"
        className="bg-custom-dark-purple px-4 py-3"
        style={{ maxWidth: "100%", borderRadius: "0", height: "90px" }}
      >
        <div className="flex items-center gap-4 text-white">
          {/* Back Icon */}
          <div
            className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
          >
            <IoIosArrowBack size={24} />
          </div>

          {/* Title */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="text-center text-lg md:text-xl lg:text-2xl mx-auto"
            style={{ marginTop: "10px" }}
          >
            ABOUT
          </Typography>
        </div>
      </MTNavbar>
    </div>
  );
}

export default Navbar;
