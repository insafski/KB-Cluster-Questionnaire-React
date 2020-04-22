import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const Btn = styled(Button)`
  padding-left: 3rem;
  padding-right: 3rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.12;
  background-color: var(--color-primary);

  &,
  & span {
    color: var(--color-white);
  }

  :active,
  :hover,
  :focus {
    background-color: var(--color-grey);
  }
`;

const SurveyButton = props => <Btn {...props} />;

export default SurveyButton;
