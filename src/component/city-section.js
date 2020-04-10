import React from "react";
import styled from "styled-components";

import Section from "./section";
import { Button } from "antd";

const Container = styled(Section)`
  padding-top: 12.5rem;

  h1 {
    margin-bottom: 3rem;
    font-weight: bold;
    font-size: 4.5rem;
    line-height: 1.2;
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

const Description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const CitySection = ({ data }) => {
  const { Name } = data ?? {};

  return (
    <Container>
      <h1>{Name}</h1>
      <p>{Description}</p>
      <Button type="primary">Перейти к опросу</Button>
    </Container>
  );
};

export default CitySection;
