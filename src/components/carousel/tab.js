import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import Heading from "../ui/heading";
import Numbers from "./numbers";
import Map from "../map";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  background-color: var(--color-secondary);
`;

const Meta = styled.div`
  padding: 3.5rem 5rem 4rem;

  h3,
  p,
  span {
    color: var(--color-white);
  }
`;

const Info = styled(ReactMarkdown)`
  margin-bottom: 2rem;
`;

const Tab = ({ data }) => {
  const { Name, Description, map, LeadMapMeta } = data;

  return (
    <Container>
      <Meta>
        <Heading as="h3">{Name}</Heading>
        <Info source={Description || "Нет описания"} />
        <Numbers data={LeadMapMeta} />
      </Meta>
      <Map data={map} />
    </Container>
  );
};

export default Tab;
