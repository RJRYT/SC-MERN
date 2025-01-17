import React from "react";
import { IconButton, Typography, Card } from "@material-tailwind/react";
import { BookedCard } from "../../components/cards/BookedCard";
import { ScheduledCard } from "../../components/cards/ScheduledCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import Header from "../../components/header/Header";
import Widget from "../../components/widget/Widget";

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

const Booking = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white items-center">
      {/* Navbar */}
      <div className="w-full">
      <Header title="BOOKINGS" showSearch showSettings/>
      </div>
     

      <div className="w-full shadow-none bg-[#D9D9DB] flex justify-center  rounded-t-none h-screen p-0 mt-0">
        <div className="w-[350px] md:w-[700px]">
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
        </div>
       
      
      </div>
      <Widget/>
    </div>
  );
};

export default Booking;