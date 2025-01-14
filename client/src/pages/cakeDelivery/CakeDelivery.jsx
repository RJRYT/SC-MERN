import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Header from "../../components/header/Header";

function CakeDelivery() {
  // State for bookmark icon

  const [bookmarkedCards, setBookmarkedCards] = useState({});

  // State to track the active tab
  const [selectedFilter, setSelectedFilter] = useState("nearby");

  // Function to toggle bookmark status for a specific card
  const toggleBookmark = (cardId) => {
    setBookmarkedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  return (
    <>
      <div className="flex flex-col h-full bg-white">
         {/* Header */}
                <Header title="CAKE DELIVERY" showSettings={true} showSearch={true}/>
  
          <div className="bg-gray-100 min-h-screen py-1">
            <div className="max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-6">
              {/* Location  */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button className="m-2 text-black underline text-2xl">
                      <FaLocationDot />
                    </button>
  
                    <span className="text-gray-600 text-sm-[2xl]">
                      [Location name]
                    </span>
                    <button className="ml-2 text-black underline text-2xl">
                      <GoPencil />
                    </button>
                  </div>
                </div>
                <button className="w-full mt-3 bg-[#303039] text-white py-4 px-8 rounded-full text-sm sm:text-base whitespace-nowrap">
                  Open Request (Request to Random Accounts)
                </button>
  
                {/* Filters */}
                <div className="flex  bg-white border-[4px] border-[#1d1f2a] items-center mt-4 rounded-full">
                  <button
                    className={`flex-1 py-2 rounded-3xl  ${
                      selectedFilter === "nearby"
                        ? "bg-[#1d1f2a] text-white font-bold"
                        : "bg-transparent  text-black font-bold"
                    }`}
                    onClick={() => setSelectedFilter("nearby")}
                  >
                    Near By
                  </button>
                  {/* Recent Button */}
                  <button
                    className={`flex-1 py-2 rounded-3xl  ${
                      selectedFilter === "recent"
                        ? "bg-[#1d1f2a] text-white font-bold"     
                        : "bg-transparent text-black font-bold"
                    }`}
                    onClick={() => setSelectedFilter("recent")}
                  >
                    10 KM
                  </button>
                  {/* Popular Button */}
                  <button
                    className={`flex-1 py-2 rounded-3xl  ${
                      selectedFilter === "popular"
                        ? "bg-[#1d1f2a] text-white font-bold"
                        : "bg-transparent text-black font-bold"
                    }`}
                    onClick={() => setSelectedFilter("popular")}
                  >
                    All
                  </button>
                </div>
              </div>
  
              {/* List of Cards */}
              <div className="mt-6">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-between bg-white rounded-lg mb-4 shadow-xl"
                  >
                    {/* Image */}
                    <div className="w-[120px]">
                      <img
                        src="https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg"
                        alt="Cake Delivery"
                        className="w-full rounded-l-lg object-cover"
                      />
                    </div>
  
                    {/* Content */}
                    <div className="flex-1 px-4 flex flex-col ">
                      <p className="text-sm text-orange-500 ">3 km away</p>
                      <h2 className="text-sm font-semibold text-black py-1">
                        Thomas
                      </h2>
                      <p className="text-lg text-black font-semibold">
                        ₹280 - ₹300
                      </p>
                      <div className="flex items-center text-yellow-500 space-x-2 flex-wrap sm:flex-nowrap">
                        <span className="text-sm">
                          <FaStar />
                        </span>
  
                        <span className="text-sm text-black">4.2</span>
                        <span className="text-sm text-black">|</span>
                        <span className="text-sm text-black">78 reviews</span>
                      </div>
                    </div>
  
                    {/* Bookmark Icon */}
                    <button className="relative bottom-10 text-black pr-2">
                      <CiBookmarkMinus
                        size={26}
                        className={`ms-8  pt-2 ${
                          bookmarkedCards[index] ? "text-green-500" : "text-black"
                        }`}
                        
                        onClick={() => toggleBookmark(index)}
                      />
                      {bookmarkedCards[index] && (
                        <p className="text-xs text-gray-700 mt-1">
                          Booked Ones
                        </p>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              </div>
            </div>
             </div>
    </>
  );
}

export default CakeDelivery;
