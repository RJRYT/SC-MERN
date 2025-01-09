import { Badge, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Men from '../../../src/assets/images/men_icon_jpg.png';

const messages = [
  { name: "Virginia M. Patterson", message: "Hi, Good Evening Bro..!", time: "14:59", number: "03" },
  { name: "Dominick S. Jenkins", message: "I Just Finished It.!", time: "06:35", number: "02" },
  { name: "Duncan E. Hoffman", message: "How are you?", time: "08:10", number: "01" },
  { name: "Roy R. McCraney", message: "OMG, This is Amazing..", time: "21:07", number: "05" },
  { name: "Janice R. Norris", message: "Wow, This is Really Epic", time: "09:15", number: "07" },
  { name: "Marilyn C. Amerson", message: "Hi, Good Evening Bro.!", time: "14:59", number: "03" },
  { name: "Dominick S. Jenkins", message: "I Just Finished It.!", time: "06:35", number: "02" },
];

const Chat = () => {
  return (
    <div className='bg-gray-bg flex flex-col p-4 sm-only:p-4 sm-only:-mt-5'>
      <div className='w-1/2 mx-auto py-5   bg-white rounded-2xl shadow sm-only:w-full '>
        {messages.map((msg, index) => (
          <Link to={"help"} key={index} >
            <div className='flex flex-row items-center p-6 hover:bg-gray-200 sm-only:-my-3'>
              <img src={Men} alt="profile" className='w-12 h-12 rounded-full shadow ' />
              <div className='flex flex-col ml-4'>
                <Typography variant='h6' className='text-text-chat'>{msg.name}</Typography>
                <Typography variant='body2' className='text-chat-p'>{msg.message}</Typography>
              </div>
              <div className='ml-auto text-right'>
                <Badge content={msg.number} className="mx-4 -mt-3 bg-dark-purple text-white" />
                <Typography variant='body2'>{msg.time}</Typography>
              </div>
            </div>
            {index < messages.length - 1 && <div className='w-full h-2 bg-hr-color my-4'></div>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chat;
