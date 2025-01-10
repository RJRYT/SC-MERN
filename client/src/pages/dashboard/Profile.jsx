import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p className="text-gray-600">
        This is the profile page where user details are displayed.
      </p>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500"
          placeholder="John Doe"
          value="John Doe"
          readOnly
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500"
          placeholder="john.doe@example.com"
          value="john.doe@example.com"
          readOnly
        />
      </div>
    </div>
  );
};

export default Profile;
