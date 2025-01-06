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
} from "@material-tailwind/react";
import { FiEdit2 } from "react-icons/fi"; // Edit Icon
import { FaMale, FaFemale } from "react-icons/fa"; // Gender Icons
import { IoIosArrowBack } from "react-icons/io"; // Back Arrow Icon

const FillProfile = () => {
  const [profileImage, setProfileImage] = React.useState(
    "image/profileicon.jpg"
  );
  const [country, setCountry] = React.useState(0);
  const { countries } = useCountries();
  const { name, flags, countryCallingCode } = countries[country];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-0">
        <CardBody className="p-0">
          {/* Header Section Styled Like a Navbar */}
          <div className="flex items-center justify-between bg-gray-800 p-4 m-0 rounded-t-lg">
            <Button
              variant="text"
              className="font-bold text-white flex items-center"
            >
              <IoIosArrowBack size={20} />
            </Button>
            <h1 className="text-2xl font-bold text-white">Fill Your Profile</h1>
          </div>

          {/* Form Section */}
          <form className="mt-0">
            {/* Avatar Section */}
            <div className="relative flex justify-center mb-6">
              {/* Profile Avatar */}
              <Avatar
                src="/images/profileicon.jpg"
                className="w-24 h-24 border-4 border-gray-300"
                alt="Avatar"
              />

              {/* Pencil Edit Icon */}
              <label
                htmlFor="profile-image-upload"
                className="absolute bottom-1 right- bg-gray-500 p-1.5 rounded-full text-white cursor-pointer hover:bg-gray-600 shadow-md border-2 border-white "
              >
                <FiEdit2 size={8} />
              </label>

              {/* Hidden File Input */}
              <input
                id="profile-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <Input label="Full Name" type="text" placeholder="" />
              <Input label="Address" type="text" placeholder="" />
              <Input
                label="Date of Birth"
                type="date"
                placeholder="Date of Birth"
              />
              <Input label="Email" type="email" placeholder="Email" />

              {/* Phone Number with Flag Dropdown */}
              <div className="relative flex w-full">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      ripple={false}
                      variant="text"
                      color="blue-gray"
                      className="flex h-12 items-center gap-2 rounded-r-none border border-gray-300 bg-gray-400 text-white pl-3"
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {countryCallingCode}
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-[20rem] max-w-[18rem]">
                    {countries.map(
                      ({ name, flags, countryCallingCode }, index) => (
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
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      )
                    )}
                  </MenuList>
                </Menu>

                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{ className: "min-w-0" }}
                />
              </div>

              <Select label="Gender">
                <Option value="male" className="flex items-center">
                  <FaMale className="mr-2" /> Male
                </Option>
                <Option value="female" className="flex items-center">
                  <FaFemale className="mr-2" /> Female
                </Option>
              </Select>
              <Input label="House Name" type="text" />
              <Input label="Landmark" type="text" />
              <Input label="Pincode" type="text" />
              <Input label="District" type="text" />
              <Input label="State" type="text" />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <Button
                variant="text"
                className="flex justify-center items-center gap-2 bg-black text-white normal-case px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Continue
                <div className="flex justify-center items-center w-6 h-6 bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FillProfile;