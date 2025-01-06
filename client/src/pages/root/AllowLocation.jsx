import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useState } from "react";


const mapContainerStyle = {
  width: "100%",
  height: "400px",
};


export const AllowLocation = () => {
  const [locations] = useState([
    "Kannur",
    "Alappuzha",
    "Kottayam",
    "Kochi",
    "Thiruvananthapuram",
    "Kozhikode",
    "Thrissur",
    "Kollam",
  ]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const handleSelectChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // finde  lag and lat
  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          console.error("Error retrieving location:", error.message);
          setCurrentLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
    }
  };


  //import env
  const [storeKey]= useState(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <LoadScript googleMapsApiKey ={storeKey} >
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-0">
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
          <h4 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Allow Location
          </h4>

          <div className="text-center mb-6">
            <button
              className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
              onClick={handleAllowLocation}
            >
              Allow 
            </button>
          </div>

          {currentLocation.error && (
            <p className="text-center text-red-500 mb-4">{currentLocation.error}</p>
          )}

          {/* {currentLocation.latitude && currentLocation.longitude && (
            <p className="text-center text-green-500 mb-4">
              Current Location: Latitude {currentLocation.latitude}, Longitude{" "}
              {currentLocation.longitude}
            </p>
          )} */}

          <p className="text-center mb-6">Select or Manually Enter Location</p>

          <select
            value={selectedLocation}
            onChange={handleSelectChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white shadow-md hover:border-gray-400 transition-all max-h-48 overflow-y-auto"
          >
            <option value="" disabled>
              Select a location
            </option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

          {currentLocation.latitude && currentLocation.longitude && (
            <div className="mt-4 w-full">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{
                  lat: currentLocation.latitude,
                  lng: currentLocation.longitude,
                }}
                zoom={12}
              >
                <Marker
                  position={{
                    lat: currentLocation.latitude,
                    lng: currentLocation.longitude,
                  }}
                />
              </GoogleMap>
            </div>
          )}
        </div>
      </div>
    </LoadScript>
  );
};

export default AllowLocation;
