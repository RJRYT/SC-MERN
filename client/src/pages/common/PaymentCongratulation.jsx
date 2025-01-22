import { IoIosArrowRoundForward } from "react-icons/io";
import { Card, Typography } from "@material-tailwind/react";
import congPageIcon from "../../assets/images/congPageIcon.png";
import Blackbutton from "../../components/blackbutton/Blackbutton";

const PaymentCongratulation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
      <Card className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-800 focus:outline-none"
        
        >
          &times;
        </button>

        <div className="flex flex-col items-center space-y-4">
          <div className="relative rounded-full bg-white p-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <img
                src={congPageIcon} // Replacing the "Man Icon" with your custom icon
                alt="Congratulation Icon"
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

          {/* Title */}
          <Typography
            variant="h5"
            color="black"
            className="text-center text-xl sm:text-2xl md:text-3xl"
          >
            Congratulations
          </Typography>

          {/* Message */}
          <Typography
            variant="paragraph"
            className="text-gray-800 text-center text-sm sm:text-base md:text-lg"
          >
            Your payment was successfully processed! You purchased a new course!
          </Typography>

          {/* Watch Course */}
          <Typography
            variant="paragraph"
            className="text-green-700 underline font-semibold mb-6 cursor-pointer hover:underline text-sm sm:text-base"
          >
            Watch the Course
          </Typography>

          {/* E-Receipt Button */}
          <div className="flex justify-center w-full max-w-[300px]">
          <Blackbutton label="E-receipt"/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentCongratulation;
