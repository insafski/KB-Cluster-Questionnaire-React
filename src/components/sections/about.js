import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { baseUrl } from "../../utils";
import Section from "../section";
import SurveyButton from "../survey-button";
import Heading from "../ui/heading";
import Text from "../ui/text";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;
  background-image: url(${({ img }) => img && baseUrl + img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 3rem;
    max-width: 60%;
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
        <Heading as="h1">{Name || ""}</Heading>
        <Text type="primary">{description || "Нет описания"}</Text>
        <Link to="#participate">
          <SurveyButton>Перейти к опросу</SurveyButton>
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default About;
