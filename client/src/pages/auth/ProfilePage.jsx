import React, { useState } from "react";
import { RiGalleryLine, RiEdit2Line, RiLogoutCircleLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleChevLeft } from "react-icons/ci";
import {
  MdNotifications,
  MdSecurity,
  MdLanguage,
  MdHelpOutline,
  MdPayment,
} from "react-icons/md";
import { FaRegMoon, FaUserFriends } from "react-icons/fa";
import { IconButton, Typography } from "@material-tailwind/react";

const ProfilePage = () => {
  const defaultImage = "/images/profile_icon_jpg.png";
  const [profileImage, setProfileImage] = useState(defaultImage);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const menuItems = [
    { icon: <RiEdit2Line size={22} />, label: "Edit Profile" },
    { icon: <MdPayment size={22} />, label: "Payment Option" },
    { icon: <MdNotifications size={22} />, label: "Notifications" },
    { icon: <MdSecurity size={22} />, label: "Security" },
    { icon: <MdLanguage size={22} />, label: "Language" },
    { icon: <FaRegMoon size={22} />, label: "Dark Mode" },
    { icon: <MdHelpOutline size={22} />, label: "Terms & Conditions" },
    { icon: <MdHelpOutline size={22} />, label: "Help Center" },
    { icon: <FaUserFriends size={22} />, label: "Invite Friends" },
    { icon: <RiLogoutCircleLine size={22} />, label: "Logout" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-[600px] bg-[#1D1F2A] h-[60px] px-4 flex items-center gap-1 rounded-t-lg">
        <IconButton variant="text">
          <CiCircleChevLeft size={28} color="white" />
        </IconButton>
        <Typography
          variant="h6"
          className="text-white font-semibold text-2xl m-2"
        >
          PROFILE
        </Typography>
      </div>

      <div className="w-full max-w-[600px] bg-[#D9D9DB] shadow-2xl rounded-b-lg p-11 ">
        {/* Profile Card */}
        <div className="bg-white w-full rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-teal-500"
              />
              {/* Hidden file input */}
              <input
                type="file"
                id="profileImageInput"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {/* Camera button */}
              <button
                onClick={() =>
                  document.getElementById("profileImageInput").click()
                }
                className="absolute bottom-0 right-2 bg-teal-500 text-white p-2 rounded-full"
              >
                <RiGalleryLine size={22} />
              </button>
            </div>
            <h2 className="mt-3 text-lg font-semibold">James S. Hernandez</h2>
            <p className="text-gray-500">hernandez.redial@gmail.ac.in</p>
          </div>

          {/* Menu Items */}
          <div className="mt-6 space-y-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => alert(`Clicked on ${item.label}`)} // Replace with navigation logic
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <IoIosArrowForward />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
