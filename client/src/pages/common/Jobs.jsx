import React from 'react';
import HeaderComponent from '../helpcenter/HeaderComponent';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GoArrowRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { PiWarningOctagonBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function Jobs() {
  return (
    <div className="bg-background-color">
      <div>
        <HeaderComponent />
      </div>

      {/* First Card */}
      <div className="flex items-center justify-center py-20 sm:w-6/5 md:w-6/5 lg:w-6/5 xl:w-6/5 -mt-14  ">
        <Card className="flex flex-row w-[600px]  shadow-2xl rounded-3xl m-3">
          {/* Left Grey Section */}
          <div className="w-[30px] bg-card-color rounded-s-3xl"></div>

          {/* Right Content Section */}
          <div className="w-11/12 p-4">
            <CardBody>
              {/* Title Section */}
              <div className="flex items-center justify-between mb-2">
                <Typography variant="h5" color="blue-gray">
                  Tap Repair
                   <div className=' flex mt-4'>
                    
                   <CgProfile  size={30}  className='bg-side-color rounded-full ' />
                   <p className='px-2 text-gray-700 font-medium'>keshavan</p>
                  
                   </div>
                   <p className='font-medium text-gray-700'>Active</p>
                     
                   <div className='flex  items-center space-x-2'>
                   <SlCalender className='text-orange-400' /> 
                    <p className='font-medium text-gray-700'>March 20,2021 </p>
                    <CiClock2  className='text-orange-400'/>
                    <p className='font-nano text-gray-700'>9.00 - 10.00 AM</p>
                   </div>
                </Typography>
                <a href="" className='-mt-20'>View</a>
                <RxCross1 className="text-cross-color cursor-pointer -mt-20" />
              </div>
              {/* Description */}
              <Typography>
                <div className='flex items-center '>
               <p className='font-medium text-xl text-gray-700 '>Amount : 300 /- </p>
               <PiWarningOctagonBold size={30} className='ml-14' />
               <p className='text-card-color text-sm' >Additional requirements</p>
               </div>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-card-color  w-full rounded-full flex items-center justify-between ">
                Complete Payments
                <GoArrowRight
                  size={30}
                  className="text-card-color bg-white rounded-full"
                />
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>

      {/* Second Card */}
     
     <div className="flex items-center justify-center  sm:w-6/5 md:w-6/5 lg:w-6/5 xl:w-6/5 -mt-20 ">
        <Card className="flex flex-row w-[600px] shadow-2xl rounded-3xl m-4">
          {/* Left Grey Section */}
          <div className="w-[30px] bg-card-color rounded-s-3xl"></div>

          {/* Right Content Section */}
          <div className="w-11/12 p-4">
            <CardBody>
              {/* Title Section */}
              <div className="flex items-center justify-between mb-2">
                <Typography variant="h5" color="blue-gray">
                  Tap Repair
                   <div className=' flex mt-4'>
                    
                   <CgProfile  size={30}  className='bg-side-color rounded-full ' />
                   <p className='px-2 text-gray-700 font-medium'>keshavan</p>
                  
                   </div>
                   <p className='font-medium text-gray-700'>Active</p>
                     
                   <div className='flex  items-center space-x-2'>
                   <SlCalender className='text-orange-400' /> 
                    <p className='font-medium text-gray-700'>March 20,2021 </p>
                    <CiClock2  className='text-orange-400'/>
                    <p className='font-nano text-gray-700'>9.00 - 10.00 AM</p>
                   </div>
                </Typography>
                <a href="" className='-mt-20'>View</a>
                <RxCross1 className="text-cross-color cursor-pointer -mt-20" />
              </div>
              {/* Description */}
              <Typography>
                <div className='flex items-center '>
               <p className='font-medium text-xl text-gray-700'>Amount : 300 /- </p>
               <PiWarningOctagonBold size={30} className='ml-14' />
               <p className='text-card-color text-sm' >Additional requirements</p>
               </div>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-card-color w-full rounded-full flex items-center justify-between ">
                Complete Payments
                <GoArrowRight
                  size={30}
                  className="text-card-color bg-white rounded-full"
                />
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Jobs;
