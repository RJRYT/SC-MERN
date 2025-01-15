import React from "react";
import Navbar2 from "../../components/root/Navbar2";
import { FaRegSmile } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { BiMicrophone } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

function Inbox() {
  return (


    
    <div  >
      {/* Navbar */}
      <Navbar2 />
      <div className=" flex flex-col items-center px-4 sm:px-6 lg:px-8 ">

      {/* Date Label */}
      <div className="flex justify-center mt-8">
        <div className="bg-whites p-4 text-center w-32 sm:w-40 lg:w-48 h-10 rounded-xl border-2 border-gray-300 shadow-custom-dark">
          <p className="text-lg sm:text-xl -mt-2">Today</p>
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex flex-col items-center w-full max-w-4xl gap-4 py-8 ">
        {/* First Message */}
        <div className="bg-buton-white p-4 rounded-e-2xl shadow-2xl w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm sm:text-base">Hi Nicholas Good Morning</p>
            <FaRegSmile className="text-yellow-600 ml-2" />
            <p className="text-white text-sm mt-2 ml-auto">10:45</p>
          </div>
        </div>

        {/* Second Message */}
        <div className="bg-buton-white p-4 rounded-e-2xl shadow-2xl w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm sm:text-base">How was your UI/UX Design Course Like.?</p>
            <FaRegSmile className="text-yellow-600 ml-2" />
            <p className="text-white text-sm mt-2 ml-auto">10:45</p>
          </div>
        </div>

        {/* Right-Aligned Messages */}
        <div className="flex flex-col items-end gap-4 w-full">
          {/* Third Message */}
          <div className="bg-whites p-4 rounded-s-2xl shadow-custom-dark w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
            <div className="flex justify-between items-center">
              <p className="text-black text-sm sm:text-base font-">Hi, Morning too Ronaldo</p>
              <p className="text-black text-sm mt-2 ml-auto">10:45</p>
              
            </div>
          </div>


          <div className="flex flex-col items-end gap-4 w-full">
          {/* Fourth Message */}
          <div className="bg-whites p-4 rounded-s-2xl shadow-custom-dark w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm sm:text-base">Hello, I also just finished the Sketch Basic...</p>
              <div className="flex text-yellow-600 ml-80 -mt-7 ">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} size={20} />
                ))}
              </div>
            </div>
            <p className="text-black text-sm mt-0 ml-auto text-right">10:45</p>
            </div>
            
          </div>
        </div>
        

        {/* Final Message */}
        <div className="bg-buton-white p-4 rounded-e-2xl shadow-2xl w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm sm:text-base">OMG, This is Amazing...</p>
            <p className="text-white text-sm mt-2 ml-auto">10:45</p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="flex justify-center items-center w-full mt-8 py-8">
  <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
    <div className="relative bg-custom-bg rounded-full shadow-custom-dark">
      {/* Input Box */}
      <input
        style={{ height: "60px" }}
        className="w-full bg-transparent placeholder:text-gray-400 text-gray-800 text-base border border-gray-300 rounded-full pl-5 pr-20 py-3 focus:outline-none focus:border-gray-500"
        placeholder="Message"
      />

      {/* Send Icon */}
      <IoIosSend
        size={30}
        className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer"
      />

      {/* Microphone Icon */}
      <BiMicrophone
        size={30}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer bg-black border border-black rounded-full p-1"
      />
    </div>
  </div>
</div>

    </div>
    </div>
  );
}

export default Inbox; 