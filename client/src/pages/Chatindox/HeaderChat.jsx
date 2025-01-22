import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { RiEqualizer2Line } from "react-icons/ri";
import { FaQ } from "react-icons/fa6";
import Chat from './Chat';
import Call from './Call';
import Header from '../../components/header/Header';

import Tabs from '../../components/tabs/Tabs';



const HeaderChat = () => {
    const tabs = [
        { name: 'chat', label: 'Chat' },
        { name: 'call', label: 'Call' },
    ];
    const [activeTab, setActiveTab] = useState('chat');
    return (
        
        <div>
            <Header title="CHAT" showSearch showSettings={true}/>
            <div className= 'bg-gray-bg w-full  flex justify-center p-6 sm-only:mb-4 '>

                <div className=' bg-dim-gray  flex items-center rounded-3xl w-1/2 p-1 sm-only:w-full '>
                <Tabs
                    tabs={tabs}
                    defaultActive="chat"
                    onTabChange={(tabName) => setActiveTab(tabName)}
                />
                </div>


            </div>
            <div>
                {activeTab === 'chat' ? <Chat /> : <Call />}
            </div>
        </div>
    )
}


export default HeaderChat
