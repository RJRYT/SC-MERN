import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotifications(!notifications);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">
            Enable Notifications
          </label>
          <button
            className={`w-12 h-6 rounded-full ${
              notifications ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={toggleNotifications}
          >
            <span
              className={`block w-5 h-5 bg-white rounded-full transition-transform ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            ></span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Dark Mode</label>
          <button
            className={`w-12 h-6 rounded-full ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={toggleDarkMode}
          >
            <span
              className={`block w-5 h-5 bg-white rounded-full transition-transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
