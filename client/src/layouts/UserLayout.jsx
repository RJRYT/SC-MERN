import { Outlet } from "react-router-dom";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
