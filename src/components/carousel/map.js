import React, { useContext, useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import WebMercatorViewport from "viewport-mercator-project";
import styled, { ThemeContext } from "styled-components";
import bbox from "@turf/bbox";

import { MAPBOX_TOKEN } from "../../config";
import { hexToRgb } from "../../utils";

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

  const getBounds = data => {
    const getCorner = (start, end) => bbox(data).slice(start, end);

    return [getCorner(0, 2), getCorner(2, 4)];
  };

  useEffect(() => {
    const handleViewState = (data, width, height, padding) =>
      new WebMercatorViewport({
        width,
        height
      }).fitBounds(getBounds(data), {
        padding
      });

    data &&
      canvasSize &&
      setViewState(handleViewState(data, ...canvasSize, 100));
  }, [data, canvasSize]);

  const layers = [
    new GeoJsonLayer({
      id: "territory",
      data,
      stroked: false,
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
