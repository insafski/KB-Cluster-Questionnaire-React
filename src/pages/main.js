import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import About from "../components/sections/about";
import Territories from "../components/sections/territories";
import Participate from "../components/sections/participate";
import Footer from "../components/footer";
import { handleMinWidth } from "../utils";
import { StateContext } from "../context";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;

  @media screen and (min-width: ${({ theme }) =>
      handleMinWidth(theme.breakpoint.mobile)}) {
    scroll-snap-type: y mandatory;
  }
`;

const Main = ({ data, loading, location }) => {
  const { dispatch } = useContext(StateContext);
  const { hash } = location ?? {};

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
      <About data={data?.cities?.[0]} />
      <Territories data={data?.cities?.[0]?.territories} />
      <Participate data={data?.cities?.[0]} />
      <Footer data={data?.cities?.[0]?.site} />
    </Container>
  );
};

export default Main;
