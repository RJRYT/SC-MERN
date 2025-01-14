import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { MdOutlineBookmarkRemove } from 'react-icons/md';
import { CiStar } from 'react-icons/ci';

const PopularCategories = () => {
  const buttons = [
    { label: 'All' },
    { label: 'Plumbing' },
    { label: 'Electrical' },
    { label: 'Health' },
  ];
  const [activeButton, setActiveButton] = React.useState('All');

  return (
    <div className="w-full flex flex-col px-2">
      {/* Heading */}
      <Typography className="text-black text-xl font-bold mb-4">
        Popular Categories
      </Typography>

      {/* Buttons */}
      <div className="flex gap-3 p-2 overflow-x-auto scrollbar-hidden sm:justify-start">
        {buttons.map(({ label }) => (
          <Button
            key={label}
            value={label}
            variant="outlined"
            onClick={() => setActiveButton(label)}
            className={`rounded-full border-none text-[8px] md:text-2xl py-2 px-2 md:p-2 lg:p-3 md:text-md transition-colors ${
              activeButton === label
                ? 'font-bold bg-[#736a68] text-black'
                : 'bg-black text-white'
            }`}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="overflow-x-auto scrollbar-hidden flex md:grid gap-2 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center">
        {[...Array(8)].map((_, index) => (
          <Card
            key={index}
            className="overflow-hidden w-[150px] flex-shrink-0"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Plumbing Service"
                className="object-cover w-full h-20"
              />
            </CardHeader>
            <CardBody className="p-2">
              <div className="flex justify-between items-center">
                <Typography
                  className="text-gray-600 text-xs"
                  color="blue-gray"
                >
                  Plumbing
                </Typography>
                <MdOutlineBookmarkRemove className="text-teal-800" />
              </div>
              <Typography
                variant="lead"
                color="gray"
                className="mt-2 font-bold text-xs text-black"
              >
                Complete Residential Plumbing
              </Typography>
            </CardBody>
            <CardFooter className="flex p-1 items-center w-full">
              <div className="flex items-center justify-center w-full text-[9px] ">
                <span className="font-bold">289-500 | </span>
                <span className="flex items-center left-[-4px] space-x-[3px]">
                  <CiStar className="text-yellow-500" />
                  <span className="font-bold">4.9 | </span>
                </span>
                <span className="font-bold"> 2000 Reviews</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
