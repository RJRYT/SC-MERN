import React from "react";
import Navbar from "../../components/root/Navbar";
import { Switch } from "@material-tailwind/react";

function Notification() {
  return (
    <div className="text-lg md:text-xl lg:text-2xl mx-auto">
      <Navbar />

      {/* Notification Rows */}
      <div className="space-y-4 mt-10  md:space-y-3 lg:space-y-2 ml-4 md:ml-16 lg:ml-80 mr-4 md:mr-16 lg:mr-80">
        {[
          "Special Offers",
          "Sound",
          "Vibrate",
          "General Notification",
          "Promo & Discount",
          "Payment Options",
          "App Update",
          "New Service Available",
          "New Tips Available",
        ].map((label, index) => (
          <div
            key={index}
            className="flex items-center py-3 px-3 gap-x-4 md:gap-x-6 lg:gap-x-8"
            style={{
              fontSize: "25px",
            }}
          >
            <h1 className="flex-grow">{label}</h1>
            <div className="transform scale-150">
              <Switch defaultChecked />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
