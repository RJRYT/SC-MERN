import ServicePageComp from '../../components/ServicePageCard/service';
import Header from '../../components/header/Header';
import { useState } from 'react';
const ServicePage = () => {
  const [check, setCheck] = useState(false);
  console.log(check);
  return (
    <>
      <Header title="SERVICES" showSettings showSearch />
      <div className="xl:w-2/6 w-full bg-[#d9d9db] mx-auto h-fit flex items-center flex-col gap-10 pb-5">
        <label
          for="check"
          className="mt-10 w-96 h-12 bg-[#736967] rounded-full relative cursor-pointer"
        >
          <input id="check" type="checkbox" className="sr-only peer"></input>
          <span className="bg-white w-3/6 h-4/5 absolute rounded-full left-4 top-1 peer-checked:bg-white peer-checked:left-44"></span>
          <h2 className="absolute top-2 left-7 text-xl font-bold font-jost">
            Ongoing
          </h2>
          <h2 className="absolute right-12 top-2 text-xl font-bold text-black font-jost">
            Complete
          </h2>
        </label>
        <div className="flex flex-col gap-10">
          <ServicePageComp
            first="Graphic Design"
            second="Graphic Design Advanced"
            rating="4.5"
          />
          <ServicePageComp
            first="Graphic Design"
            second="Advanced Diploma in grahics design"
            rating="5.6"
          />
          <ServicePageComp
            first="Digital Marketing"
            second="Setup your Graphic Design"
            rating="6.6"
          />
          <ServicePageComp
            first="Web Development"
            second="Web Developer Concern"
            rating="6.6"
          />
        </div>
      </div>
    </>
  );
};
export default ServicePage;
