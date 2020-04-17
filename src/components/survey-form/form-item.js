import React from "react";
import { Form, Input, Upload } from "antd";

import ControlGroup from "./control-group";

const { TextArea } = Input;

const FormItem = ({ name, label, required, item }) => {
  const { type, options, defaultValue } = item;

  const handleType = () => {
    switch (type) {
      case "multiline":
        return <TextArea />;
      case "checkbox":
      case "radio":
        return (
          <ControlGroup {...{ name, label, type, defaultValue, options }} />
        );
      case "upload":
        return <Upload />;
      default:
        return <Input />;
    }
  };

  const handledRules = () => {
    switch (type) {
      case "email":
        return [
          {
            type: "email",
            message: "Введите корректный email",
            required
          }
        ];
      case "checkbox":
      case "radio":
        return [
          {
            type: "array",
            message: "Выберите один из вариантов",
            required
          }
        ];
      default:
        return [{ required }];
    }
  };

  return (
    <Form.Item
      {...{ label, required }}
      hasFeedback={(type === "text" || type === "email") && true}
      name={name ? name : label}
      extra={!required && "Опционально"}
      rules={handledRules()}
      help="test"
    >
      {handleType()}
    </Form.Item>
  );
};

export default FormItem;
