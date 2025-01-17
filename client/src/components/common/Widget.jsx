import React from 'react'
import { IoGrid } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { GoStopwatch } from "react-icons/go";
const Widget = () => {
  return (
    <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 md:hidden lg:hidden sm:block'>
      <div className='flex justify-center items-center w-[355px] h-[50px] py-2 text-xl px-[5px] space-x-8 bg-[#736a68] rounded-xl text-white shadow-bottom '>
<IoGrid/><FaBookBookmark/><GoStopwatch/><RiPagesFill/><FaPlus/><BsQuestionCircleFill/>
    </div>
    </div>
    
  )
}

export default Widget