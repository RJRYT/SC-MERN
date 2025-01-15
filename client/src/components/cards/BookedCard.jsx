import React from "react";
import { Badge, Button, Card, Typography } from "@material-tailwind/react";
import { IoIosRadioButtonOff, IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

const statusColors = {
  Booked: "",
};

export const BookedCard = ({ booking }) => {
  return (
    <div className="flex">
      <div className="w-4 bg-[#1D1F2A] rounded-l-2xl"></div>

      <Card className="flex-1 p-4 shadow-lg rounded-l-none rounded-r-2xl ">
        <div className="flex justify-between items-center mb-2 ">
          <Typography variant="h6">
            {booking.title}
            <span className="text-black-500 underline cursor-pointer text-xs ml-2">
              View
            </span>
          </Typography>
          <Button variant="text" color="gray-300" size="sm">
            ✕
          </Button>
        </div>

        <Typography
          variant="small"
          className="text-[#A098AE] flex items-center gap-2"
        >
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300">
            <IoIosRadioButtonOff size={26} color="text-[#A098AE] " />
          </div>
          {booking.customer}
        </Typography>
        <Typography
          variant="small"
          className="flex items-center gap-2 text-[#A098AE]"
        >
          {booking.status}
        </Typography>

        <div className="flex justify-between items-center text-[#A098AE]">
          <Typography variant="small" className="flex items-center gap-2">
            <CiCalendar size={18} color="red" />
            {booking.date}
          </Typography>
          <Typography variant="small" className="flex items-center gap-2">
            <IoMdTime size={18} color="yellow" />
            {booking.time}
          </Typography>
        </div>

        <div className="flex justify-center mt-4">
          <Button
            className="bg-[#1D1F2A]  text-white  flex items-center gap-2 normal-case rounded-full px-6 py-2"
            size="sm"
          >
            {booking.actionLabel}
          </Button>
        </div>
      </Card>
    </div>
  );
};
