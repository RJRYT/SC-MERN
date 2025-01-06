import { Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa';
import logo from '../../assets/react.svg';
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-fit xl:h-screen bg-[#d9d9db] flex flex-col">
        <div className="text-center mt-10 font-nano text-3xl flex justify-center gap-5  font-extrabold">
          <img src={logo}></img> Service Connect
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-4/12 2xl:w-3/12 flex flex-col gap-y-5 mx-auto mt-14 ">
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
              className="w-full pl-10 bg-[#736967] shadow-[0px_20px_20px_grey] rounded-xl h-14 placeholder-white text-white font-sans border-none"
            />
            <MdOutlineEmail className="absolute text-white ml-[15px]" />
          </div>
          <div className="relative flex items-center">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-10 bg-[#736967] shadow-[0px_20px_20px_grey] rounded-xl h-14 placeholder-white text-white font-sans border-none "
            />
            <IoLockClosedOutline className="absolute left-[15px] text-white" />
            {!show ? (
              <FaEyeSlash
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute right-[15px] text-white"
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
            <button className="w-full rounded-full shadow-[0px_15px_15px_grey] leading-5 relative flex items-center justify-center h-[60px] bg-black text-white text-xl font-bold">
              Sign In
              <FaCircleArrowRight className="absolute right-2 text-5xl " />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-10 items-center">
          <div>
            <span className="font-mulish sm:text-sm md:font-extrabold text-[#545454]">
              Or Connect With
            </span>
          </div>
          <div className="flex justify-center gap-x-10">
            <div className="bg-white rounded-full w-30 flex flex-wrap  items-center py-2">
              <Link to="https://accounts.google.com/v3/signin/identifier?dsh=S1812573153%3A1655944654029516&flowEntry=ServiceLogin&flowName=WebLiteSignIn&ifkv=AX3vH39E0iYVTmn-NoMNM_C35EPrno8LWsRx2Qhr0HApkVLZ-Zc_Vql8ouaSQOiXzEmthrpOPAV5">
                <img
                  className="w-10 rounded-full box-content p-1"
                  src="src\assets\googlelogo.png"
                ></img>
              </Link>
            </div>
            <div className="bg-white rounded-full w-30 flex justify-center items-center py-2">
              <Link to="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwizqrv7geCKAxXWpWYCHXuWN5UYABAAGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiA-Oi7BhA1EiwA2rIu2zGUSDy_EStkZCJbLw_Mx3BDjm7b0u5NL4YH5bzSZiDLMBuetEM1kRoCSJkQAvD_BwE&ohost=www.google.com&cid=CAESVuD2zqumyykH248Imq0emMSrOIv7RkT8aRO2-QnzpRiTrkwgtsQeXUTFJ34eVjsMILD-Vi7b6DghVZ6eyg-3nGM7d18QYP42ZnmiSQn5Z0DGH--TV6T9&sig=AOD64_04Mz2K9M-wuBizT6zQhFaFj0WX6A&q&adurl&ved=2ahUKEwiN1rX7geCKAxX0zDgGHVkJBOgQ0Qx6BAgLEAE">
                <img
                  className="w-10 rounded-full box-content p-1"
                  src="src\assets\applelogo.png"
                ></img>
              </Link>
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
