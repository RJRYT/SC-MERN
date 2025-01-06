import { Checkbox, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaCircleArrowRight } from 'react-icons/fa6';
import logo from '../../assets/images/logo.png';

const SignUp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-fit xl:h-screen bg-[#d8d8e5] flex flex-col">
        <div className="text-center mt-10 font-nano text-3xl font-extrabold gap-5 flex justify-center">
          <img src={logo}></img> Service Connect
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-4/12 2xl:w-3/12 flex flex-col gap-y-5 mx-auto mt-[40px]">
          <div className="font-semibold text-base leading- font-jost sm:text-2xl">
            Getting Started...!
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="Email"
              className="bg-[#736967] shadow-[0px_5px_15px_grey] placeholder-opacity-75  rounded-xl pl-10 w-full h-14 font-sans placeholder-white  text-white border-none "
            />
            <MdOutlineEmail className="absolute text-white ml-[15px]" />
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="Password"
              className="bg-[#736967] placeholder-opacity-70 shadow-[0px_5px_15px_grey]  rounded-xl pl-10 w-full h-14 font-sans placeholder-white  text-white border-none"
              type={show ? 'text' : 'password'}
            />
            <IoLockClosedOutline className="absolute left-[15px] text-white" />
            {!show ? (
              <FaEyeSlash
                className="absolute right-[15px] text-white"
                onClick={() => {
                  setShow(!show);
                }}
              />
            ) : (
              <FaRegEye
                className="absolute right-[15px] text-white"
                onClick={() => {
                  setShow(!show);
                }}
              />
            )}
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="ConformPassword"
              className="bg-[#736967] shadow-[0px_20px_20px_grey]  rounded-xl pl-10 w-full h-14 font-sans placeholder-white placeholder-opacity-70 text-white border-none "
              label="Email"
              type={show ? 'text' : 'password'}
            />
            <IoLockClosedOutline className="absolute left-[15px] text-white" />
            {!show ? (
              <FaEyeSlash
                className="absolute right-[15px] text-white"
                onClick={() => {
                  setShow(!show);
                }}
              />
            ) : (
              <FaRegEye
                className="absolute right-[15px]"
                onClick={() => {
                  setShow(!show);
                }}
              />
            )}
          </div>
          <div className="flex items-center">
            <input type="checkbox"></input>
            <span className="font-mulish sm:text-xs md:font-extrabold md:text-sm text-[#545454]">
              Agree to Terms & Condition
            </span>
          </div>
          <div>
            <button className="w-full rounded-full shadow-[0px_15px_15px_grey] leading-5 relative flex items-center justify-center h-[60px] bg-black text-white text-xl font-bold">
              Sign In
              <FaCircleArrowRight className="absolute right-2 text-5xl " />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-7 items-center">
          <div>
            <span className="font-mulish sm:text-sm md:font-extrabold text-[#545454]">
              Or Connect With
            </span>
          </div>
          <div className="flex justify-center gap-x-10">
            <div className="bg-white rounded-full w-30 flex justify-center items-center py-2">
              <img
                className="w-10 rounded-full"
                src="src\assets\googlelogo.png"
              ></img>
            </div>
            <div className="bg-white rounded-full w-30 flex justify-center items-center py-2">
              <img
                className="w-10 rounded-full"
                src="src\assets\applelogo.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <span className="font-mulish sm:text-xs md:font-extrabold md:text-sm text-[#545454]">
            Already have an Account?
          </span>
          <span> .</span>
          <Link className="underline font-nano font-semibold" to="/login">
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
