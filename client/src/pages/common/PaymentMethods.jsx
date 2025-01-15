import { IoIosArrowRoundForward } from "react-icons/io";
import { CiCircleChevLeft } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const PaymentMethods = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9D9DB] items-center">
      {/* Header Section */}
      <div className="flex items-center w-full bg-[#1D1F2A] h-[60px] px-4 shadow-md">
        <CiCircleChevLeft size={30} color="white" className="mr-4" />
        <h3 className="text-white text-[24px] font-semibold">
          PAYMENT METHODS
        </h3>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-[1000px] px-6 py-8 flex-grow flex flex-col items-center">
        {/* Graphic Design Section */}
        <div className="mb-6 h-[200px] rounded-lg flex items-center justify-start w-full bg-white px-4">
          {/* Black Box */}
          <div className="w-[100px] h-[100px] bg-black rounded-2xl flex items-center justify-center mr-4"></div>

          <div>
            <p className="text-orange-800 font-bold">Graphic Design</p>
            <p className="text-black font-bold">Setup your Graphic Design...</p>
          </div>
        </div>

        {/* Paypal Option */}
        <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4 flex justify-end items-center">
          <span className="text-gray-800 font-semibold mr-4">Paypal</span>
          <div className="roundeg-full">
            <input
              type="checkbox"
              className="rounded-full form-checkbox w-4 h-4 text-[#1D1F2A] "
            />
          </div>
        </div>

        {/* Google Pay Option */}
        <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4 flex justify-end items-center">
          <span className="text-gray-800 font-semibold mr-4">Google Pay</span>
          <input
            type="checkbox"
            className=" rounded-full form-checkbox w-4 h-4 text-[#1D1F2A] "
          />
        </div>
      </div>

      <div className="fixed bottom-24 right-6 w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition duration-300">
        <FiPlus size={30} />
      </div>

      {/* Enroll Button */}
      <div className="w-full flex justify-center px-6 fixed bottom-8">
        <button
          className="flex items-center justify-between w-full max-w-md text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none focus:ring-4 
                     focus:ring-gray-400 font-medium rounded-full text-base sm:text-lg px-6 py-3 transition duration-300"
        >
          <span className="flex-grow text-center">Enroll Course - $55</span>
          <IoIosArrowRoundForward
            className="bg-white rounded-full p-2"
            color="black"
            size={34}
          />
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
