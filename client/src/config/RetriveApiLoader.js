export const RetrieveApiLoader = () => {
    try {
      console.log("working with google-map-script");
      return {
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      };
    } catch (error) {
      console.error("Error in RetrieveApiLoader:", error);
      return null; 
    }
  };
  