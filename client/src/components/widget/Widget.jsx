import React from 'react'
import { IoGrid } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
const Widget = () => {
  return (
    <div className='flex justify-center items-center w-[300px] py-2 text-2xl px-[5px] gap-9 bg-[#736a68] rounded-xl text-white shadow-bottom '>
<IoGrid/><FaBookBookmark/><RiPagesFill/><FaPlus/><BsQuestionCircleFill/>
    </div>
  )
}

export default Widget