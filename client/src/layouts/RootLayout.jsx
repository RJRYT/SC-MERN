import { Outlet } from "react-router-dom";
import { RootHeader } from "./../components/root/RootHeader";
import { RootFooter } from "./../components/root/RootFooter";

export const RootLayout = () => {
  return (
    <div>
      <RootHeader />

      <div>
        <Outlet />
      </div>
      <RootFooter />
    </div>
  );
};
