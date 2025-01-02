import { Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <>
      <div className="h-screen bg-[#d9d9db]">
        <div className="text-center">Service Connect</div>
        <div className="w-10/12 flex flex-col gap-y-5 mx-auto mt-20">
          <div className="font-semibold text-base leading-">
            Getting Started...!
          </div>
          <div className="relative">
            <div>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <Input
              className="bg-[#736967] rounded-md"
              color="white"
              label="Email"
            />
          </div>
          <div>
            <Input
              className="bg-[#736967] rounded-md"
              color="white"
              label="Password"
            />
          </div>
          <div>
            <Input
              className="bg-[#736967] rounded-md"
              color="white"
              label="Conform Password"
            />
          </div>
          <div>
            <span className="font-extrabold text-sm text-[#545454]">
              Agree to Terms & Condition
            </span>
          </div>
          <div>
            <Button fullWidth>Sign In</Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-10 items-center">
          <div>
            <span>Or Connect With</span>
          </div>
          <div className="flex justify-center gap-x-10">
            <div className="bg-white rounded-full w-30 flex justify-center items-center py-2">
              <img
                className="w-10 rounded-full"
                src="src\assets\googlelogo.png"
              ></img>
            </div>
            <div className="bg-white rounded-full w-30 flex justify-center items-center py-2">
              <img
                className="w-10 rounded-full"
                src="src\assets\applelogo.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <span>Already have an Account?</span>
          <Link className="underline" href="">
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
