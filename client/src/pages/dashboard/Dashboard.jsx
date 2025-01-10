import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 p-6">
        <p>Welcome to the Dashboard! Use the links below to navigate:</p>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/dashboard/profile"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Go to Profile
            </a>
          </li>
          <li>
            <a
              href="/dashboard/settings"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Go to Settings
            </a>
          </li>
        </ul>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
