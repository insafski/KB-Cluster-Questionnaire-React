import React, { useContext, useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import WebMercatorViewport from "viewport-mercator-project";
import styled, { ThemeContext } from "styled-components";
import bbox from "@turf/bbox";

import { MAPBOX_TOKEN } from "../../config";
import Loader from "../loader";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 15rem;
  min-width: 15rem;
  background-color: var(--color-light-grey);

  .ant-spin-nested-loading {
    &,
    & > div {
      height: 100%;
      width: 100%;
    }
  }
`;

const Map = ({ data, isTablet }) => {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 13,
    pitch: 0,
    bearing: 0
  });
  const [canvasSize, setCanvasSize] = useState({});
  const { width, height } = canvasSize;

  const getBounds = data => {
    const getCorner = (start, end) => bbox(data).slice(start, end);

    return [getCorner(0, 2), getCorner(2, 4)];
  };

  useEffect(() => {
    const handleViewState = (geojson, width, height, padding) =>
      new WebMercatorViewport({
        width,
        height
      }).fitBounds(getBounds(geojson), { padding });

    data &&
      width > 0 &&
      height > 0 &&
      setViewState(handleViewState(data, width, height, isTablet ? 50 : 100));
  }, [data, width, height, isTablet]);

  return (
    <Loader spinning={isLoading}>
      <Container>
        <ReactMapGL
          {...{ viewState }}
          mapStyle="mapbox://styles/kbmax/cjvmkj6h20ecy1cogedjynhxj"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          attributionControl={false}
          preventStyleDiffing
          width="100%"
          height="100%"
          onLoad={() => setIsLoading(false)}
          onResize={size => setCanvasSize(size)}
        >
          <Source id="territory" type="geojson" {...{ data }}>
            <Layer
              id="fill"
              type="fill"
              paint={{ "fill-color": theme.color.primary, "fill-opacity": 0.5 }}
            />
          </Source>
        </ReactMapGL>
      </Container>
    </Loader>
  );
};

export default Map;
