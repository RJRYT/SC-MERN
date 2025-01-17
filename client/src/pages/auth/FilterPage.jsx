import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const FilterPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg h-screen overflow-auto scrollbar-hide">
        {/* Header */}
        <header className="flex items-center w-full bg-white h-[60px] px-4 border-b sticky top-0">
          <FaArrowLeftLong
            size={30}
            color="black"
            className="mr-4 cursor-pointer"
            aria-label="Go Back"
          />
          <h3 className="text-black text-[20px] sm:text-[24px] font-semibold flex-1">
            Filter
          </h3>
          <button className="text-black text-sm sm:text-base font-medium sm:max-w-none sm:ml-auto">
            Clear
          </button>
        </header>

        {/* Main Content */}
        <div className="p-4 space-y-6">
          {/* Subcategories Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Subcategories:</h4>
            <div className="space-y-2 ml-5">
              {[
                "Delivery Services",
                "Home Appliance Repair",
                "Laundry Service",
                "Business Services",
                "Event And Parties",
                "Cleaning Service",
                "Electronics Repair",
                "Technology Service",
                "Health And Fitness",
                "Beauty Services",
              ].map((category, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="checkbox-style" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Price:</h4>
            <div className="space-y-2 ml-5">
              {["Paid", "Free"].map((price, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="checkbox-style" />
                  <span>{price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Rating:</h4>
            <div className="space-y-2 ml-5">
              {[
                "4.5 & Up Above",
                "4.0 & Up Above",
                "3.5 & Up Above",
                "3.0 & Up Above",
              ].map((rating, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="checkbox-style" />
                  <span>{rating}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Duration:</h4>
            <div className="space-y-2 ml-5">
              {["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"].map(
                (duration, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox-style" />
                    <span>{duration}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Verify Button */}
        <div className="flex justify-center w-full mb-6 px-4">
          <button
            className="flex items-center justify-between w-full text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none 
                       focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-lg px-6 py-4 transition duration-300"
          >
            <span className="flex-grow text-center">Apply</span>
            <IoIosArrowRoundForward
              className="bg-white rounded-full"
              color="black"
              size={34}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
