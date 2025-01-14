import { CiCircleChevLeft } from 'react-icons/ci';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useState } from 'react';
import { CiLock } from 'react-icons/ci';

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <main className="min-h-screen flex flex-col bg-[#D9D9DB]">
      {/* Header Section */}
      <header className="flex items-center w-full bg-[#1D1F2A] h-[60px] px-4">
        <CiCircleChevLeft
          size={30}
          color="white"
          className="mr-4 cursor-pointer"
          aria-label="Go Back"
        />
        <h3 className="text-white text-[20px] sm:text-[24px] font-semibold">
          Forgot Password
        </h3>
      </header>
      {/* Main Content */}
      <section className="flex-grow flex flex-col justify-center items-center px-4 py-8 mt-10 sm:mt-20 ">
        <p className="mb-20 text-center text-[16px] font-bold text-gray-700 w-full max-w-md">
          Enter your registered email or phone number to receive a OTP to reset
          your password
        </p>

        {/* Input Fields */}
        <form className="flex flex-col gap-4 w-full max-w-md  ">
          <div className="relative">
            <CiLock
              size={20}
              color="white"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-10 px-4 py-3 text-gray-600 bg-[#736A68] rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400"
              placeholder="New Password"
              required
              minLength="8"
              aria-label="New Password"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? (
                <HiEyeOff size={20} color="white" />
              ) : (
                <HiEye size={20} color="white" />
              )}
            </div>
          </div>

          <div className="relative">
            <CiLock
              size={20}
              color="white"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-full pl-10 px-4 py-3 text-gray-600 bg-[#736A68] rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400"
              placeholder="Confirm Password"
              required
              aria-label="Confirm Password"
            />
            <div
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              aria-label="Toggle Confirm Password Visibility"
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} color="white" />
              ) : (
                <HiEye size={20} color="white" />
              )}
            </div>
          </div>
        </form>

        {/* Verify Button */}
        <div className="flex justify-center w-full mt-8">
          <button
            className="flex items-center justify-between w-full max-w-md text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none focus:ring-4 
            focus:ring-gray-400 font-medium rounded-full text-base px-5 py-3 transition duration-300"
          >
            <span className="flex-grow text-center">Verify</span>
            <IoIosArrowRoundForward
              className="bg-white rounded-full"
              color="black"
              size={34}
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
       
    </main>
  );
};

export default ForgotPassword;
