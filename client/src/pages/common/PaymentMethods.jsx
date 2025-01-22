import { IoIosArrowRoundForward } from "react-icons/io";
import { CiCircleChevLeft } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import Header from "../../components/header/Header";
import Blackbutton from "../../components/blackbutton/Blackbutton";

const PaymentMethods = () => {
  return (
    <div className="h-screen w-screen flex-col bg-[#D9D9DB] items-center">
      {/* Header Section */}
      
      <Header title="PAYMENT METHODS"/>

      {/* Main Content Section */}
    <div className=" w-screen flex justify-center ">
    <div className="w-[350px] md:w-[700px] max-w-[1000px]  px-2 py-8 flex-grow flex flex-col items-center">
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
      <div className=" flex justify-center bottom-10 px-6 w-[350px] md:w-[380px] fixed ">
       <Blackbutton label="Enroll Course - $55"/>
      </div>
    </div>
    </div>
  );
};

export default PaymentMethods;
