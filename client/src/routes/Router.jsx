import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { RootLayout } from "../layouts/RootLayout";
import { UserLayout } from "../layouts/UserLayout";
import { AllowLocation } from "../pages/root/AllowLocation";
import { OtpVerification } from "../pages/root/OtpVerification";
// import { RegisterNow } from "../pages/root/RegisterNow";
// import { SplashScreen } from "./../pages/root/SplashScreen";
// import { Login } from "../pages/root/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
      {
        path: "allowlocation",
        element: <AllowLocation/>,
      },
      {
        path: "otpverification",
        element: <OtpVerification/>,
      },
    ],
  },
  {
    path: "user",
    element: <UserLayout />,
  },
]);
