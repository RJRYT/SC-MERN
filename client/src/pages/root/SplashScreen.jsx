import { Button } from "@material-tailwind/react";
import { FiPhoneCall } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const SplashScreen = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1d1f2a]">
      <div className="text-center space-y-6">
        {/* Image */}
        <img
          src="/vite.svg"
          alt="Splash"
          className="w-32 h-32 mx-auto mb-8"
        />

        {/* Buttons */}
        <div className="space-y-4 max-w-sm mx-auto">
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3 bg-white rounded-full text-black w-full normal-case"
          >
            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
              <FiPhoneCall className="text-white" />
            </div>
            <Typography className="font-titillium  font-bold"> Login with Email/Phone</Typography> 
          </Button>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3 bg-[#34353f] rounded-full text-white w-full normal-case"
          >
            <FcGoogle className="w-7 h-7" />
           <Typography className="font-titillium  font-bold">Login with Google</Typography> 
          </Button>
        </div>

        {/* Footer Text */}
        <p className="text-white font-titillium font-bold">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
    Sign Up
  </Link>
        </p>
      </div>
    </div>
  );
};
