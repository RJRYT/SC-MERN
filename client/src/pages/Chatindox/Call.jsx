import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Men from '../../../src/assets/images/men_icon_jpg.png';
import { FiPhoneCall } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdCancelPresentation } from "react-icons/md";

const calls = [
  { name: "Patricia D. Regalado", type: "Incoming", date: "Nov 03, 202X" },
  { name: "Jonathon K. Nix", type: "Incoming", date: "Nov 05, 202X" },
  { name: "Ellen N. Cranford", type: "Outgoing", date: "Nov 06, 202X" },
  { name: "William W. Spicer", type: "Missed", date: "Nov 15, 202X" },
  { name: "Scott D. Chambers", type: "Outgoing", date: "Nov 17, 202X" },
  { name: "Hilda M. Hernandez", type: "Missed", date: "Nov 18, 202X" },
  { name: "Hilda M. Hernandez", type: "Outgoing", date: "Nov 19, 202X" },
  { name: "Wanda T.Seidl", type: "Incoming", date: "Nov 21, 202X" },
];

const iconMap = {
  Incoming: <FaRegSquarePlus className="text-blue-900" />,
  Outgoing: <FiMinusSquare className="text-green-500" />,
  Missed: <MdCancelPresentation className="text-red-500" />,
};

const Call = () => {
  return (
    <div className='flex flex-col p-4 bg-gray-bg sm-only:p-4  sm-only:-mt-5'>
      <div className='w-1/2 mx-auto py-5 bg-white rounded-2xl shadow sm-only:w-full'>
        {calls.map((call, index) => (
          <div key={index}>
            <Link to={"call-details"} className='flex flex-row items-center p-6 hover:bg-gray-200  sm-only:-my-3'>
              <div className='w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow'>
                <img src={Men} alt={call.type} className='w-12 h-12 rounded-full shadow' />
              </div>
              <div className='flex flex-col ml-4 '>
                <Typography variant='h6' className='text-dark-purple'>{call.name}</Typography>
                <div className='flex flex-row gap-2 items-center '>
                  <div>
                    {iconMap[call.type]}
                  </div>
                  <Typography variant='body2' className='text-chat-call  sm-only:-mx-1 sm-only:text-sm'>{call.type}</Typography>
                  <div className='border-r-2 border-chat-call mx-2 h-4 pt-1 sm-only:text-sm' />
                  <Typography variant='body2' className='text-chat-call  sm-only:-mx-1 sm-only:text-sm'>{call.date}</Typography>
                </div>
              </div>
              <div className='ml-auto'>
                <FiPhoneCall className='w-6 h-6' />
              </div>
            </Link>
            {index < calls.length - 1 && <hr className='w-full h-2 bg-hr-color my-4' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Call;
