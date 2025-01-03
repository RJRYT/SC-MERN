import { Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { MdOutlineArrowCircleRight } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-screen bg-[#d9d9db] flex flex-col">
        <div className="text-center mt-10 font-nano text-3xl font-extrabold">
          Service Connect
        </div>
        <div className="w-10/12 flex flex-col gap-y-5 mx-auto mt-20">
          <div>
            <h3 className="font-jost font-semibold sm:text-2xl">
              Let's Sign In...!
            </h3>
            <p className="font-mulish font-bold sm:text-sm text-[#545454]">
              Login to your Account to continue your courses
            </p>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Email"
              className="w-full pl-7 bg-[#736967] rounded-md h-10 placeholder-white text-black font-sans border-none ring-2 ring-pink-400"
            />
            <MdEmail className="absolute left-[5px] " />
          </div>
          <div className="relative flex items-center">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-7 bg-[#736967] rounded-md h-10 placeholder-white text-black font-sans border-none ring-2 ring-pink-400"
            />
            <IoLockClosedOutline className="absolute left-[5px]" />
            {!show ? (
              <FaEyeSlash
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute right-[15px]"
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
          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox"></input>
              <span className="font-mulish sm:text-xs md:font-extrabold md:text-sm text-[#545454]">
                Remember Me
              </span>
            </div>
            <div className="font-mulish sm:text-xs md:font-extrabold md:text-sm text-[#545454]">
              Forgot Password?
            </div>
          </div>
          <div>
            <Button
              fullWidth
              className="rounded-full relative flex items-center justify-center"
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
        <div className="flex justify-center mt-10">
          <span className="font-mulish sm:text-xs md:font-extrabold md:text-sm text-[#545454]">
            Already have an Account?
          </span>
          <Link className="underline" to="/signup">
            <span className="font-nano font-semibold">SIGNUP</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
