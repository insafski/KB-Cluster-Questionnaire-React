import React, { useContext } from "react";
import styled from "styled-components";

import Header from "../components/header";
import CitySection from "../components/city-section";
import TerritorySection from "../components/territory-section";
import Footer from "../components/footer";
import MapSection from "../components/map-section";
import { StateContext } from "../context";
import ParticipateSection from "../components/participate-section";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;

const Main = ({ data, title }) => {
  const { state } = useContext(StateContext);
  const { territory } = state;
  const activeTerritory = data?.territories?.filter(
    item => item?.id === territory
  )?.[0];

  return (
    <Container>
      <Header {...{ title }} />
      <CitySection data={data?.cities?.[0]} />
      <TerritorySection data={data?.territories} />
      <MapSection data={activeTerritory} />
      <ParticipateSection data={activeTerritory} />
      <Footer />
    </Container>
  );
};

export default Main;
