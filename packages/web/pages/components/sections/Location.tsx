import { FunctionComponent, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { EVENT_LOCATION } from "../../../constants";

/*

This section is a map of the event location.

*/

interface Props {
  mapsApiKey: string;
}

const LocationSection: FunctionComponent<Props> = ({ mapsApiKey }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "2rem",
  };

  const center = {
    lat: EVENT_LOCATION.lat,
    lng: EVENT_LOCATION.lng,
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
