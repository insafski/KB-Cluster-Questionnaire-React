import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

import Section from "../section";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import Logos from "../logos";
import { apiUrl } from "../../config";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;
  background-image: ${({ img }) => img && `url(${apiUrl + img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p,
  .ant-skeleton-content {
    margin-bottom: 3rem;
    max-width: 60%;
  }

  .ant-skeleton-title {
    max-width: 40%;
  }
`;
const InnerContainer = styled.div`
  max-width: 40rem;
`;

const About = ({ data }) => {
  const { Name, description, background } = data ?? {};

  return (
    <Container id="about" img={background?.url}>
      <InnerContainer>
        <Logos />
        {Name ? (
          <Heading as="h1">{Name}</Heading>
        ) : (
          <Skeleton paragraph={false} />
        )}
        {description ? (
          <Paragraph type="primary">{description}</Paragraph>
        ) : (
          <Skeleton title={false} />
        )}
        <Link to="#participate">
          <Button type="primary">Перейти к опросу</Button>
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default About;
