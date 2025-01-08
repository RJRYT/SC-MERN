import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { UserLayout } from "../layouts/UserLayout";

import { OtpVerification } from "../pages/root/OtpVerification";


// import { RegisterNow } from "../pages/root/RegisterNow";
// import { SplashScreen } from "./../pages/root/SplashScreen";
// import { Login } from "../pages/root/Login";
import { AllowLocation } from './../pages/root/AllowLocation';

import { ErrorPage404 } from "../pages/errorPage/ErrorPage404";
import { ErrorPageAccessDenide } from "../pages/errorPage/ErrorPageAccessDenide";
import { CreateNewPassword } from "../pages/root/CreateNewPassword";











export const router = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      //   {
      //     path: "",
      //     // path: "splashscreen",
      //     element: <SplashScreen />,
      //   },
      //   {
      //     path: "register",
      //     element: <RegisterNow />,
      //   },
      //   {
      //     path: "login",
      //     element: <Login />,
      //   },
    ],
  },
  {
    path: "user",
    element: <UserLayout />,
  },
  {
    path: "allowlocation",
    element: <AllowLocation/>,
  },
  {
    path: "otpverification",
    element: <OtpVerification />,
  },
  {
    path: "error1",
    element: <ErrorPage404/>,
  },
  {
    path: "error2",
    element: <ErrorPageAccessDenide/>,
  },
  {
    path: "newpassword",
    element:<CreateNewPassword/>
  }

]);
