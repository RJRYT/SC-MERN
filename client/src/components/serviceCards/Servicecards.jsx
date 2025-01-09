import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export const ServiceCard = ({ title }) => {
  return (
    <Card className="flex w-20 md:w-[100px]  lg:w-[100px] flex-col items-center justify-center bg-transparent shadow-none">
      <CardHeader
        floated={false}
        className="h-20 w-20 flex justify-center rounded-full items-center p-[2px] border-[4px] border-black "
      >
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          className="object-cover rounded-full"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center p-0">
        <Typography color="blue-gray" className="text-sm font-bold">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};
