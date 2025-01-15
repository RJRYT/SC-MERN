import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const SignUp = lazy(() => import("../pages/auth/Signup"));
const Login = lazy(() => import("../pages/auth/Login"));
const OtpVerification = lazy(() => import("../pages/auth/OtpVerification"));
const SplashScreen = lazy(() => import("../pages/common/SplashScreen"));
const AllowLocation = lazy(() => import("../pages/auth/AllowLocation"));
const AccessDenied = lazy(() => import("../pages/common/AccessDenied"));
const NotFound = lazy(() => import("../pages/common/notFound"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Profile = lazy(() => import("../pages/dashboard/Profile"));
const Settings = lazy(() => import("../pages/dashboard/Settings"));
const Terms = lazy(() => import("../pages/common/Terms"));
const About = lazy(() => import("../pages/common/About"));
const NotificationSett = lazy(() => import("../pages/common/Notification"));
const FillProfile = lazy(() => import("../pages/auth/FillProfile"));
const HelpCenter = lazy(() => import("../pages/helpcenter/HelpCenter"));
const CongratulationsPage = lazy(() =>
  import("../pages/auth/CongratulationPage")
);

import Inbox from "../pages/root/Inbox";
const ProviderProfile = lazy(() => import("../pages/common/ProviderProfile"));
const ForgotPage = lazy(() => import("../pages/auth/ForgotPassword"));
const CreateNewPassword = lazy(() => import("../pages/auth/CreateNewPassword"));
const Notification = lazy(() => import("./../pages/notification/Notification"));
const SearchBarPage = lazy(() => import("../pages/common/SearchBarPage"));
const Category = lazy(() => import("../pages/root/Category"));

import ErrorElement from "../pages/common/ErrorElement";
import ErrorBoundary from "../pages/common/ErrorBoundary";
import LoadingSpinner from "../components/common/LoadingSpinner";

import Transactions from "../pages/transactions/Transactions";



const CakeDelivery = lazy(() => import("../pages/cakeDelivery/CakeDelivery"));
const Home = lazy(() => import("../pages/dashboard/Home"));
const EditProfile = lazy(() => import("../pages/auth/EditProfile"));
const ProfilePage = lazy(() => import("../pages/auth/ProfilePage"));
const Review = lazy(() => import("../pages/auth/Review"));
const Reviews = lazy(() => import("../pages/auth/Reviews"));

const PaymentReceipt = lazy(() => import("../pages/payment/PaymentReceipt"))
const WrappedComponent = ({ element }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
  </ErrorBoundary>
);



const router = createBrowserRouter([
  {
    index: true,
    path: "",
    element: <WrappedComponent element={<SplashScreen />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "signup",
    element: <WrappedComponent element={<SignUp />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "login",
    element: <WrappedComponent element={<Login />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "allowlocation",
    element: <WrappedComponent element={<AllowLocation />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "about",
    element: <WrappedComponent element={<About />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "terms",
    element: <WrappedComponent element={<Terms />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "notification",
    element: <WrappedComponent element={<NotificationSett />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "notification2",
    element: <WrappedComponent element={<Notification />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "fillprofile",
    element: <WrappedComponent element={<FillProfile />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "congratulationpage",
    element: <WrappedComponent element={<CongratulationsPage />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "otpverification",
    element: <WrappedComponent element={<OtpVerification />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "newpassword",
    element: <WrappedComponent element={<CreateNewPassword />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "searchbarpage",
    element: <WrappedComponent element={<SearchBarPage />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "newpassword",
    element: <WrappedComponent element={<CreateNewPassword />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "searchbarpage",
    element: <WrappedComponent element={<SearchBarPage />} />,
    errorElement: <ErrorElement />,

  },
  {
    path:"inbox",
    element: <WrappedComponent element={<Inbox />} />,
    errorElement: <ErrorElement />,
  },
  {
    path:"review",
    element: <WrappedComponent element={<Review />} />,
    errorElement: <ErrorElement />,
  },
  {
    path:"reviews",
    element: <WrappedComponent element={<Reviews />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "help",
    element: <WrappedComponent element={<HelpCenter />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "providerprofile",
    element: <WrappedComponent element={<ProviderProfile />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "Category",
    element: <WrappedComponent element={<Category />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "forgotpassword",
    element: <WrappedComponent element={<ForgotPage />} />,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "cakeDelivery",
    element: <WrappedComponent element={<CakeDelivery />} />,
    ErrorBoundary: <ErrorElement />,
  },
  {
    path: "transactions",
    element: <WrappedComponent element={<Transactions />} />,
    ErrorBoundary: <ErrorElement />,
  },
  {
    path: "profilepage",
    element: <WrappedComponent element={<ProfilePage />} />,
    ErrorBoundary: <ErrorElement />,
  },

  {
    path: "editprofile",
    element: <WrappedComponent element={<EditProfile />} />,
    ErrorBoundary: <ErrorElement />,
  },
  {
    path: "dashboard",
    element: <WrappedComponent element={<Dashboard />} />,
    // Example parent route
    ErrorBoundary: <ErrorElement />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "home", element: <Home /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "payment",
    element: <WrappedComponent element={<PaymentReceipt />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "accessdenied",
    element: (
      <ErrorBoundary>
        <AccessDenied />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
