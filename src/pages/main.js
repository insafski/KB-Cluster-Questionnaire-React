import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import About from "../components/sections/about";
import Territories from "../components/sections/territories";
import Participate from "../components/sections/participate";
import { handleMinWidth } from "../utils";
import { StateContext } from "../context";
import Footer from "../components/footer";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;

  @media screen and (min-width: ${({ theme }) =>
      handleMinWidth(theme.breakpoint.tablet)}) {
    scroll-snap-type: y mandatory;
  }
`;

const Main = ({ data, loading, location }) => {
  const { dispatch } = useContext(StateContext);
  const { hash } = location ?? {};
  const [city] = data?.cities ?? [];
  const { territories, meta } = city ?? {};

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }

    dispatch({ type: "CHANGE_LOADING_STATE", payload: loading });
  }, [dispatch, loading, hash]);

  return (
    <Container>
      <About data={city} />
      <Territories data={territories} />
      <Participate data={city} />
      <Footer data={meta} />
    </Container>
  );
};

export default Main;
