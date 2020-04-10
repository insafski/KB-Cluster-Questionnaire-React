import React from "react";
import styled from "styled-components";

import Header from "../component/header";
import CitySection from "../component/city-section";
import TerritorySection from "../component/territory-section";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;

const Main = ({ data, title }) => {
  return (
    <Container>
      <Header {...{ title }} />
      <CitySection data={data?.cities?.[0]} />
      <TerritorySection data={data?.territories} />
    </Container>
  );
};

export default Main;
