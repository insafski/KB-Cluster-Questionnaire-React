import React, { useState } from "react";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";

import { MAPBOX_TOKEN } from "../../../config";
import Loader from "../../loader";

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const BgMap = ({ latitude, longitude }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MapContainer>
      <Loader spinning={isLoading}>
        {latitude > 0 && longitude > 0 && (
          <ReactMapGL
            {...{ latitude, longitude }}
            mapStyle="mapbox://styles/kbmax/cjvmkj6h20ecy1cogedjynhxj"
            width="100%"
            height="100%"
            zoom={13}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            attributionControl={false}
            preventStyleDiffing
            onLoad={() => setIsLoading(false)}
          />
        )}
      </Loader>
    </MapContainer>
  );
};

export default BgMap;
