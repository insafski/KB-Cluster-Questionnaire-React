import React from "react";
import styled from "styled-components";

import Section from "./section";
import map from "../images/map.jpg";

const Container = styled(Section)`
  flex-direction: column;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 8rem;

  h2 {
    max-width: 60%;
    margin-bottom: 3rem;
    color: #000;
  }

  p {
    margin-bottom: 3rem;
    max-width: 60%;
    color: #000;
  }
`;

const Description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const MapSection = ({ data }) => {
  const { Name } = data ?? {};

  return (
    <Container id="map" bgImage={map}>
      <h2>{Name}</h2>
      <p>{Description}</p>
    </Container>
  );
};

export default MapSection;
