import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { RiEqualizer2Line } from "react-icons/ri";
import { FaQ } from "react-icons/fa6";
import FaqPage from './FaqPage';
import ContactUs from './ContactUs';
import Header from '../../components/header/Header';



function HeaderComponent() {
  const [activeButton, setActiveButton] = useState('ongoing'); // Tracks the active button

  return (

    <div className='flex w-full flex-col'>
     

<Header title="HELP CENTER" showSearch showSettings/>
  


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
