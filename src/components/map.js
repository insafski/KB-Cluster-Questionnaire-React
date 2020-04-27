import React, { useContext, useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import styled, { ThemeContext } from "styled-components";
import geojsonExtent from "@mapbox/geojson-extent";
import geoViewport from "@mapbox/geo-viewport";
import buffer from "@turf/buffer";

import { MAPBOX_TOKEN } from "../config";
import { hexToRgb } from "../utils";

const Container = styled.div`
  position: relative;
`;

const Map = ({ data }) => {
  const theme = useContext(ThemeContext);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 13,
    pitch: 0,
    bearing: 0
  });
  const [canvasSize, setCanvasSize] = useState([]);

  const getLayerCenter = (data, size) =>
    geoViewport.viewport(geojsonExtent(buffer(data, 0.5)), size);

  const handleViewState = ({ center, zoom }) => ({
    longitude: center[0],
    latitude: center[1],
    zoom,
    pitch: 0,
    bearing: 0
  });

  useEffect(() => {
    data &&
      canvasSize &&
      setViewState(handleViewState(getLayerCenter(data, canvasSize)));
  }, [data, canvasSize]);

  const layers = [
    new GeoJsonLayer({
      id: "territory",
      data,
      filled: true,
      getFillColor: hexToRgb(theme.color.primary),
      opacity: 0.5
    })
  ];

  return (
    <Container>
      <DeckGL
        {...{ viewState, layers }}
        getCursor={() => "auto"}
        onResize={({ width, height }) => setCanvasSize([width, height])}
      >
        <StaticMap
          mapboxApiAccessToken={MAPBOX_TOKEN}
          attributionControl={false}
          preventStyleDiffing
        />
      </DeckGL>
    </Container>
  );
};

export default Map;
