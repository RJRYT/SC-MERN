import React, { useState } from "react";
import FaqPage from "./FaqPage";
import ContactUs from "./ContactUs";
import Header from "../../components/header/Header";

function HeaderComponent() {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <div className="flex w-full flex-col">
      <Header title="HELP CENTER" showSearch showSettings />

      <div className="bg-gray-300 w-full h-20 flex">
        <button
          className={`w-1/2 p-4 ${
            activeTab === "faq"
              ? "bg-gray-bg text-black border-b-2 border-blue-900"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setActiveTab("faq")}
        >
          FAQ
        </button>
        <button
          className={`w-1/2 p-4 ${
            activeTab === "contact"
              ? "bg-bg-gray-bg text-black border-b-2 border-blue-900"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          CONTACT US
        </button>
      </div>

      <div>{activeTab === "faq" ? <FaqPage /> : <ContactUs />}</div>
    </div>
  );
}

export default HeaderComponent;
