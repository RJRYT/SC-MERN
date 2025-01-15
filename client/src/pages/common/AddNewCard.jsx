import { CiCircleChevLeft } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

import chipicone from "../../assets/images/chipIcone.png";
import validthruIcone from "../../assets/images/Valid Thru.png";

const AddNewCard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9D9DB] items-center">
      {/* Header Section */}
      <div className="flex items-center w-full bg-[#1D1F2A] h-[60px] px-4 shadow-md">
        <CiCircleChevLeft size={30} color="white" className="mr-4" />
        <h3 className="text-white text-[24px] font-semibold">ADD CARD</h3>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1000px] px-6 py-8 flex-grow flex flex-col items-center">
        {/* Card Component */}
        <div className="w-full max-w-[500px] h-auto rounded-lg bg-gradient-to-r from-[#1D1F2A] via-[#292E3A] to-[#1D1F2A] text-white p-6 shadow-lg flex flex-col justify-between mb-6">
          <div className="flex justify-start mb-6">
            <img src={chipicone} alt="Chip Icon" className="w-12 h-12" />
          </div>

          <div>
            <h6 className="text-2xl font-semibold tracking-wide mb-4">
              1234 5678 3456 7654
            </h6>

            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={validthruIcone}
                  alt="Valid Thru Icon"
                  className="w-6 h-6"
                />
                <div>
                  <p className="text-base font-bold">12/28</p>
                </div>
              </div>
            </div>

            <h6 className="text-base font-bold uppercase text-left">
              Timmy C. Hernandez
            </h6>
          </div>
        </div>

     {/* Card Details Form */}
<div className="w-full max-w-[500px] space-y-4">
  <div>
    <label className="text-gray-800 font-semibold" htmlFor="cardName">
      Card Name
    </label>
    <input
      id="cardName"
      type="text"
      placeholder="Enter Card Name"
      className="w-full bg-white text-gray-800 p-3 rounded-lg shadow-md placeholder-black"
    />
  </div>

  <div>
    <label className="text-gray-800 font-semibold" htmlFor="cardNumber">
      Card Number
    </label>
    <input
      id="cardNumber"
      type="text"
      placeholder="**** **** **** 2322"
      className="w-full bg-white text-gray-800 p-3 rounded-lg shadow-md placeholder-black"
    />
  </div>

  <div className="flex space-x-4">
    <div className="w-full">
      <label className="text-gray-800 font-semibold" htmlFor="expDate">
        Expiry Date
      </label>
      <input
        id="expDate"
        type="text"
        placeholder="23/28"
        className="w-full bg-white text-gray-800 p-3 rounded-lg shadow-md placeholder-black"
      />
    </div>

    <div className="w-full">
      <label className="text-gray-800 font-semibold" htmlFor="cvv">
        CVV
      </label>
      <input
        id="cvv"
        type="text"
        placeholder="***"
        className="w-full bg-white text-gray-800 p-3 rounded-lg shadow-md placeholder-black"
      />
    </div>
  </div>
</div>


      </div>

      {/* Add New Card Button */}
      <div className="w-full flex justify-center px-6 fixed bottom-8">
        <button
          className="flex items-center justify-between w-full max-w-md text-white bg-[#1D1F2A] hover:bg-gray-900 focus:outline-none focus:ring-4 
                     focus:ring-gray-400 font-medium rounded-full text-base sm:text-lg px-6 py-3 transition duration-300"
        >
          <span className="flex-grow text-center">Add New Card</span>
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

export default AddNewCard;
