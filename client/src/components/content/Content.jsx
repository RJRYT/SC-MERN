import React from 'react';
import { Input } from "@material-tailwind/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { ServiceCard } from '../serviceCards/Servicecards';
  import { Link } from 'react-router-dom';
  import PopularCategories from '../popularCategories/Popularcategories';
const Content = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    { label: "nearby", value: "nearby" },
    { label: "10km", value: "10km" },
    { label: "All", value: "All" },
  ];
  const services = [

    { label: "Plumbing", value: "nearby" },
    { label: "Electrical", value: "10km" },
    { label: "Driver", value: "All" },
    { label: "Plumbing", value: "nearby" },
    { label: "Electrical", value: "10km" },
    { label: "Driver", value: "All" },
    { label: "Plumbing", value: "nearby" },
  ]

  return (
    <div className="flex-1 h-screen flex flex-col items-center justify-center p-2 bg-[#d9d9db] ">
      <div className="w-60">
        <Input
          label="Input With Icon"
          className="!bg-[#736a68]"
          color="white"
          icon={<HiOutlineAdjustmentsHorizontal className="text-white" />}
        />
      </div>
      {/* Tabs */}
      {/* <div className="mt-4 mb-4 p-3 !w-[150px] bg-red-300">
        <Tabs value={activeTab} className="!w-[150px]">
          <TabsHeader className="bg-black rounded-full w-[150px]">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "font-bold bg-black rounded-full" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </div> */}

      {/* Carousel */}
      {/* <div className="sm:w-60 md:w-[700px] flex flex-col lg-[700px] mt-4">
        <Carousel transition={{ duration: 2 }} className="w-[700px] !h-[280px]  border-none rounded-lg"  prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
          <div className="relative h-[400px]">
         
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
     
            <div className="absolute inset-0 bg-black opacity-50"></div>
           
            <span className="absolute inset-0 flex flex-col  justify-left text-white text-lg z-10 px-11">
  <span className="font-bold text-2xl">25% OFF</span>
  <span className="text-sm">Today's Special</span>
  <span className="text-xs">GTA discount for specific products</span>
</span>
          </div>

        
          <div>
    
          </div>
          <div>
            
          </div>
        </Carousel>
      </div> */}
      <div className=' flex flex-col  mt-4'>
  <div className='text-black font-bold flex justify-between'><span className='text-xl'>Services Category</span> 
  <Link ahref="/">SEE ALL</Link>
  </div>
  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  {services.map((service, index) => (
    <ServiceCard key={index} title={service.label} />
  ))}
</div>


</div>
<div className=' flex flex-col  mt-4'>
<PopularCategories/>
</div>
    </div>
  );
};

export default Content;
