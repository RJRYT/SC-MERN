import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import { RootLayout } from '../layouts/RootLayout';
import { UserLayout } from '../layouts/UserLayout';
import SignUp from '../pages/root/signup';
import Login from '../pages/root/Login';

// import { RegisterNow } from "../pages/root/RegisterNow";
// import { SplashScreen } from "./../pages/root/SplashScreen";
// import { Login } from "../pages/root/Login";

export const router = createBrowserRouter([
  {
    path: '/',
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
    path: 'user',
    element: <UserLayout />,
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
