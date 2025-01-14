import React from 'react';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { ServiceCard } from '../../components/serviceCards/Servicecards';
  import { Link } from 'react-router-dom';
  import PopularCategories from '../../components/popularCategories/Popularcategories';
import ServiceProviders from '../../components/serviceProviders/ServiceProviders';
const Home = () => {
  const [activeTab, setActiveTab] = useState("nearby");
  const data = [
    { label: "Near By", value: "nearby" },
    { label: "10km", value: "10km" },
    { label: "All", value: "All" },
  ];
  const services = [

    { label: "Plumbing", value: "Plumbing" },
    { label: "Electrical", value: "Electrical" },
    { label: "Driver", value: "Driver" },
    { label: "Plumbing", value: "Plumbing" },
    { label: "Electrical", value: "Electrical" },
    { label: "Driver", value: "Driver" },
    { label: "Plumbing", value: "Plumbing" },
  ]

  return (
    <div className="flex-1  flex flex-col items-center justify-center p-2 bg-[#d9d9db] overflow-y-auto scrollbar-hidden">
      <div className=" w-[300px] md:w-[400px] ">
        <Input
          label="Input With Icon"
          className="!bg-[#736a68]"
          color="white"
          icon={<HiOutlineAdjustmentsHorizontal className="text-white text-2xl" />}
        />
      </div>
      {/* Tabs */}
      <div className="mt-4 mb-4 p-3  flex justify-center">
  <div className="lg:w-[800px] md:w-[720px] w-[300px] text-sm ">
    <Tabs id="custom-animation" className="rounded-full border-[4px] p-none text-sm border-black" value="html">
      <TabsHeader  indicatorProps={{
          className: "bg-gray-900/10 shadow-none rounded-full text-sm !text-gray-900 p-0",
        }}>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => setActiveTab(value)}
          className={activeTab === value ? "text-gray-400 bg-black rounded-full" : ""}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody> */}
    </Tabs>
  </div>
</div>

      {/* Carousel */}
     <div className='w-[300px] md:w-[720px] lg:w-[800px] !h-[200px] !md:h-[600px]'>
     <Carousel className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute hidden top-2/4 left-4 -translate-y-2/4"
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
      )}>
      <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <div className="absolute inset-0 grid h-full w-full place-items-left p-5 md:p-10 lg:p-10 bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-sm md:text-xl lg:text-xl"
            >
             25% OFF
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm md:text-xl opacity-80"
            >
              Today's special
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm opacity-80"
            >
              Get a Discount for Every Course Order,offer valid till Today!
            </Typography>
            </div>
          </div>
      </div>
     
       <div className="relative h-full w-full">
       <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-left p-5 md:p-10 lg:p-10 bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-sm md:text-xl lg:text-xl"
            >
             25% OFF
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm md:text-xl opacity-80"
            >
              Today's special
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm opacity-80"
            >
              Get a Discount for Every Course Order,offer valid till Today!
            </Typography>
            </div>
          </div>
       </div>
    
       <div className="relative h-full w-full">
       <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
     <div className="absolute inset-0 grid h-full w-full place-items-left p-5 md:p-10 lg:p-10 bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-sm md:text-xl lg:text-xl"
            >
             25% OFF
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm md:text-xl opacity-80"
            >
              Today's special
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-sm opacity-80"
            >
              Get a Discount for Every Course Order,offer valid till Today!
            </Typography>
            </div>
          </div>
       </div>
     
    </Carousel>
     </div>
     

     {/* carousal end */}
      <div className='flex flex-col px-2  lg:w-[800px] md:w-[720px] w-[300px]  mt-4'>
  <div className='text-black font-bold flex justify-between'><span className='text-md font-bold'>Services Category</span> 
  <Link ahref="/" className='text-sm'>SEE ALL</Link>
  </div>
  <div className="md:grid gap-4 md:gap-2 overflow-x-auto scrollbar-hidden flex md:grid-cols-[repeat(auto-fit,minmax(90px,1fr))] ">
  {services
      .slice(0, window.innerWidth < 768 ? 3 : 7) // Show only 3 on small screens
      .map((service, index) => (
        <ServiceCard key={index} title={service.value} />
      ))}
</div>


</div>
<div className=' lg:w-[800px]  md:w-[720px] w-[300px]  '>
<PopularCategories/>
</div>
<div className='w-[300px] md:w-[720px] lg:w-[800px] mt-3 mb-[100px]'>
  <ServiceProviders/>
</div>
    </div>
  );
};

export default Home;
