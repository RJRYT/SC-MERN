import ServicePageComp from '../../components/ServicePageCard/service';
import Header from '../../components/header/Header';
import { useState } from 'react';
import Widget from '../../components/widget/Widget';
import Tabs from '../../components/tabs/Tabs';

const ServicePage = () => {
  const [check, setCheck] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  console.log(check);
  const tabs = [
    { name: 'ongoing', label: 'Ongoing' },
    { name: 'complete', label: 'Complete' },
  
];
  return (
    <div className="bg-[#d9d9db] min-h-screen w-full">
      <Header title="SERVICES" showSettings showSearch />
      <div className="bg-[#d9d9db] flex justify-center">
        <div className="w-[350px] md:w-[700px] mx-auto h-fit flex items-center flex-col gap-10 pb-5">
          {/* <label
            htmlFor="check"
            className="mt-10 w-full h-12 bg-[#736967] rounded-full relative cursor-pointer"
          >
            <input id="check" type="checkbox" className="sr-only peer" />
            <span className="bg-white w-3/6 h-4/5 absolute rounded-full left-4 top-1 peer-checked:bg-white peer-checked:left-44"></span>
            <h2 className="absolute top-2 left-7 text-xl font-bold font-jost">
              Ongoing
            </h2>
            <h2 className="absolute right-12 top-2 text-xl font-bold text-black font-jost">
              Complete
            </h2>
          </label> */}
     
                <Tabs
                    tabs={tabs}
                    defaultActive="ongoing"
                    onTabChange={(tabName) => setActiveTab(tabName)}
                />
                
          <div className="flex flex-col gap-10">
            <ServicePageComp
              first="Graphic Design"
              second="Graphic Design Advanced"
              rating="4.5"
            />
            <ServicePageComp
              first="Graphic Design"
              second="Advanced Diploma in Graphics Design"
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
      </div>
      <Widget/>
    </div>
  );
};

export default ServicePage;
