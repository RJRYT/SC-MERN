import React from "react";
import { BiCategory } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";
import { TiCreditCard } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Header from "../../components/header/Header";

function Notification() {
  return (
    <>
      <Header title="NOTIFICATION" showBackButton={true}/>


      {/* Notifications Section */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-6">
          {/* Today Section */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-bold text-gray-600 mb-4 mt-4 ms-3">
              Today
            </h2>
            {/* Notification 1 */}
            <div className="flex items-center bg-white p-4 mb-4 rounded-lg shadow">
              <div className="text-2xl text-gray-700 mr-4">
                <BiCategory />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base lg:text-lg mb-1">
                  New Category Course!
                </h3>
                <p className="font-semibold text-gray-600 text-sm lg:text-base">
                  New the 3D Design Course is Available...
                </p>
              </div>
            </div>
            {/* Notification 2 */}
            <div className="flex items-center bg-white p-4 mb-4 rounded-lg shadow">
              <div className="bg-[#1d1f2a] p-2 rounded-full text-white flex items-center justify-center mr-4">
                <TiCreditCard className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base lg:text-lg mb-1">
                  New Category Course!
                </h3>
                <p className="font-semibold text-gray-600 text-sm lg:text-base">
                  New the 3D Design Course is Available...
                </p>
              </div>
            </div>
            {/* Notification 3 */}
            <div className="flex items-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl text-gray-700 mr-4">
                <IoTicketOutline />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base lg:text-lg mb-1">
                  Today's Special Offers
                </h3>
                <p className="font-semibold text-gray-600 text-sm lg:text-base">
                  You have made a Course Payment.
                </p>
              </div>
            </div>
          </div>

          {/* Yesterday Section */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-bold text-gray-600 mb-4 mt-4 ms-3">
              Yesterday
            </h2>
            <div className="flex items-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl text-gray-700 mr-4">
                <TiCreditCard />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base lg:text-lg mb-1">
                  Credit Card Connected!
                </h3>
                <p className="font-semibold text-gray-600 text-sm lg:text-base">
                  Credit Card has been Linked.
                </p>
              </div>
            </div>
          </div>

          {/* Older Section */}
          <div className="mb-2">
            <h2 className="text-lg lg:text-xl font-bold text-gray-600 mb-4 mt-4 ms-3">
              Nov 20, 2022
            </h2>
            <div className="flex items-center bg-white p-4 rounded-lg shadow mb-5">
              <div className="text-2xl text-gray-700 mr-4">
                <CgProfile />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base lg:text-lg mb-1">
                  Account Setup Successful!
                </h3>
                <p className="font-semibold text-gray-600 text-sm lg:text-base">
                  Your Account has been Created.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
