import React from "react";
import Card from "../../components/CategoryCard/card";
import Beauty from "../../../public/assets/images/BeautyServices.png";
import bike from "../../../public/assets/images/Delivery.png";
import business from "../../../public/assets/images/BusinesServices.png";
import event from "../../../public/assets/images/EventsnadParties.png";
import electronic from "../../../public/assets/images/ElectronicsAndRepair.png";
import cleaning from "../../../public/assets/images/CleaningServices.png";
import fitness from "../../../public/assets/images/HealthAndFitness.png";
import technology from "../../../public/assets/images/BusinesServices.png";
import laundry from "../../../public/assets/images/LaundryServices.png";
import homeapp from "../../../public/assets/images/HomeAppliances.png";
import all from "../../../public/assets/images/All.png";
import Header from "../../components/header/Header";
import Widget from "../../components/widget/Widget";

const Category = () => {
  const categories = [
    { heading: "ALL", img: all },
    { heading: "DELIVERY SERVICES", img: bike },
    { heading: "HOME APPLIANCE REPAIR", img: homeapp },
    { heading: "LAUNDRY SERVICES", img: laundry },
    { heading: "BUSINESS SERVICES", img: business },
    { heading: "EVENT AND PARTY", img: event },
    { heading: "CLEANING SERVICE", img: cleaning },
    { heading: "ELECTRONIC REPAIR", img: electronic },
    { heading: "TECHNOLOGY SERVICES", img: technology },
    { heading: "HEALTH AND FITNESS", img: fitness },
    { heading: "BEAUTY SERVICES", img: Beauty },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      <Header title="CATEGORIES" />
      <div className="bg-[#d9d9db] flex h-full justify-center p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 2xl:w-2/5 justify-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[120px] h-[120px] rounded-lg p-1 bg-gray-200 flex flex-col items-center justify-center shadow-md"
            >
              <img
                src={category.img}
                alt={category.heading}
                className="w-[80px] h-[80px] mb-2"
              />
              <p className="text-[10px] text-center font-bold text-gray-800">
                {category.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Widget/>
    </div>
  );
};

export default Category;
