import { Checkbox, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { MdOutlineArrowCircleRight } from 'react-icons/md';
const SignUp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-screen bg-[#d8d8e5] flex flex-col">
        <div className="text-center mt-10 font-nano text-3xl font-extrabold">
          Service Connect
        </div>
        <div className="w-10/12 flex flex-col gap-y-5 mx-auto mt-[40px]">
          <div className="font-semibold text-base leading- font-jost sm:text-2xl">
            Getting Started...!
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="Email"
              className="bg-[#736967] rounded-md pl-7 w-full h-10 font-sans placeholder-white text-black border-none ring-2 ring-pink-400"
              label="Email"
            />
            <MdEmail className="absolute left-[5px] " />
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="Password"
              className="bg-[#736967] rounded-md pl-7 w-full h-10 font-sans placeholder-white text-black border-none ring-2 ring-pink-400"
              label="Email"
              type={show ? 'text' : 'password'}
            />
            <IoLockClosedOutline className="absolute left-[5px]" />
            {!show ? (
              <FaEyeSlash
                className="absolute right-[15px]"
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
          <div className="relative flex items-center">
            <input
              placeholder="ConformPassword"
              className="bg-[#736967] rounded-md pl-7 w-full h-10 font-sans placeholder-white text-black border-none ring-2 ring-pink-400"
              label="Email"
              type={show ? 'text' : 'password'}
            />
            <IoLockClosedOutline className="absolute left-[5px]" />
            {!show ? (
              <FaEyeSlash
                className="absolute right-[15px]"
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
            <Button
              fullWidth
              className="rounded-full leading-5 relative flex items-center justify-center"
            >
              Sign In
              <MdOutlineArrowCircleRight className="absolute right-4 text-3xl" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-10 items-center">
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
          <Link className="underline font-nano font-semibold" to="/login">
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
