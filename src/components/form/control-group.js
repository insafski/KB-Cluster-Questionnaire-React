import React from "react";
import { Checkbox, Form, Radio } from "antd";
import styled from "styled-components";

import { API_HOST } from "../../config";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-large);
  &:has(.ant-checkbox-checked) {
    outline: 0.125rem solid var(--color-primary);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
  }

  .ant-checkbox {
    margin: 0 1rem;
    width: 1.125rem;

    &-inner {
      width: 1rem;
      height: 1rem;
    }

    &-wrapper {
      flex: 1;
      padding-right: 1rem;

      &,
      span:not(.ant-checkbox) {
        display: flex;
        align-items: center;
      }

      span:not(.ant-checkbox) {
        justify-content: space-between;
        padding: 0;
        width: 100%;
      }

      min-height: 10rem;
      font-weight: var(--font-weight-semi-bold);
      border: 0;

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        min-height: auto;
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

const ControlGroup = ({ name, label, type, defaultValue, options }) => {
  const Component = type === "radio" ? Radio : Checkbox;

  return (
    <Form.Item name={name ? name : label} noStyle>
      <Component.Group {...{ defaultValue }}>
        {options.map((option, i) => {
          const { value, image } = option;

          return (
            <Container key={i}>
              {image && <img alt={value} src={API_HOST + image} />}
              <Component {...{ value }}>{value}</Component>
            </Container>
          );
        })}
      </Component.Group>
    </Form.Item>
  );
};

export default ControlGroup;
