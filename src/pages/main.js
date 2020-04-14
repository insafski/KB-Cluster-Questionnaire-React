import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/header";
import CitySection from "../components/city-section";
import Index from "../components/territory-section";
import Footer from "../components/footer";
import MapSection from "../components/map-section";
import { StateContext } from "../context";
import ParticipateSection from "../components/participate-section";
import Loader from "../components/loader";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Main = ({ data, title, loading, location }) => {
  const { state } = useContext(StateContext);
  const { territory } = state;
  const activeTerritory = data?.territories?.filter(
    item => item?.id === territory
  )?.[0];
  const { hash } = location ?? {};

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <Loader spinning={loading}>
      <Container>
        <Header {...{ title }} />
        <CitySection data={data?.cities?.[0]} />
        <Index data={data?.territories} />
        <MapSection data={activeTerritory} />
        <ParticipateSection data={activeTerritory} />
        <Footer />
      </Container>
    </Loader>
  );
};

export default Main;
