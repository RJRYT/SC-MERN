import React from "react";
import { IconButton, Typography, Card } from "@material-tailwind/react";
import { BookedCard } from "../../components/cards/BookedCard";
import { ScheduledCard } from "../../components/cards/ScheduledCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";

const bookings = [
  {
    id: 1,
    title: "Tap Repair",
    customer: "Keshavan",
    status: "Booked",
    date: "March 20, 2021",
    time: "09:00 - 10:00 AM",
    amount: null,
    actionLabel: "Waiting for Response",
    actionType: "info",
  },
  {
    id: 2,
    title: "Tap Repair",
    customer: "Keshavan",
    status: "Scheduled",
    date: "March 20, 2021",
    time: "09:00 - 10:00 AM",
    amount: "300 /-",
    actionLabel: "Accept and Pay Advance",
    actionType: "success",
  },
];

export const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white items-center">
      {/* Navbar */}
      <div className="w-full max-w-[600px] bg-[#1D1F2A] h-[60px] px-4 flex items-center rounded-t-lg justify-between">
        <IconButton variant="text">
          <CiCircleChevLeft size={24} color="white" />
        </IconButton>
        <Typography variant="h6" className="text-white font-semibold">
          BOOKINGS
        </Typography>
        <div className="flex items-center space-x-2">
          <IconButton variant="text">
            <LuSettings2 size={24} color="white" />
          </IconButton>
          <IconButton variant="text">
            <BiSearch size={24} color="white" />
          </IconButton>
        </div>
      </div>

      <Card className="w-full shadow-none bg-[#D9D9DB] h-[650px] rounded-t-none max-w-[600px] p-0 mt-0">
        {" "}
        <div className="p-6 space-y-4">
          {bookings.map((booking) =>
            booking.status === "Booked" ? (
              <BookedCard key={booking.id} booking={booking} />
            ) : (
              <ScheduledCard key={booking.id} booking={booking} />
            )
          )}
        </div>
      </Card>
    </div>
  );
};
