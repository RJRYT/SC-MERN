
import React from 'react';

export const CongratulationsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm w-full">
  
        <div className="relative mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
            className="w-20 h-20 mx-auto rounded-full border-4 border-yellow-400"
          />
          <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Congratulations</h1>
        <p className="text-gray-600">
          Your Account is Ready to Use
        </p>

      </div>
    </div>
  );
};

