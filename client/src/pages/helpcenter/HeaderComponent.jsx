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
          HELP CENTER
        </h6>

        <div className="flex items-center space-x-4">
          <button className={`rounded-full border-2 border-t-white flex justify-center items-center p-2  ${activeTab === 'contact' ? 'hidden' : ''}`}>
            <RiEqualizer2Line className="text-white text-3xl sm-only:text-2xl " />
          </button>
          <button className={`flex justify-center items-center p-2  ${activeTab === 'contact' ? 'hidden' : ''}`}>
            <FaQ className="text-white text-3xl sm-only:text-2xl " />
          </button>
        </div>
      </div>

      <div className='bg-gray-300 w-full h-20 flex'>
        <button
          className={`w-1/2 p-4 ${activeTab === 'faq' ? 'bg-gray-bg text-black border-b-2 border-blue-900' : 'bg-white text-gray-600'}`}
          onClick={() => setActiveTab('faq')}
        >
          faqFAQ
        </button>
        <button
          className={`w-1/2 p-4 ${activeTab === 'contact' ? 'bg-bg-gray-bg text-black border-b-2 border-blue-900' : 'bg-white text-gray-600'}`}
          onClick={() => setActiveTab('contact')}
        >
          CONTACT US
        </button>
      </div>

      <div>
        {activeTab === 'faq' ? <FaqPage /> : <ContactUs />}
      </div>
    </div>
  );
}

export default HeaderComponent;
