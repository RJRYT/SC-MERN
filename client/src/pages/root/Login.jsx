import { Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="h-screen bg-[#d9d9db]">
        <div className="text-center ">Service Connect</div>
        <div className="w-10/12 flex flex-col gap-y-5 mx-auto mt-20">
          <div>
            <h3>Let's Sign In...!</h3>
            <p>Login to your Account to continue your courses</p>
          </div>
          <div className="bg-[#736967] rounded-md mt-5">
            <Input color="white" variant="standard" label="Email" />
          </div>
          <div className="bg-[#736967] rounded-md">
            <Input color="white" variant="standard" label="Password" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox"></input>Remember Me
            </div>
            <div>Forgot Password?</div>
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
export default Login;
