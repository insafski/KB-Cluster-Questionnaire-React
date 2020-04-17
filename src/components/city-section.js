import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import Section from "./section";
import SurveyButton from "./survey-button";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 3rem;
    max-width: 60%;
  }
`;

const CitySection = ({ data }) => {
  const { Name, Description } = data ?? {};

  return (
    <Container id="city">
      <h1>{Name || "Нет названия"}</h1>
      <p>{Description || "Нет описания"}</p>
      <Link smooth to="#participate">
        <SurveyButton>Перейти к опросу</SurveyButton>
      </Link>
    </Container>
  );
};

export default CitySection;
