import React from "react";
import styled from "styled-components";

import Section from "./section";
import { Button } from "antd";
import { HashLink as Link } from "react-router-hash-link";

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

  .ant-btn-primary {
    padding-left: 3rem;
    padding-right: 3rem;
    height: 4rem;
    border-radius: 2rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.12;
    color: #494949;

    :active,
    :hover,
    :focus {
      background-color: #dedede;
    }
  }
`;

const CitySection = ({ data }) => {
  const { Name, Description } = data ?? {};

  return (
    <Container id="city">
      <h1>{Name || "Нет названия"}</h1>
      <p>{Description || "Нет описания"}</p>
      <Link smooth to="#participate">
        <Button type="primary">Перейти к опросу</Button>
      </Link>
    </Container>
  );
};

export default CitySection;
