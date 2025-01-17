import React from "react";

import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";
const Blackbutton = ({ label }) => {
  return (
    <Button
    size="md"
    variant="outlined"
    color="blue-gray"
    className="relative flex justify-center items-center bg-black rounded-full text-white w-full normal-case"
  >
    <Typography className="font-titillium text-xl font-bold">{label}</Typography>
    <div className="absolute  mr-[-10px] right-4 flex items-center rounded-full h-10 w-10 justify-center bg-white">
      <FaArrowRight className="text-black text-2xl" />
    </div>
  </Button>
  );
};

export default Blackbutton;
