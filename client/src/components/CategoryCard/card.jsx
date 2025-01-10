const Card = ({ img, heading }) => {
  return (
    <>
      <div className="w-[100x] sm:w-[125px] 2xl:w-[130px] h-36 2xl:h-36 bg-white flex flex-col justify-center items-center  gap-2 rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <div className=" w-28 h-24 bg-cover bg-center flex justify-center">
          <img src={img} className="h-full w-full"></img>
        </div>
        <span className="text-xs text-center W-8  ">{heading}</span>
      </div>
    </>
  );
};
export default Card;
