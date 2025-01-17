import { CiCircleChevLeft } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import Header from "../../components/header/Header";
import Blackbutton from "../../components/blackbutton/Blackbutton";
const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <main className="min-h-screen flex flex-col bg-[#D9D9DB]">
      {/* Header Section */}
 <Header title="FORGOT PASSWORD"/>

      {/* Main Content */}
      <section className="flex-grow flex flex-col justify-center items-center px-4 py-8 mt-10 sm:mt-20">
        <p className="mb-6 text-center text-[16px] font-bold text-[#202244]">
          Create your New Password
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
              type={showPassword ? "text" : "password"}
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
              type={showConfirmPassword ? "text" : "password"}
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
          <Blackbutton label="Continue"/>
        </form>

        {/* Verify Button */}
       
      </section>
    </main>
  );
};

export default CreateNewPassword;