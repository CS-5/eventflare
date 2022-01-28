import { FunctionComponent } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

/*

This section is a map of the event location.

*/

interface Props {
  mapsApiKey: string;
  center: {
    lat: number;
    lng: number;
  };
}

const LocationSection: FunctionComponent<Props> = ({ mapsApiKey, center }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "2rem",
  };

  const options = {
    disableDefaultUI: true,
  };

  //TODO Link to actual location
  return (
    <LoadScript googleMapsApiKey={mapsApiKey}>
      <GoogleMap
        zoom={15}
        mapContainerStyle={containerStyle}
        center={center}
        options={options}
      />
    </LoadScript>
  );
};

export default LocationSection;
