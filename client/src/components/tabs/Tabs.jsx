import React, { useState } from 'react';

const Tabs = ({ tabs, onTabChange, defaultActive }) => {
    const [activeTab, setActiveTab] = useState(defaultActive || tabs[0].name);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        onTabChange(tabName); // Notify the parent component about the active tab change
    };

    return (
        <div className="bg-dim-gray flex items-center rounded-3xl w-full p-1 sm-only:w-full mt-3">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    className={`w-full rounded-3xl p-4 font-bold text-lg ${
                        activeTab === tab.name ? 'bg-white text-text-purple' : 'text-white'
                    } sm-only:h-12 flex justify-center items-center`}
                    onClick={() => handleTabClick(tab.name)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
