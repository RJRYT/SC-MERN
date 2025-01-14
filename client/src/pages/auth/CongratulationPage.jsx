import React from "react";
import { Card, Typography, Spinner } from "@material-tailwind/react";

const CongratulationsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
      <Card className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="relative rounded-full bg-white p-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              {/* <Typography variant="h5" className="text-white">
                🙂
              </Typography> */}

              <img
                src="/images/men_icon_jpg.png" // Correct file path
                alt="Man Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 left-4"></span>
              <span className="absolute w-2 h-2 bg-blue-500 rounded-full top-6 left-10"></span>
              <span className="absolute w-2 h-2 bg-yellow-500 rounded-full top-2 right-4"></span>
              <span className="absolute w-3 h-1 bg-green-500 transform rotate-45 top-3 left-12"></span>
              <span className="absolute w-2 h-2 bg-orange-500 rounded-full bottom-3 right-6"></span>
              <span className="absolute w-1 h-3 bg-purple-500 transform rotate-90 bottom-5 left-8"></span>
            </div>
          </div>
          {/* Text */}
          <Typography
            variant="h5"
            color="black"
            className="text-center text-xl sm:text-2xl md:text-3xl"
          >
            Congratulations
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 text-center text-sm sm:text-base md:text-lg"
          >
            Your Account is Ready to Use. You will be redirected to the Home
            Page in a Few Seconds.
          </Typography>
          {/* Spinner */}
          <Spinner className="text-white" />
        </div>
      </Card>
    </div>
  );
};

export default CongratulationsPage;