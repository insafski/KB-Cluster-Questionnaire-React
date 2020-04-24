import React from "react";
import { Checkbox, Form, Radio } from "antd";
import styled from "styled-components";

import { apiUrl } from "../../config";

const Container = styled.div`
  .ant-checkbox {
    margin: 0 1rem;
    width: 1.125rem;

    &-wrapper {
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

      margin-bottom: 1.25rem;
      height: 9rem;
      font-weight: var(--font-weight-semi-bold);
      background-color: var(--color-white);
      box-shadow: var(--shadow-large);
      border: 0;

      &-checked {
        outline: 0.125rem solid var(--color-primary);
      }
    }
  }

  img {
    align-self: flex-start;
    width: 9rem;
    height: 9rem;
    object-fit: cover;
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
              <Component {...{ value }}>
                {value}
                {image && <img alt={value} src={apiUrl + image} />}
              </Component>
            </Container>
          );
        })}
      </Component.Group>
    </Form.Item>
  );
};

export default ControlGroup;
