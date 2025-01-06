import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import { RootLayout } from '../layouts/RootLayout';
import { UserLayout } from '../layouts/UserLayout';
import SignUp from '../pages/root/signup';
import Login from '../pages/root/Login';
import { OtpVerification } from "../pages/root/OtpVerification";
import { RegisterNow } from "../pages/root/RegisterNow";
import { SplashScreen } from "./../pages/root/SplashScreen";
import { AllowLocation } from './../pages/root/AllowLocation';

import { ErrorPage404 } from "../pages/errorPage/ErrorPage404";
import { ErrorPageAccessDenide } from "../pages/errorPage/ErrorPageAccessDenide";









export const router = createBrowserRouter([
  {
    index: true,
    path: "",
    element: <SplashScreen />,
  },
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        path: "user",
        element: <UserLayout />,
      },
      {
        path: "register",
        element: <RegisterNow />,
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
    ],
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
]);
