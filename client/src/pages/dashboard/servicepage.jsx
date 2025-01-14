import ServicePageComp from '../../components/ServicePageCard/service';
import Header from '../../components/header/Header';
const ServicePage = () => {
  return (
    <>
      <Header title="SERVICES" showSettings showSearch />
      <div className="xl:w-2/6 w-full bg-[#d9d9db] mx-auto h-fit flex items-center flex-col gap-10 pb-5">
        <div className="mt-10">hello</div>
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
