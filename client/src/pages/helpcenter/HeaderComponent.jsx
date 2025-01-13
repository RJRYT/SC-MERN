import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiEqualizer2Line } from "react-icons/ri";
import { FaQ } from "react-icons/fa6";
import FaqPage from './FaqPage';
import ContactUs from './ContactUs';

function HeaderComponent() {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div>
      <div className='bg-dark-purple text-white p-6 pt-12 h-28 flex items-center justify-between  sm-only:flex sm-only:gap-3'>

        <button className='rounded-full border-2 border-white flex justify-center items-center p-2'>
          <IoIosArrowBack className="text-white text-3xl sm-only:text-2xl" />
        </button>
        
        <h6 className={`text-center font-bold md:w-auto md:flex-grow-0 text-lg md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${activeTab === 'contact' ? ' sm-only:gap-3 sm-only:mr-16':''}`}>
          JOBS
        </h6>

        <div className="flex items-center space-x-4">
          <button className={`rounded-full border-2 border-t-white flex justify-center items-center p-2  ${activeTab === 'contact' ? 'hidden' : ''}`}>
            <RiEqualizer2Line className="text-white text-3xl sm-only:text-2xl " />
          </button>
          <button className={`flex justify-center items-center p-2  ${activeTab === 'contact' ? 'hidden' : ''}`}>
            <FaQ className="text-white text-4xl sm-only:text-2xl " />
          </button>
        </div>
      </div>

      <div className="bg-btn-color w-full h-20 flex mt-10 rounded-full ">
  <button
    className={`w-1/2 px-6 py-2 m-2   ${
      activeTab === 'ongoing'
        ? 'bg-white text-black border-b-2 rounded-full border-blue-900'
        : 'bg-white text-gray-600 rounded-full'
    }`}
    onClick={() => setActiveTab('ongoing')}
  >
    Ongoing
  </button>
  <button
    className={`w-1/2 px-6 py-2 m-2 ${
      activeTab === 'complete'
        ? 'bg-white text-black border-b-2 rounded-full border-blue-900'
        : 'bg-white text-gray-600 rounded-full'
    }`}
    onClick={() => setActiveTab('complete')}
  >
    Completed
  </button>
</div>


      
    </div>
  );
}

export default HeaderComponent;
