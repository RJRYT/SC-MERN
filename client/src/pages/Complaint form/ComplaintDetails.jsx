import React from 'react';
import { Input, Button, Textarea } from '@material-tailwind/react';
import img from '../../assets/images/men_icon_jpg.png';

const ComplaintForm = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-400 p-8 sm:p-8'>
      <div className='flex items-center'>
        <img
          src={img}
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Nazrul Islam</h2>
          <p className="text-gray-700 font-semibold">Electrification 💪</p>
        </div>
      </div>
      <div className='bg-white w-full p-6 mt-4 rounded-3xl'>
        <p className="text-gray-700 font-bold text-lg">Booking Id : 12ae21w</p>
          <div className='py-4'> 
          <p className="text-gray-700 text-lg font-semibold" >Title</p>
          <p className=' p-2'> Bulb Change</p>
          <p className="text-gray-700 text-lg font-semibold">Description</p>
          <p className=' p-2'> asdkjh jkahdkasnjh jkhb</p>
          <p className='text-gray-700 text-lg font-semibold'>Appointment</p>
          </div>
        </div>
    </div>
  );
};

export default ComplaintForm;
