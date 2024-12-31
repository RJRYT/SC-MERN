export const AllowLocation = () => {
  return<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="p-6 bg-white rounded-lg shadow-md w-[400px]">
    <h4 className="text-2xl font-semibold text-center text-gray-800 mb-6">
      Allow Location
    </h4>

    <div className="text-center mb-6">
      <button className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
        Allow
      </button>
    </div>


    <p className="text-center text-gray-600 mb-4">Manually Enter Location</p>

    <input
      type="text"
      placeholder="Value"
      className="w-full p-3 border-2 border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:border-gray-100"
    />
  </div>
</div>
};
