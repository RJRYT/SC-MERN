import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { RootLayout } from "../layouts/RootLayout";
import { UserLayout } from "../layouts/UserLayout";
import { RegisterNow } from "../pages/root/RegisterNow";
 import { SplashScreen } from "./../pages/root/SplashScreen";
 import Notification from "./../pages/notification/Notification"
import CakeDelivery from "../pages/cakeDelivery/CakeDelivery";
// import { Login } from "../pages/root/Login";

export const router = createBrowserRouter([
  {
    index: true,
    path: "",
    element: <SplashScreen />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "cakeDelivery",
    element: <CakeDelivery/>,
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
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
      
    ],
  },
]);
