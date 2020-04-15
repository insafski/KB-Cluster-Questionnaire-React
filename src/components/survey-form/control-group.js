import React from "react";
import { Checkbox, Radio } from "antd";
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

const ControlGroup = ({ type, defaultValue, options }) => {
  const Component = type === "radio" ? Radio : Checkbox;

  return (
    <Component.Group {...{ defaultValue }}>
      {options.map((option, i) => {
        const { value, image } = option;

        return (
          <Container key={i}>
            {image && <img alt={value} src={baseUrl + image} />}
            <Component label={value} {...{ value }}>
              {value}
            </Component>
          </Container>
        );
      })}
    </Component.Group>
  );
};

export default ControlGroup;
