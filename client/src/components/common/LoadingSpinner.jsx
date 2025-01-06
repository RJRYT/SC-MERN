import React from "react";

const LoadingSpinner = ({ message, spinnerSize = "large" }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1D1F2A] text-white px-4">
      {/* Spinner */}
      <div
        className={`animate-spin rounded-full border-t-4 ${
          spinnerSize === "large" ? "h-16 w-16 border-4" : "h-8 w-8 border-2"
        } border-[#F6E89A]`}
      />

      {/* Message */}
      {message && (
        <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] mt-6 text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
