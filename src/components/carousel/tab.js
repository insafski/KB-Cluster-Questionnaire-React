import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import Heading from "../ui/heading";
import Numbers from "./numbers";
import Map from "./map";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background-color: var(--color-secondary);
  box-shadow: var(--shadow-large);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;

    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const Meta = styled.div`
  padding: 4rem 3.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 2.5rem 1.75rem;

    p,
    span {
      max-width: 80%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 1.5rem 1.25rem;

    p,
    span {
      max-width: 100%;
    }
  }

  h3,
  p,
  span {
    color: var(--color-white);
  }
`;

const Info = styled(ReactMarkdown)`
  margin-bottom: 2rem;
`;

const Tab = ({ data, isTablet }) => {
  const { Name, Description, map, LeadMapMeta } = data;

  return (
    <Container>
      <Meta>
        <Heading as="h3">{Name}</Heading>
        <Info source={Description || "Нет описания"} />
        <Numbers data={LeadMapMeta} />
      </Meta>
      <Map data={map} {...{ isTablet }} />
    </Container>
  );
};

export default Tab;
