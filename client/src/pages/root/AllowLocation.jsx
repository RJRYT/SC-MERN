import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { RetrieveApiLoader } from "../../config/RetriveApiLoader"

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 10.5276416, 
  lng: 76.2144349, 
};

export const AllowLocation = () => {
  const [locations] = useState(["", "Alappuzha", "Kottayam", "Kochi", "Thiruvananthapuram"]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const [map, setMap] = useState(null);

  const handleSelectChange = (e) => {
    console.log("Selected location:", e.target.value);
    setSelectedLocation(e.target.value);
  };

  const handleAllowLocation = () => {
    console.log("Requesting current location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Current position retrieved:", position.coords);
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          // Update map center dynamically
          if (map) {
            map.setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          }
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

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyDB89qC8JKw5ITuXdNQ8hKelDKN0pL1bYE", 
  // });

    const { isLoaded } = useJsApiLoader(RetrieveApiLoader());

  const onLoad = useCallback((mapInstance) => {
    console.log("Map loaded:", mapInstance);
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    console.log("Map unmounted");
    setMap(null);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-0">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h4 className="text-2xl font-semibold text-center text-gray-800 mb-6">Allow Location</h4>

        <div className="text-center mb-6">
          <button
            className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
            onClick={handleAllowLocation}
          >
            Allow Location
          </button>
        </div>

        {currentLocation.error && (
          <p className="text-center text-red-500 mb-4">{currentLocation.error}</p>
        )}

        {currentLocation.latitude && currentLocation.longitude && (
          <p className="text-center text-green-500 mb-4">
            Current Location: Latitude {currentLocation.latitude}, Longitude {currentLocation.longitude}
          </p>
        )}

        <p className="text-center mb-6">Select or Manually Enter Location</p>

        <select
          value={selectedLocation}
          onChange={handleSelectChange}
          className="w-full p-3 border-2 border-gray-300 rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
      </div>

      <div className="mt-6 w-full max-w-md">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              currentLocation.latitude && currentLocation.longitude
                ? { lat: currentLocation.latitude, lng: currentLocation.longitude }
                : defaultCenter
            }
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        ) : (
          <p className="text-center text-gray-500">Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default AllowLocation;
