import React, { useState } from "react";
import Header from "../../components/header/Header";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function InviteFriend() {
  const inviteFriend = [
    { name: "Virginia M. Patterson", number: "(+1) 702-897-7965" },
    { name: "Dominick S. Jenkins", number: "(+1) 702-897-7965" },
    { name: "Duncan E. Hoffman", number: "(+1)b727-688-4052" },
    { name: "Roy R. McCraney", number: "(+1) 601-897-1714" },
    { name: "Janice R. Norris", number: "(+1) 802-312-3206" },
  ];
  const [invited, setInvited] = useState(false);

  const toggleInvite = (name) => {
    setInvited((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <Header title="INVITE FRIEND" showSettings={true} showSearch={true} />
      <div className="bg-[#d9d9db] min-h-screen px-8 py-12">
        <div className="bg-[#ffffff] max-w-lg lg:max-w-2xl mx-auto rounded-2xl shadow">
          {/* Repeated Single Card */}
          {inviteFriend.map((invite, index) => (
            <div key={index} className="relative">
              <div className="flex flex-row items-center p-4">
                {/* Profile Image */}
                <img
                  src="https://media.istockphoto.com/id/1320815200/photo/wall-black-background-for-design-stone-black-texture-background.jpg?s=612x612&w=0&k=20&c=hqcH1pKLCLn_ZQ5vUPUfi3BOqMWoBzbk5-61Xq7UMsU="
                  alt="profile"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
                {/* Contact Details */}
                <div className="flex-1 px-3">
                  <h2 className="text-sm font-bold text-black">
                    {invite.name}
                  </h2>
                  <p className="text-sm text-gray-700 font-semibold">
                    {invite.number}
                  </p>
                </div>

                {/* Invite Button */}
                <button
                  className={`py-1 px-5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
                    invited[invite.name]
                      ? "bg-[#e8f1ff] text-[#1d1f2a]"
                      : "bg-[#1d1f2a] text-white"
                  }`}
                  onClick={() => toggleInvite(invite.name)}
                >
                  {invited[invite.name] ? "Invited" : "Invite"}
                </button>
              </div>

              {/* Add blue line and shadow only if not the last card */}
              {index < inviteFriend.length - 1 && (
                <>
                  <div className="border border-blue-50 shadow shadow-gray-400"></div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border border-blue-50 shadow shadow-gray-600 mt-4"></div>

        {/* Share Invite Via */}
        <div className="mt-3 max-w-lg lg:max-w-2xl mx-auto ">
          <p className="text-[#1d1f2a] text-base mb-4 font-bold">
            Share Invite Via
          </p>
          <div className="flex justify-start space-x-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-200">
              <FaFacebookF className="text-blue-600 text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-200">
              <FaTwitter className="text-blue-600 text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-200">
              <FaGooglePlusG className="text-red-500 text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-200">
              <TbBrandWhatsappFilled className="text-green-500 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteFriend;
