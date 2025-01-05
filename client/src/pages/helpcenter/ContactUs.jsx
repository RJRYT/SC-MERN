import React from 'react';
import { MdOutlineHeadset } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";

const ContactUs = () => {
  return (
    <div className='bg-gray-300 w-full min-h-screen flex flex-col space-y-4 p-14  items-center'>
      
      <button className='w-1/2 sm-only:w-full flex flex-col sm-only:flex-row items-center justify-center bg-white text-black p-8 gap-3 rounded-3xl shadow-custom-dark'>
        <MdOutlineHeadset className="mr-2 text-2xl sm-only:mr-4 sm-only:w-1/6" />
        <span className="text-left sm-only:w-5/6">Customer Services</span>
      </button>
      
      <button className='w-1/2 sm-only:w-full flex flex-col sm-only:flex-row items-center justify-center bg-white text-black p-8 gap-3 rounded-3xl shadow-custom-dark'>
        <BsWhatsapp className="mr-2 text-2xl sm-only:mr-4 sm-only:w-1/6" />
        <span className="text-left sm-only:w-5/6">WhatsApp</span>
      </button>
      
      <button className='w-1/2 sm-only:w-full flex flex-col sm-only:flex-row items-center justify-center bg-white text-black p-8 gap-3 rounded-3xl shadow-custom-dark'>
        <BsFacebook className="mr-2 text-2xl sm-only:mr-4 sm-only:w-1/6" />
        <span className="text-left sm-only:w-5/6">Facebook</span>
      </button>
      
      <button className='w-1/2 sm-only:w-full flex flex-col sm-only:flex-row items-center justify-center bg-white text-black p-8 gap-3 rounded-3xl shadow-custom-dark'>
        <IoLogoTwitter className="mr-2 text-2xl sm-only:mr-4 sm-only:w-1/6" />
        <span className="text-left sm-only:w-5/6">Twitter</span>
      </button>
      
      <button className='w-1/2 sm-only:w-full flex flex-col sm-only:flex-row items-center justify-center bg-white text-black p-8 gap-3 rounded-3xl shadow-custom-dark'>
        <SiInstagram className="mr-2 text-2xl sm-only:mr-4 sm-only:w-1/6" />
        <span className="text-left sm-only:w-5/6">Instagram</span>
      </button>
      
    </div>
  );
}

export default ContactUs;
