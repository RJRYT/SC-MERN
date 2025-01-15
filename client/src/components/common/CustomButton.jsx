import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";


function CustomButton({ title , onClick}) {
  return (
      <button className="w-full rounded-full shadow-lg flex items-center justify-center h-[60px] bg-primary text-white text-xl font-bold relative" onClick={onClick}>
        {title}
          <FaCircleArrowRight className='absolute right-2 text-5xl p-1' />      
      </button>
  );
}

export default CustomButton;