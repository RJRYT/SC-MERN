import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { FiSend } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
function Header({title,showSettings,showSearch,options}) {
  const [dropDown, setDropDown] = useState(false);

const handleDrop = () => {
setDropDown(!dropDown)
}
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset the success state after 2 seconds
    });
  };
  return (
    <>
    
      <div className="flex flex-col  bg-white">
      <div className="bg-[#1d1f2a] text-white py-4 ">
        <div className='flex items-center justify-between px-4'>
            <div className='flex items-center'>
            
              <button className="border border-white rounded-full text-2xl p-2">
                <MdOutlineArrowBackIos />
              </button>
            
    
            {/* Title */}
            <h1 className="text-base lg:text-xl font-bold ml-2">{title}</h1>
            </div>
    
            {/* Right Section: Settings and Search */}
            <div className="flex items-center">
              {showSettings && (
                <button className="border border-gray-800 rounded-full text-2xl p-2">
                  <VscSettings />
                </button>
              )}
              {showSearch && (
                <button className="rounded-full text-4xl p-2 ml-4">
                  <CiSearch />
                </button>
              )}
            {options && (
              <div className='relative bg-red'>
              <BsThreeDotsVertical className='text-white text-2xl' onClick={handleDrop}/>
              {dropDown && (
                <div className='bg-gray-500 text-black text-sm w-[120px] absolute top-10 rounded-lg right-0 flex p-4 flex-col'>
                  <div className='text-md   flex gap-1 items-center justify-end '>
                    <span>Share</span>
                    <FiSend/>
                  </div>
                  <div className='text-md text-right flex gap-1 items-center justify-end'>
                    <span>Save</span>
                    <MdOutlineFileDownload/>
                  </div>
                  <div className='text-md  text-right flex gap-1 items-center justify-end'>
                    <span>Print</span>
                    <BsPrinter/>
                  </div>
                </div>
              )}
            </div>
            )}   
        </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header