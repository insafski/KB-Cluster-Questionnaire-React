import React from "react";
import { Checkbox, Form, Radio } from "antd";

import Control from "./control";

const ControlGroup = ({ name, label, type, defaultValue, options }) => {
  const Component = type === "radio" ? Radio : Checkbox;

  return (
    <Form.Item name={name ? name : label} noStyle>
      <Component.Group {...{ defaultValue }}>
        {options.map((option, i) => (
          <Control key={i} {...{ option, type }} />
        ))}
      </Component.Group>
    </Form.Item>
  );
};

export default ControlGroup;
