import React, { useState } from "react";
import { Checkbox, Radio } from "antd";

import { API_HOST } from "../../config";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-large);
  outline: 0.125rem solid
    ${({ checked }) => (checked ? "var(--color-primary)" : "transparent")};
  transition: outline 0.3s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
  }

  .ant {
    &-checkbox,
    &-radio {
      margin: 0 1rem;

      &-inner {
        width: 1rem;
        height: 1rem;
      }

      &-wrapper {
        display: flex;
        align-items: center;
        flex: 1;
        padding-right: 1rem;
        white-space: normal;

        &,
        span:not(.ant-checkbox, .ant-radio) {
          display: flex;
          align-items: center;
        }

        span:not(.ant-checkbox, .ant-radio) {
          justify-content: space-between;
          padding: 0;
          width: 100%;
        }

        min-height: 10rem;
        font-weight: var(--font-weight-semi-bold);
        border: 0;

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoint.tablet}) {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          min-height: auto;
        }
      }
    }
  }

  img {
    align-self: flex-start;
    width: 10rem;
    height: 10rem;
    object-fit: cover;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

const Control = ({ type, option }) => {
  const [checked, setChecked] = useState(false);
  const Component = type === "radio" ? Radio : Checkbox;
  const { value, image } = option;

  return (
    <Container {...{ checked }}>
      {image && <img alt={value} src={API_HOST + image} />}
      <Component {...{ value }} onChange={e => setChecked(e.target.checked)}>
        {value}
      </Component>
    </Container>
  );
};

export default Control;
