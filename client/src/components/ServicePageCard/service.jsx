import { FaStar } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
const ServicePageComp = ({ first, second, rating }) => {
  return (
    <>
      <div className="w-[350px] md:w-[700px] h-[150px] rounded-2xl flex border-none">
        <div className="bg-black w-40 rounded-l-2xl border-none"></div>
        <div className="bg-white w-full rounded-r-2xl flex flex-col p-4 gap-2 relative">
          <h2 className="text-orange-600 font-bold mt-2 font-jost">{first}</h2>
          <h1 className="font-bold font-jost">{second}</h1>
          <div className="flex items-center gap-2 bg-gray-100 max-w-fit pl-1 pr-1 rounded-md">
            <FaStar className="text-yellow-600" />
            <span>{rating}</span>
          </div>
          <div className="w-fit p-1 bg-green-600 rounded-xl absolute  right-10 -top-2">
            <FaCircleCheck className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicePageComp;
