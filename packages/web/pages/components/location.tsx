import { FunctionComponent, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface Props {
  mapsApiKey: string;
}

export const LocationSection: FunctionComponent<Props> = ({ mapsApiKey }) => {
  const [map, setMap] = useState(null);

  return (
    <LoadScript googleMapsApiKey={mapsApiKey}>
      <GoogleMap zoom={10} />
    </LoadScript>
  );
};
