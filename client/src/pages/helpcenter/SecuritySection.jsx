import Header from '../../components/header/Header';
import { FaChevronRight } from 'react-icons/fa6';
const SecuritySection = () => {
  return (
    <>
      <Header title="SECURITY" />
      <div className="border-2 xl:w-2/6 md:w-3/6 p-10 w-full mx-auto h-[calc(100vh_-_75px)] flex flex-col gap-10 font-mulish font-semibold">
        <div className="flex justify-between">
          <h1>Remember Me</h1>
          <label
            for="check"
            className="bg-gray-300 w-16 h-8 flex cursor-pointer rounded-full relative"
          >
            <input type="checkbox" id="check" className="sr-only peer"></input>
            <span className=" w-2/5 bg-gray-800 h-4/5 absolute rounded-full top-1 left-2 peer-checked:bg-black peer-checked:left-7 transition-all duration-300"></span>
          </label>
        </div>
        <div className="flex justify-between ">
          <div>Biometric ID</div>
          <label
            for="check2"
            className="bg-gray-300 w-16 h-8 flex cursor-pointer rounded-full relative"
          >
            <input type="checkbox" id="check2" className="sr-only peer"></input>
            <span className=" w-2/5 bg-gray-800 h-4/5 absolute rounded-full top-1 left-2 peer-checked:bg-black peer-checked:left-7 transition-all duration-300"></span>
          </label>
        </div>
        <div className="flex justify-between">
          <div>Face ID</div>
          <label
            for="check3"
            className="bg-gray-300 w-16 h-8 flex cursor-pointer rounded-full relative"
          >
            <input type="checkbox" id="check3" className="sr-only peer"></input>
            <span className=" w-2/5 bg-gray-800 h-4/5 absolute rounded-full top-1 left-2 peer-checked:bg-black peer-checked:left-7 transition-all duration-300"></span>
          </label>
        </div>
        <div className="flex justify-between">
          <div>Google Authenticator</div>
          <div>
            <FaChevronRight className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SecuritySection;
