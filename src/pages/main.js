import React, { useEffect } from "react";
import styled from "styled-components";

import About from "../components/sections/about";
import Territories from "../components/sections/territories";
import Participate from "../components/sections/participate";
import Footer from "../components/footer";
import Loader from "../components/loader";

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Main = ({ data, loading, location }) => {
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
        <About data={data?.cities?.[0]} />
        <Territories data={data?.cities?.[0]?.territories} />
        <Participate data={data?.cities?.[0]} />
        <Footer />
      </Container>
    </Loader>
  );
};

export default Main;
