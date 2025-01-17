import React from "react";
import { useCountries } from "use-react-countries";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Select,
  Option,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { FiEdit2 } from "react-icons/fi"; // Edit Icon
import { FaMale, FaFemale } from "react-icons/fa"; // Gender Icons
import { CiCircleChevLeft } from "react-icons/ci"; // Back Arrow Icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Blackbutton from "../../components/blackbutton/Blackbutton";
import Header from "../../components/header/Header";
const FillProfile = () => {
  const [profileImage, setProfileImage] = React.useState(
    "image/profile_icon_jpg.png"
  );

  const [country, setCountry] = React.useState(0);
  const { countries } = useCountries();
  const [date, setDate] = React.useState(null);

  const { name, flags, countryCallingCode } = countries[country];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#d9d9db]">
      {/* Header Section */}
      <Header title="FILL YOUR PROFILE"/>
      <div className="flex justify-center w-screen items-center min-h-screen bg-white">
        <Card className="w-[360px] md:w-[420px]  border-none p-0 ">
          <CardBody className="p-6">
            {/* Form Section */}
            <form className="mt-0">
              {/* Avatar Section */}

              <div className="relative flex justify-center mb-6">
                {/* Profile Avatar */}
                <Avatar
                  src={"/images/profile_icon_jpg.png"}
                  className="w-24 h-24 border-4 border-gray-300"
                  alt="Avatar"
                />
                <div className="flex item-center justify-center">
                  {/* Pencil Edit Icon */}
                  <label
                    htmlFor="profile-image-upload"
                    className="absolute bottom-1 left- right bg-gray-600 text-white p-1.5 rounded-full cursor-pointer"
                  >
                    <HiOutlinePencilAlt size={15} />
                  </label>

                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div className="bg-[#736A68] rounded-lg">
                  {/* <Input
                    type="Full Name"
                    placeholder="Full Name"
                    className=" bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  /> */}
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className=" bg-gray-700 text-white shadow-md p-3 rounded-lg ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:ring-2 focus:ring-none focus:outline-none focus:border-transparent"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div className="bg-[#736A68] rounded-lg">
                  {" "}
                  <Input
                    type="Address"
                    placeholder="Address"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div className="bg-[#736A68] rounded-lg">
                  {" "}
                  <div className="text-white">
                    <Popover placement="bottom">
                      <PopoverHandler>
                        <Input
                          placeholder=" Date of Birth"
                          onChange={() => null}
                          value={date ? format(date, "PPP") : ""}
                          // className="!h-10 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                          className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "min-w-[100px]" }}
                        />
                      </PopoverHandler>
                      <PopoverContent>
                        <DayPicker
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          showOutsideDays
                          className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                          classNames={{
                            caption:
                              "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                              "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                              "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                              "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
                            day_hidden: "invisible",
                          }}
                          components={{
                            IconLeft: ({ ...props }) => (
                              <ChevronLeftIcon
                                {...props}
                                className="h-4 w-4 stroke-2"
                              />
                            ),
                            IconRight: ({ ...props }) => (
                              <ChevronRightIcon
                                {...props}
                                className="h-4 w-4 stroke-2"
                              />
                            ),
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  {" "}
                  <Input
                    type="Email"
                    placeholder="Email"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  {/* Phone Number with Flag Dropdown */}
                  <div className="flex w-full items-center">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          color="white"
                          className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-gray-600 bg-[#736A68] pl-3"
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {countryCallingCode}
                        </Button>
                      </MenuHandler>
                      <MenuList className="max-h-[20rem] max-w-[18rem]">
                        {countries.map(
                          ({ name, flags, countryCallingCode }, index) => {
                            return (
                              <MenuItem
                                key={name}
                                value={name}
                                className="flex items-center gap-2"
                                onClick={() => setCountry(index)}
                              >
                                <img
                                  src={flags.svg}
                                  alt={name}
                                  className="h-5 w-5 rounded-full object-cover"
                                />
                                {name}{" "}
                                <span className="ml-auto">
                                  {countryCallingCode}
                                </span>
                              </MenuItem>
                            );
                          }
                        )}
                      </MenuList>
                    </Menu>
                    <Input
                      type="tel"
                      placeholder=" 724-848-1225"
                      className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "w-full",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  <Select
                    label="Gender"
                    className="!border !border-gray-300 bg-[#736A68] text-white shadow-g shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "text-white",
                    }}
                    menuProps={{
                      className:
                        "bg-[#736A68] text-white border border-gray-300 shadow-lg shadow-gray-900/5 rounded-lg",
                    }}
                  >
                    <Option value="male" className="flex items-center">
                      <FaMale className="mr-2" /> Male
                    </Option>
                    <Option value="female" className="flex items-center">
                      <FaFemale className="mr-2" /> Female
                    </Option>
                  </Select>
                </div>

                <div className="bg-[#736A68] rounded-lg">
                  <Input
                    type="House"
                    placeholder="House Name"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div className="bg-[#736A68] rounded-lg">
                  <Input
                    type="Land Mark"
                    placeholder="Land Mark"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  <Input
                    type="Pin Code"
                    placeholder="Pin Code"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  <Input
                    type="District"
                    placeholder="District"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="bg-[#736A68] rounded-lg">
                  <Input
                    type="State"
                    placeholder="State"
                    className="!border !border-gray-300 bg-gray-700 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                  <Blackbutton label="Continue"/>
              </div>
            </form>
            <div className="flex items-center gap-4"></div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FillProfile;