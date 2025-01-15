import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { CiCircleChevLeft } from "react-icons/ci";

const reviews = [
  {
    name: "Heather S. McMullen",
    rating: 4.2,
    text: "The Course is Very Good dolor sit amet, con sect tur adipiscing elit...",
    likes: 760,
    time: "2 Weeks Ago",
  },
  {
    name: "Natasha B. Lambert",
    rating: 4.8,
    text: "The Course is Very Good dolor veterem, quo etiam utuntur hi capiamus...",
    likes: 918,
    time: "2 Weeks Ago",
  },
  {
    name: "Marshall A. Lester",
    rating: 4.6,
    text: "The Course is Very Good dolor sit amet, con sect tur adipiscing elit...",
    likes: 914,
    time: "2 Weeks Ago",
  },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <div className="w-full max-w-[600px] bg-[#1D1F2A] h-[60px] px-4 flex items-center gap-1 rounded-t-lg ">
         <IconButton variant="text">
                  <CiCircleChevLeft size={28} color="white" />
                </IconButton>
                <Typography variant="h6" className="text-white font-semibold text-2xl m-2">
                  Review
                </Typography>
      </div>

      {/* Rating Summary */}
      <div className="w-full max-w-[600px] bg-[#D9D9DB] shadow-2g rounded-lg p-6">
      <div className="text-center mb-6 mt-4 w-full px-4 ">
        <h2 className="text-3xl sm:text-4xl font-bold">4.8</h2>
        <div className="flex justify-center mb-2">
          <span className="text-yellow-500 text-xl">★★★★★</span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">Based on 448 Reviews</p>
      </div>

      {/* Rating Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
        {["Excellent", "Good", "Average", "Below Average"].map((filter, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full ${
              filter === "Excellent" ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Review Cards */}
      <div className="w-full max-w-lg px-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-4"
          >
            {/* Avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

            {/* Review Details */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm sm:text-base">{review.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs sm:text-sm">
                  {review.rating} ★
                </span>
              </div>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{review.text}</p>
              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-500">
                <span>❤️ {review.likes}</span>
                <span>{review.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="px-14 py-1 bg-black text-white rounded-full shadow-lg text-sm sm:text-base  sm:px-14">
          Write a Review
        </button>
      </div>
    </div>
    </div>

  );
};

export default ReviewsPage;


