import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

const SearchBarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleBack = () => {
    console.log("Back button clicked");
  };
  const handleSeeAll = () => {
    console.log("See All button clicked");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setRecentSearches([searchTerm, ...recentSearches.slice(0, 4)]);
      setSearchTerm("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto">
        <div className="flex items-center space-x-2 mb-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center text-black"
          >
            <IoMdArrowBack size={24} className="mr-2" />
          </button>
          <h2 className="text-lg font-semibold text-gray-800">SEARCH</h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <CiSearch size={20} />
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for..."
            className="w-full h-12 pl-10 pr-14 rounded-lg bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-gray-300 text-center"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center"
            >
              <HiOutlineAdjustmentsHorizontal
                size={20}
                className="text-black"
              />
            </button>
          </div>
        </div>
      </form>

      {recentSearches.length > 0 && (
        <div className="mt-6 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-700">Recents Search</h3>

            <button
              type="button"
              onClick={handleSeeAll} // Add your "See All" handler here
              className="flex items-center space-x-1 text-sm font-medium text-black"
            >
              <span>SEE ALL</span>
              <MdNavigateNext size={20} />
            </button>
          </div>
          <ul className="text-gray-600 space-y-1">
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-1 border-b"
              >
                <span>{search}</span>
                <button className="text-gray-700">X</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBarPage;