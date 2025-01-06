import React from "react";

const ErrorPage = ({ code, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1D1F2A] text-white px-4">
      {/* Error Code */}
      <h3 className="text-[100px] text-[#F6E89A] leading-none sm:text-[80px] md:text-[100px]">
        {code}
      </h3>

      {/* Title */}
      <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] mt-9">
        {title}
      </p>

      {/* Description */}
      <div className="mt-6 text-center space-y-2">
        {description.map((line, index) => (
          <p
            key={index}
            className="text-[25px] font-body sm:text-[20px] md:text-[25px]"
          >
            {line}
          </p>
        ))}
      </div>

      {/* Button */}
      <div className="mt-16">
        <button
          onClick={onButtonClick}
          className="flex items-center justify-center gap-2 rounded-md w-full max-w-[400px] px-6 py-3 sm:px-4 sm:py-2 outline outline-[4px] outline-[white] hover:bg-[#2f3453] hover:text-[white] transition duration-300"
        >
          <span className="text-[11px] font-medium sm:text-[20px] md:text-[11px]">
            {buttonText}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
