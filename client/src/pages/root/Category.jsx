import Card from '../../components/CategoryCard/card';
import beauty from '../../assets/beauty.png';
import bike from '../../assets/bikedelivery.png';
import business from '../../assets/business.png';
import event from '../../assets/event.png';
import electronic from '../../assets/electronic.png';
import cleaning from '../../assets/cleaning.jpeg';
import fitness from '../../assets/fitness.png';
import technology from '../../assets/technology.jpeg';
import laundry from '../../assets/laundry.jpeg';
import homeapp from '../../assets/homeappliance.png';
import all from '../../assets/pngtree-bento-like-menu-black-glyph-ui-icon-expand-software-chocolate-vector-png-image_47699632.jpg';
const Category = () => {
  return (
    <>
      <div className="bg-[#d9d9db] h-fit flex justify-center">
        <div className="mt-10 w-3/4  h-fit grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] gap-10 2xl:w-2/5 justify-items-center ">
          <Card heading="ALL" img={all}></Card>
          <Card heading="DELIVERY SERVICES" img={bike}></Card>
          <Card heading="HOME APPLIANCE REPAIR" img={homeapp} />
          <Card img={laundry} heading="LAUNDRY SERVICES"></Card>
          <Card img={business} heading="BUSINESS SERVICES"></Card>
          <Card img={event} heading="EVENT AND PARTY"></Card>
          <Card img={cleaning} heading="CLEANING SERVICE"></Card>
          <Card img={electronic} heading="ELECTRONIC REPAIR"></Card>
          <Card img={technology} heading="TECHNOLOGY SERVICES"></Card>
          <Card img={fitness} heading="HEALTH AND FITNESS"></Card>
          <Card img={beauty} heading="BEAUTY SERVICES"></Card>
        </div>
      </div>
    </>
  );
};
export default Category;
