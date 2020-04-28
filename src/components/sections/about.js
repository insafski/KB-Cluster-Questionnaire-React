import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

import Section from "../section";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import Logos from "../logos";
import { API_HOST } from "../../config";
import { handleMinWidth } from "../../utils";
import { StateContext } from "../../context";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;
  background-image: ${({ img }) => img && `url(${API_HOST + img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) =>
      handleMinWidth(theme.breakpoint.mobile)}) {
    p,
    .ant-skeleton-content {
      margin-bottom: 3rem;
      max-width: 60%;
    }
  }

  .ant-skeleton:not(.ant-skeleton-element) {
    + .ant-skeleton-element {
      .ant-skeleton-button {
        height: 4rem;
        width: 8rem;
        border-radius: 2rem;
      }
    }
  }
`;
const InnerContainer = styled.div`
  max-width: 40rem;
`;

const About = ({ data }) => {
  const {
    state: { loading }
  } = useContext(StateContext);
  const { Name, description, background } = data ?? {};

  return (
    <Container id="about" img={background?.url}>
      <InnerContainer>
        <Logos />
        {!loading && Name && description ? (
          <>
            <Heading as="h1">{Name}</Heading>
            <Paragraph type="primary">{description}</Paragraph>
            <Link to="#participate">
              <Button type="primary">Перейти к опросу</Button>
            </Link>
          </>
        ) : (
          <>
            <Skeleton />
            <Skeleton.Button />
          </>
        )}
      </InnerContainer>
    </Container>
  );
};

export default About;
