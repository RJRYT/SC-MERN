import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { RootLayout } from "../layouts/RootLayout";
import { UserLayout } from "../layouts/UserLayout";
import About from "../pages/root/About";
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
    ],
  },
  {
    path: "user",
    element: <UserLayout />,

  },
  {
    path:"root",
    element:<About/>
  }
 
]);
