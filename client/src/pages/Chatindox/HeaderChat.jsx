import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { RiEqualizer2Line } from "react-icons/ri";
import { FaQ } from "react-icons/fa6";
import Chat from './Chat';
import Call from './Call';





const HeaderChat = () => {
    const [activeTab, setActiveTab] = useState('chat');
    return (
        
        <div className=''>
            <div className='bg-dark-purple text-white p-6 pt-12 h-28 flex items-center justify-between'>
                <button className='rounded-full border-2 border-white flex justify-center items-center p-2 '>
                    <IoIosArrowBack className="text-white text-3xl sm-only:text-2xl" />
                </button>

                <h6 className='text-center font-bold md:w-auto md:flex-grow-0 text-lg md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2 sm-only:-ml-20'>
                    CHAT
                </h6>

                <div className="flex items-center space-x-4">
                    <button className='rounded-full border-2 border-t-white flex justify-center items-center p-2  '>
                        <RiEqualizer2Line className="text-white text-3xl sm-only:text-2xl " />
                    </button>
                    <button className='flex justify-center items-center p-2'>
                        <FaQ className="text-white text-4xl sm-only:text-2xl " />
                    </button>
                </div>


            </div>
            <div className= 'bg-gray-bg w-full h-32 flex justify-center p-6 sm-only:mb-4'>

                <div className=' bg-dim-gray  flex items-center rounded-3xl w-1/2 px-2 py-3 border-2 sm-only:w-full'>
                    <button  className={`w-1/2 rounded-3xl p-4 font-bold  text-lg ${activeTab === 'chat' ? 'bg-white text-text-purple' : 'text-white'} sm-only:h-12 flex justify-center items-center`}
                        onClick={() => setActiveTab('chat')}>
                        Chat
                    </button>
                    <button className={`w-1/2 rounded-3xl p-4 font-bold  text-lg ${activeTab === 'call' ? 'bg-white text-text-purple' : 'text-white'} sm-only:h-12 flex justify-center items-center`}
                        onClick={() => setActiveTab('call')}>
                        Call
                    </button>
                </div>


            </div>
            <div>
                {activeTab === 'chat' ? <Chat /> : <Call />}
            </div>
        </div>
    )
}


export default HeaderChat
