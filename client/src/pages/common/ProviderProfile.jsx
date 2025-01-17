import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaImages } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

import wirelogo from "../../assets/images/wiringIcone.png";
import pumbClean from "../../assets/images/pumbCleanLogo.png";
import locksetChanher from "../../assets/images/locksetChanger.png";
import audioInstall from "../../assets/images/audioInstallicone.png";
import waterTankIcone from "../../assets/images/watertangicone.png";
import Blackbutton from "../../components/blackbutton/Blackbutton";
import Header from "../../components/header/Header";

const ProviderProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" flex flex-col bg-[#D9D9DB]">
      {/* Header Section */}
      <Header title="PROFILE"/>

      {/* Image Section */}
      <div className="relative flex items-center justify-center w-full max-w-[700px] h-[200px] md:h-[300px] bg-[#736A68] mx-auto ">
        {/* Image Element */}

        {/* Message Icon */}
        <div className="absolute bottom-[-30px] right-9 bg-[#1D1F2A] rounded-full  shadow-lg p-3">
          <LuMessageCircleMore size={30} color="white" />
        </div>
      </div>

      {/* Spacer */}
      <div className="w-full max-w-[700px] h-7 bg-[#D9D9DB] mx-auto"></div>

      {/*all Content Section div  */}
      <div className="w-full max-w-[700px] bg-[#D9D9DB] px-4 md:px-6 mx-auto ">
        {/* Provider Details */}
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
          <p className="flex justify-between  font-bold">
            {" "}
            <span className="text-[#FF6B00]">3 km away</span>{" "}
            <span className="flex items-center">
              <TiStar size={25} color="#FAC025" className=" items-center" /> 4.2
              | 32 Reviews
            </span>
          </p>
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-bold mt-2 ml-4">
                William S. Cunningham
              </h3>
              <p className="text-gray-600 ml-4 font-bold">Plumber</p>
            </div>

            {/* Service Details */}
            <p className="flex items-center space-x-4 text-sm font-bold ">
              <span className="flex items-center ml-4 mt-2">
                <IoVideocamOutline
                  size={20}
                  color="black"
                  className="mr-1 text-blue-500"
                />{" "}
                21 videos & images
              </span>
              <span className="flex items-center mt-2">
                <MdOutlineAccessTime
                  size={20}
                  color="black"
                  className="mr-1 text-green-500"
                />{" "}
                2 Service listed
              </span>
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
          <h4 className="text-lg md:text-xl font-semibold mb-4">About</h4>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            autem nesciunt saepe quia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam autem nesciunt saepe quia! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veniam autem nesciunt
            saepe quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam autem nesciunt saepe quia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam autem nesciunt saepe quia!
            <span className={`${isExpanded ? "" : "hidden"}`}>
              &nbsp;Consectetur voluptate numquam assumenda quo ratione fuga
              ipsa autem? Dolorem repellat qui saepe voluptatibus maiores
              voluptas modi.Consectetur voluptate numquam assumenda quo ratione
              fuga ipsa autem? Dolorem repellat qui saepe voluptatibus maiores
              voluptas modi.Consectetur voluptate numquam assumenda quo ratione
              fuga ipsa autem? Dolorem repellat qui saepe voluptatibus maiores
              voluptas modi.
            </span>
          </p>
          <button
            onClick={handleToggle}
            className="mt-4 text-black hover:underline font-medium text-sm"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* service  */}
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
          <div>
            <h6 className="font-bold text-lg">Services</h6>
            <div className="text-[#545454] mt-4 space-y-2 ">
              <div className="flex items-center space-x-3 p-2">
                <img src={wirelogo} alt="Wire Logo" className="w-6 h-6" />
                <p>Plumbing</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <HiOutlineDevicePhoneMobile className="w-6 h-6 text-[#545454]" />
                <p>Access Mobile, Desktop & TV</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <img
                  src={waterTankIcone}
                  alt="Water Tank Icon"
                  className="w-6 h-6"
                />
                <p>Water tank fitting</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <img
                  src={audioInstall}
                  alt="Audio Install Icon"
                  className="w-6 h-6"
                />
                <p>Audio installation</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <img
                  src={locksetChanher}
                  alt="Lockset Change Icon"
                  className="w-6 h-6"
                />
                <p>Lockset change</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <img
                  src={pumbClean}
                  alt="Pump Cleaning Icon"
                  className="w-6 h-6"
                />
                <p>Pump cleaning</p>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <img src={wirelogo} alt="Wiring Icon" className="w-6 h-6" />
                <p>Wiring</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
          <div className="flex justify-between items-center">
            <h6 className="text-lg font-bold">Reviews</h6>
            <span className="text-black text-sm font-semibold cursor-pointer">
              SEE ALL
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <div className="flex items-start space-x-4">
              <img
                src=""
                alt=""
                className="bg-gray-300 rounded-full w-12 h-12"
              />

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  {/* Name */}
                  <h6 className="font-bold text-base">William S. Cunningham</h6>
                  {/* Rating */}

                  <div className="flex items-center justify-center w-[79px] h-[26px] gap-0 border-2 border-[#4D81E5] rounded-[13px] bg-[#E8F1FF] opacity-100">
                    <span className="text-sm text-yellow-500">⭐</span>
                    <span className="font-semibold text-sm text-gray-600">
                      4.5
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-600 mt-1">
                  The Course is Very Good dolor sit amet, consectetur adipiscing
                  elit. Naturales divitias dixit parab les esse, quod parvo.
                </p>

                <div className="flex items-center justify-start text-black font-bold text-sm mt-2 space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-red-500">❤️</span>
                    <span className="">578</span>
                  </div>
                  <span>2 Weeks Ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <img
                src=""
                alt=""
                className="bg-gray-300 rounded-full w-12 h-12"
              />

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h6 className="font-bold text-base">Martha E. Thompson</h6>

                  <div className="flex items-center justify-center w-[79px] h-[26px] gap-0 border-2 border-[#4D81E5] rounded-[13px] bg-[#E8F1FF] opacity-100">
                    <span className="text-sm text-yellow-500">⭐</span>
                    <span className="font-semibold text-sm text-gray-600">
                      4.5
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  The Course is Very Good dolor sit amet, consectetur adipiscing
                  elit. Naturales divitias dixit parab les esse, quod parvo.
                </p>

                <div className="flex items-center justify-start text-black font-bold text-sm mt-2 space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-red-500">❤️</span>
                    <span className="">578</span>
                  </div>
                  <span>2 Weeks Ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
          <p className="text-black font-bold text-lg mb-4">Images</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="flex justify-center items-center  rounded-lg h-24"
              >
                <FaImages size={40} className="" />
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
          <p className="text-black font-bold text-lg mb-4">Videos</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="flex justify-center items-center  rounded-lg h-24"
              >
                <IoVideocamOutline size={40} className="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-3 mb-3">
        <div className="w-[350px] md:w-[400px] ">
        <Blackbutton label="Book Service"/>
        </div>
        </div>
     
       
      </div>

      {/* Sticky Footer Button */}
      {/* <div className="fixed bottom-0 left-0 w-full bg-transparent p-4">
        <button
          className="flex items-center justify-between w-full max-w-md mx-auto text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none focus:ring-4 
                     focus:ring-gray-400 font-medium rounded-full text-base px-5 py-3 transition duration-300"
        >
          <span className="flex-grow text-center">Book Service</span>
          <IoIosArrowRoundForward
            className="bg-white rounded-full"
            color="black"
            size={34}
          />
        </button>
      </div> */}

      {/* Spacer */}
      
    </div>
  );
};

export default ProviderProfile;
