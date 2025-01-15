import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
const review = () => {
  const [review, setReview] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", { review, file });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Navbar */}
      <div className="w-full max-w-[600px] bg-[#1D1F2A] h-[60px] px-4 flex items-center gap-1 rounded-t-lg ">
        <IconButton variant="text">
          <CiCircleChevLeft size={28} color="white" />
        </IconButton>
        <Typography
          variant="h6"
          className="text-white font-semibold text-2xl m-2"
        >
          Review
        </Typography>
      </div>

      <div className="w-full max-w-[600px] bg-[#D9D9DB] shadow-2g  p-6">
        <div className="mb-4">
          <div className="border bg-white border-gray-300 rounded-2xl p-6 text-center">
            <FaSquare size={75} color="black" />

            <h2 className="text-xs font-semibold text-amber-900">
              Graphic Design
            </h2>
            <p className="text-bg-[#1D1F2A] font-semibold">
              Setup your Graphic Design...
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[#1D1F2A] font-semibold mb-2">
            Add Photo (or) Video
          </label>
          <div className="border  bg-white border-gray-400 rounded-2xl  shadow-2g p-6 text-center">
            <input
              type="file"
              className="hidden"
              id="fileInput"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex flex-col items-center text-gray-800 hover:text-gray-700"
            >
              <FaCloudUploadAlt size={29} color="black" />
              <span className="mt-2">Click here to Upload</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[#1D1F2A] font-semibold mb-2">
            Write your Review
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-2xl p-2"
            rows="4"
            placeholder="Would you like to write anything about this product?"
            maxLength={250}
            value={review}
            onChange={handleReviewChange}
          />
          <div className="text-right text-sm text-gray-500">
            {250 - review.length} Characters Remaining
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-[#1D1F2A]  text-white  flex items-center gap-2 normal-case rounded-full px-14 py-3"
            size="sm"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default review;
