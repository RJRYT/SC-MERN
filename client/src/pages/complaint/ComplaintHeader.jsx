import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

function ComplaintHeader() {
  return (
    <div className='bg-dark-purple text-white flex items-center justify-between p-6 pt-12 relative '>
      <button className='rounded-full border-2 border-white flex justify-center items-center p-2'>
        <IoIosArrowBack className="text-white text-3xl sm-only:text-2xl" />
      </button>
      <h6 className='font-bold text-xl sm:text-2xl absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap mobile-320:ml-4'>
        COMPLAINT FORM
      </h6>
    </div>
  );
}

export default ComplaintHeader;
