import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { IoBackspaceOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

export const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (!otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeypadClick = (key) => {
    if (key === "x") {
      const lastIndex = otp.findLastIndex((digit) => digit !== "");
      if (lastIndex !== -1) {
        const newOtp = [...otp];
        newOtp[lastIndex] = "";
        setOtp(newOtp);
        document.getElementById(`otp-${lastIndex}`).focus();
      }
    } else if (key === "*" || !isNaN(key)) {
      const nextIndex = otp.findIndex((digit) => digit === "");
      if (nextIndex !== -1) {
        const newOtp = [...otp];
        newOtp[nextIndex] = key;
        setOtp(newOtp);

        if (nextIndex < otp.length - 1) {
          document.getElementById(`otp-${nextIndex + 1}`).focus();
        }
      }
    }
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const number = Number(otp.join(""));
    console.log("otp", number);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header Section */}
      <div className="flex items-center w-full bg-[#1D1F2A] h-[60px] px-4">
        <CiCircleChevLeft size={30} color="white" className="mr-4" />
        <h3 className="text-white text-[24px] font-semibold">
          OTP VERIFICATION
        </h3>
      </div>

      {/* OTP Content Section */}
      <div className="flex justify-center items-center flex-grow px-4 sm:px-0 mx-auto max-w-full md:max-w-md">
        <div className="w-full p-8 bg-white rounded-lg shadow-xl overflow-hidden sm:shadow-none sm:bg-none">

          {/* Code Sent Message */}
          <p className="text-center mb-8">
            Code has been sent to <span>(+91) ***_***_*542</span>
          </p>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-3 mb-8 w-full">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="bg-[#736A68] w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl font-semibold border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            ))}
          </div>

          {/* Resend Code */}
          <div className="flex justify-center items-center mb-8">
            <p className="text-center">
              Resend code in <span className="font-bold">59</span>s
            </p>
          </div>

          {/* Verify Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={(e) => handleSubmitButton(e)}
              className="flex items-center justify-between w-full max-w-md text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none focus:ring-4 
               focus:ring-gray-400 font-medium rounded-full text-base px-5 py-3 transition duration-300"
            >
              <span className="flex-grow text-center">Verify</span>
              <IoIosArrowRoundForward
                className="bg-white rounded-full"
                color="black"
                size={34}
              />
            </button>
          </div>

          {/* Number Keypad */}
          <div className="flex justify-center w-full">
            <ul className="grid grid-cols-3 gap-3 text-center w-full max-w-[320px] sm:max-w-[380px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0].map((key) => (
                <li
                  key={key}
                  className="cursor-pointer w-16 h-16 flex justify-center items-center text-lg font-medium 
                          rounded-lg hover:bg-gray-300 sm:w-20 sm:h-20 
                         transition-transform transform hover:scale-105"
                  onClick={() => handleKeypadClick(key)}
                >
                  {key}
                </li>
              ))}
              <li
                className="cursor-pointer w-16 h-16 flex justify-center items-center text-lg font-medium 
                          rounded-lg hover:bg-gray-300 sm:w-20 sm:h-20 
                         transition-transform transform hover:scale-105"
                onClick={() => handleKeypadClick("x")}
              >
                <IoBackspaceOutline size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
