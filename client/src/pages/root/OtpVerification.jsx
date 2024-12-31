export const OtpVerification = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="p-6 bg-white rounded-lg shadow-md w-[400px]">
        <h3 className="text-xl text-center mb-4">
          Code has been sent to (+91) ***_***_*542
        </h3>

        <div className="flex justify-between mb-4">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center mb-6">
          <button className="text-white w-[300px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
            Verify
          </button>
        </div>

        <div className="mt-4">
          <ul className="grid grid-cols-3 gap-4 text-center">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "x"].map(
              (key) => (
                <li
                  key={key}
                  className="cursor-pointer w-12 h-12 flex justify-center items-center text-lg bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  {key}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
