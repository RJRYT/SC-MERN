import { createBrowserRouter } from "react-router-dom";
import { FillProfile } from "../pages/auth/FillProfile";
import { CongratulationsPage } from "../pages/auth/CongratulationPage";
export const router = createBrowserRouter([
  {
    path: "fillprofile",
    element: <FillProfile />,
  },
  {
    path: "congratulationpage",
    element: <CongratulationsPage />,
  },
]);
