import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="flex flex-col my-6  mx-16 bg-white rounded-3xl shadow-md p-4   sm-only:mx-1">
    <button className="w-full text-left focus:outline-none " onClick={onClick}>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold ">{title}</span>
        {isOpen ? <FaAngleUp className="w-5 h-5" /> : <FaAngleDown className="w-5 h-5" />}
      </div>
    </button>
    {isOpen && <div className="mt-4 font-semibold">{content}</div>}
  </div>
);

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-300 w-full min-h-screen">
      <div className="flex justify-around m-0 pt-4">
        {['General', 'Account', 'Payment', 'Service'].map((tab) => (
          <button
            key={tab}
            className={`w-1/6 p-5 border-2 border-black rounded-full mx-2 sm-only:w-1/2  ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'General' && (
          <div>
            {[
              { title: 'How do I manage my notifications?', content: "To manage notifications, go to 'Settings,' select 'Notification Settings,' and customize your preferences." },
              { title: 'How do I start a guided meditation session?', content: "To start a guided meditation session, open the app, go to the 'Meditations' section, and select a session that suits your needs." },
              { title: 'How do I join a support group?', content: "To join a support group, navigate to the 'Groups' section, browse the available support groups, and click 'Join' on the one that interests you." },
              { title: 'How do I manage my notifications?', content: "To manage notifications, go to 'Settings,' select 'Notification Settings,' and customize your preferences." },

              { title: 'Is my data safe and private?', content: 'Yes, your data is safe and private. We use advanced encryption and security protocols to ensure your information is protected.' },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqPage;
