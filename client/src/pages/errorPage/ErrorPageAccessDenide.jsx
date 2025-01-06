export const ErrorPageAccessDenide = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1D1F2A] text-white px-4">
     
      <h3 className="text-[100px] text-[#F6E89A] leading-none sm:text-[80px] md:text-[100px]">
        403
      </h3>
      <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] mt-9">
        Access Denide
      </p>

      {/* fontt*/}
      <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] mt-6">
        Sorry, you don&apos;t
      </p>
      <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] ">
        have permission to
      </p>
      <p className="text-[25px] font-body sm:text-[20px] md:text-[25px] ">
        this page
      </p>

      {/* Back button */}
      <div className="mt-16">
        <button className="flex items-center justify-center gap-2 rounded-md w-full max-w-[400px] px-6 py-3 sm:px-4 sm:py-2 outline outline-[4px] outline-[white] hover:bg-[#2f3453] hover:text-[white] transition duration-300">
          <span className="text-[11px] font-medium sm:text-[20px] md:text-[11px]">
         Go back to the Previous page
          </span>
          <span className="text-[11px] font-bold sm:text-[15px] ">
            Chevron_Right
          </span>
        </button>
      </div>
    </div>
  );
};
