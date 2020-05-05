import React, { useContext } from "react";
import styled from "styled-components";

import { API_HOST } from "../../../config";
import { StateContext } from "../../../context";
import Section from "../../section";
import Info from "./info";
import BgMap from "./bg-map";

const Container = styled(Section)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ img }) => img && `url(${API_HOST + img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: linear-gradient(
      to right,
      var(--color-main-bg),
      var(--color-primary)
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
  }
`;
const InnerContainer = styled.div`
  max-width: 40rem;
`;

const About = ({ data }) => {
  const {
    state: { loading }
  } = useContext(StateContext);
  const { Name, description, background, latitude, longitude, meta } =
    data ?? {};

  return (
    <Container id="about" img={background?.url}>
      <InnerContainer>
        <Info
          {...{ loading, description }}
          name={Name}
          logotypes={meta?.logotypes}
        />
      </InnerContainer>
      <BgMap {...{ latitude, longitude }} />
    </Container>
  );
};

export default About;
