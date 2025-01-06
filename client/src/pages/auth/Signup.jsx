import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaEyeSlash, FaRegEye, FaCircleArrowRight } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import googleLogo from "../../assets/images/googlelogo.png";
import appleLogo from "../../assets/images/applelogo.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center overflow-auto">
      {/* Logo and Title */}
      <div className="text-center font-nano text-3xl flex justify-center gap-2 items-center font-extrabold mt-1 mb-6">
        <img src={logo} alt="Service Connect Logo" className="w-16 h-16" />
        <span className="mb-2">Service Connect</span>
      </div>

      {/* Sign Up Form */}
      <div className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-4/12 2xl:w-3/12 flex flex-col gap-y-4">
        <div>
          <h3 className="font-jost font-semibold text-2xl">
            Getting Started...!
          </h3>
          <p className="font-mulish font-bold text-sm text-[#545454]">
            Create your Account to join the platform
          </p>
        </div>

        {/* Email Input */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Email"
            className="w-full pl-10 bg-secondary shadow-lg rounded-xl h-14 placeholder-white text-white border-none"
          />
          <MdOutlineEmail className="absolute text-white ml-[15px]" />
        </div>

        {/* Password Input */}
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 bg-secondary shadow-lg rounded-xl h-14 placeholder-white text-white border-none"
          />
          <IoLockClosedOutline className="absolute left-[15px] text-white" />
          {showPassword ? (
            <FaRegEye
              onClick={() => setShowPassword(false)}
              className="absolute right-[15px] text-white cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className="absolute right-[15px] text-white cursor-pointer"
            />
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="relative flex items-center">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full pl-10 bg-secondary shadow-lg rounded-xl h-14 placeholder-white text-white border-none"
          />
          <IoLockClosedOutline className="absolute left-[15px] text-white" />
          {showConfirmPassword ? (
            <FaRegEye
              onClick={() => setShowConfirmPassword(false)}
              className="absolute right-[15px] text-white cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowConfirmPassword(true)}
              className="absolute right-[15px] text-white cursor-pointer"
            />
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="accent-black" />
          <span className="font-mulish text-sm text-[#545454]">
            Agree to Terms & Conditions
          </span>
        </div>

        {/* Sign Up Button */}
        <button className="w-full rounded-full shadow-lg flex items-center justify-center h-[60px] bg-primary text-white text-xl font-bold relative">
          Sign Up
          <FaCircleArrowRight className="absolute right-2 text-5xl p-1" />
        </button>
      </div>

      {/* Social Sign Up */}
      <div className="flex flex-col gap-y-5 mt-6 items-center">
        <span className="font-mulish text-sm text-[#545454]">
          Or Connect With
        </span>
        <div className="flex gap-x-5">
          <Link
            to="/auth/google"
            className="bg-white rounded-full w-30 flex justify-center items-center py-2"
          >
            <img
              src={googleLogo}
              alt="Google Logo"
              className="w-10 rounded-full"
            />
          </Link>
          <Link
            to="/auth/apple"
            className="bg-white rounded-full w-30 flex justify-center items-center py-2"
          >
            <img
              src={appleLogo}
              alt="Apple Logo"
              className="w-10 rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Login Link */}
      <div className="flex justify-center mt-3">
        <span className="text-sm text-[#545454] mr-2">
          Already have an account?
        </span>
        <Link to="/login" className="underline font-semibold">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
