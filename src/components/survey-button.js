import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const Btn = styled(Button)`
  padding-left: 3rem;
  padding-right: 3rem;
  height: 4rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.12;
  background-color: var(--color-primary);

  &,
  & span {
    color: #494949;
  }

  :active,
  :hover,
  :focus {
    background-color: #dedede;
  }
`;

const SurveyButton = props => <Btn {...props} />;

export default SurveyButton;
