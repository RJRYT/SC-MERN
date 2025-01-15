import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiEqualizer2Line } from 'react-icons/ri';
import { FaQ } from 'react-icons/fa6';

function HeaderComponent() {
  const [activeButton, setActiveButton] = useState('ongoing'); // Tracks the active button

  return (
    <div>
      {/* Header Section */}
      <div className="bg-dark-purple text-white p-6 pt-12 h-28 flex items-center justify-between sm-only:flex sm-only:gap-3">
        <button className="rounded-full border-2 border-white flex justify-center items-center p-2">
          <IoIosArrowBack className="text-white text-3xl sm-only:text-2xl" />
        </button>

        <h6 className="text-center font-bold text-lg md:text-2xl">JOBS</h6>

        <div className="flex items-center space-x-4">
          <button className="rounded-full border-2 border-white flex justify-center items-center p-2">
            <RiEqualizer2Line className="text-white text-3xl sm-only:text-2xl" />
          </button>
          <button className="flex justify-center items-center p-2">
            <FaQ className="text-white text-4xl sm-only:text-2xl" />
          </button>
        </div>
      </div>

      {/* Button Section */}
      <div className="bg-btn-color w-full h-20 flex mt-4 rounded-full ">
        {/* Ongoing Button */}
        <button
          className={`w-1/2 px-6 py-2 m-2 rounded-full ${
            activeButton === 'ongoing'
              ? 'bg-white text-btn-color text-bold border border-btn-color'
              : 'bg-btn-color text-white text-bold'
          }`}
          onClick={() => setActiveButton('ongoing')}
        >
          Ongoing
        </button>

        {/* Completed Button */}
        <button
          className={`w-1/2 px-6 py-2 m-2 rounded-full ${
            activeButton === 'complete'
              ? 'bg-white text-btn-color text-bold border border-btn-color'
              : 'bg-btn-color text-white text-bold'
          }`}
          onClick={() => setActiveButton('complete')}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
