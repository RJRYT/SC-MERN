import { IoIosArrowRoundForward } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import { format } from "date-fns";
import { MdOutlineDateRange } from "react-icons/md";
import Header from "../../components/header/Header";
import Blackbutton from "../../components/blackbutton/Blackbutton";
const EditProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateInputClick = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FF]">
      {/* Header Section */}
      <Header title={"EDIT PROFILE"} />

      {/* Main Container */}
      <div className="flex flex-col items-center py-8 px-4 md:px-8">
        {/* Profile Image */}
        <div className="relative mb-6">
          <img
            src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md"
          />
          <div className="absolute bottom-0 right-0 p-2 rounded-full bg-white shadow cursor-pointer">
            <CiImageOn color="green" size={24} />
          </div>
        </div>

        {/* Input Fields */}
        <div className="w-full max-w-md space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full bg-white text-gray-800 p-4 rounded-lg shadow-md placeholder-black focus:outline-none focus:ring-2  focus:ring-[#35384a]"
            />
          </div>

          {/* Nickname */}
          <div className="relative">
            <input
              id="nickname"
              type="text"
              placeholder="Nickname"
              className="w-full bg-white text-gray-800 p-4 rounded-lg shadow-md placeholder-black focus:outline-none focus:ring-2  focus:ring-[#35384a]"
            />
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
              <MdOutlineDateRange size={24} />
            </div>
            <input
              id="dob"
              type="text"
              readOnly
              value={selectedDate ? format(selectedDate, "PPP") : ""}
              placeholder="Date of Birth"
              className="w-full bg-white text-gray-800 p-4 rounded-lg shadow-md placeholder-black cursor-pointer focus:outline-none focus:ring-2  focus:ring-[#35384a] pl-12"
              onClick={handleDateInputClick}
            />
            {showCalendar && (
              <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                />
              </div>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <TfiEmail
              size={24}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black"
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full bg-white text-gray-800 p-4 pl-12 rounded-lg shadow-md placeholder-[black] focus:outline-none focus:ring-2  focus:ring-[#35384a]"
            />
          </div>

          {/* Phone Number */}
          <div className="flex">
            <select
              id="countryCode"
              className="bg-white text-gray-800 p-4 rounded-l-lg shadow-md focus:outline-none focus:ring-2  focus:ring-[#35384a]"
            >
              <option value="+1">US (+1)</option>
              <option value="+91">India (+91)</option>
              <option value="+44">UK (+44)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+81">Japan (+81)</option>
            </select>
            <input
              id="phoneNumber"
              type="tel"
              maxLength={10}
              placeholder="Phone Number"
              className="w-full bg-white text-gray-800 p-4 rounded-r-lg shadow-md placeholder-gray-500 focus:outline-none focus:ring-2  focus:ring-[#35384a]"
            />
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              id="gender"
              className="w-full bg-white text-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-[#35384a]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Nickname */}
          <div className="relative">
            <input
              id="nickname"
              type="text"
              placeholder="Student"
              className="w-full bg-white text-gray-800 p-4 rounded-lg shadow-md placeholder-black focus:outline-none focus:ring-2 focus:ring-[#35384a]"
            />
          </div>
          <Blackbutton label="Update"/>
        </div>

        {/* Update Button */}
        
      </div>
    </div>
  );
};

export default EditProfile;
