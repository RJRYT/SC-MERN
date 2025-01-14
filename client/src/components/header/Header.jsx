import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

function Header({title,showSettings,showSearch}) {
  return (
    <>
    
      <div className="flex flex-col h-full bg-white">
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
        </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header