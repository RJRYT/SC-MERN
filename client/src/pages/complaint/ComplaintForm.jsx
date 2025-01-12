import React from 'react';
import img from '../../assets/images/men_icon_jpg.png';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { BiErrorAlt } from "react-icons/bi";

const ComplaintForm = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-bg p-4 sm:p-8'>
      <div className='flex flex-row sm:flex-col items-center w-full sm:justify-center'>
        <img
          src={img}
          alt="Profile"
          className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
        />
        <div className="ml-4 sm:ml-0 text-left sm:text-center">
          <h2 className="text-lg sm:text-xl font-semibold">Nazrul Islam</h2>
          <p className="text-gray-900 font-semibold">Electrification 💪</p>
        </div>
      </div>
      <Card className="w-full sm:w-1/2 mx-auto mt-5 shadow-lg shadow-gray-800/50">
        <CardBody>
          <Typography variant="h6" className="mb-2 text-appointment"> Booking Id : 12aa21w </Typography>
          <Typography variant="h5" className="mb-2 text-appointment"> Title </Typography>
          <Typography variant="h6" className="mb-2 ml-4 text-appointment"> Bulb Change </Typography>
          <Typography variant="h5" className="mb-2 text-appointment"> Description </Typography>
          <Typography variant="body2" className="mb-2 ml-4 text-appointment"> askjdhh jkljhdlkhasmnjlh jhhkh </Typography>
          <Typography variant="h5" className="mb-2 text-appointment"> Appointment </Typography>
          <div className="flex flex-row justify-center items-center gap-3 mb-4">
            <button className="bg-gray-200 text-lg text-black p-4 rounded-lg shadow-lg shadow-gray-500/50">Jun 10, 2024</button>
            <button className="bg-gray-200 text-lg text-black p-4 rounded-lg shadow-lg shadow-gray-500/50">9:41 AM</button>
          </div>
          <Typography variant="h5" className="mb-2 text-invoice"> Invoice </Typography>
          <table className="w-full text-left ml-2 text-table">
            <thead>
              <tr>
                <th className="py-1">Sl.no</th>
                <th className="py-1">Description</th>
                <th className="py-1">Qty</th>
                <th className="py-1">Price</th>
                <th className="py-1">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">1</td>
                <td className="py-1">Bulb Change</td>
                <td className="py-1">1</td>
                <td className="py-1">300</td>
                <td className="py-1">300</td>
              </tr>
            </tbody>
          </table>
          <div className='flex gap-8'>
            <Typography variant="h6" className="mt-8 text-table"> Grand Total</Typography>
            <Typography variant="h6" className="mt-8 text-table"> 300 </Typography>
          </div>
          <Typography variant="body2" className="mt-4 text-table"> Terms and conditions </Typography>
          <Typography variant="body2" className="mb-2 text-table ml-6"> Valid up to 1 month </Typography>
          <Typography variant="h6" color="red" className="mb-2 flex items-center gap-2">
            Additional Requirements
            <BiErrorAlt className='text-3xl' />
          </Typography>
          <Typography variant="body2" className="mb-1 text-table ml-6"> Provide Ladder </Typography>
          <Typography variant="body2" className="text-table ml-6"> Bulb should be provided </Typography>
        </CardBody>
      </Card>
      <div className="flex flex-col  justify-center items-center gap-3 w-full sm:w-1/2 mt-6">
        <button className="w-full rounded-full shadow-lg h-[60px] bg-primary text-white text-xl font-bold shadow-gray-800/50">
          Service Status
        </button>
        <button className="w-full rounded-full shadow-lg h-[60px] bg-primary text-white text-xl font-bold shadow-gray-800/50">
          Payment Status
        </button>
      </div>
      <div className="flex flex-col gap-5 w-full sm:w-1/2 m-5">
        <input type="text" className='w-full p-4 border border-gray-300 rounded-lg outline text-lg shadow-lg shadow-gray-800/50' placeholder='Title'/>
        <textarea id="description" className="w-full p-4 border border-gray-300 rounded-lg outline text-lg shadow-lg shadow-gray-800/50" rows="7" placeholder="Description"></textarea>
        <input type="file" accept="image/*,video/*" className='w-full p-4 border border-gray-300 rounded-lg outline text-lg shadow-lg shadow-gray-800/50 bg-white' placeholder='Images and Videos'/>
      </div>
      <button className="w-full sm:w-1/2 mt-3 rounded-full shadow-lg flex items-center justify-center h-[60px] bg-conform text-white text-xl font-bold shadow-gray-800/50">
        Conform Complaint
      </button>
    </div>
  );
};

export default ComplaintForm;
