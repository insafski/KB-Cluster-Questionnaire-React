import React from "react";
import styled from "styled-components";

import Section from "../section";
import Carousel from "../carousel";
import Heading from "../ui/heading";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;
`;

const Territories = ({ data }) => (
  <Container id="territories">
    <Heading as="h2">Территории благоустройства</Heading>
    <Carousel slides={data || []} />
  </Container>
);

export default Territories;
