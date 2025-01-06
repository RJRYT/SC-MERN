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

import ErrorElement from "../pages/common/ErrorElement";
import ErrorBoundary from "../pages/common/ErrorBoundary";
import LoadingSpinner from "../components/common/LoadingSpinner";

const router = createBrowserRouter([
  {
    index: true,
    path: "",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <SplashScreen />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "signup",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <SignUp />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "login",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Login />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "allowlocation",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <AllowLocation />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "otpverification",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <OtpVerification />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "dashboard",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Dashboard />
        </Suspense>
      </ErrorBoundary>
    ), // Example parent route
    ErrorBoundary: <ErrorElement />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
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
