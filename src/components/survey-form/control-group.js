import React from "react";
import { Checkbox, Form, Radio } from "antd";
import styled from "styled-components";

import { baseUrl } from "../../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    align-self: flex-start;
    max-width: 100%;
    height: auto;
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
              <Component {...{ value }}>{value}</Component>
              {image && <img alt={value} src={baseUrl + image} />}
            </Container>
          );
        })}
      </Component.Group>
    </Form.Item>
  );
};

export default ControlGroup;
