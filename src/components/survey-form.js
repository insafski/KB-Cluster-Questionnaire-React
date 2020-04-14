import React from "react";
import { Button, Checkbox, Form, Input, Radio, Upload } from "antd";

import Card from "./card";

const { TextArea } = Input;

const handleType = question => {
  const { type, options, defaultValue } = question;

  switch (type) {
    case "multiline":
      return <TextArea />;
    case "checkbox":
      return (
        <Checkbox.Group value={defaultValue}>
          {options.map((option, i) => (
            <Checkbox key={i} value={option}>
              {option}
            </Checkbox>
          ))}
        </Checkbox.Group>
      );
    case "radio":
      return (
        <Radio.Group value={defaultValue}>
          {options.map((option, i) => (
            <Radio key={i} value={option}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
      );
    case "upload":
      return <Upload />;
    default:
      return <Input />;
  }
};

const validateMessages = {
  required: "Обязательное поле"
};

const SurveyForm = ({ fields, onFinish }) => (
  <Form {...{ onFinish, validateMessages }} layout="vertical">
    {fields.map((question, i) => {
      const { group, label } = question;

      return (
        <Card key={i}>
          {label && <h3>{label}</h3>}
          {group &&
            group.map((item, i) => {
              const { label, required, message } = item;

              return (
                <Form.Item
                  {...{ label }}
                  key={i}
                  name={label}
                  rules={[{ required, message }]}
                >
                  {handleType(item)}
                </Form.Item>
              );
            })}
        </Card>
      );
    })}
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Отправить
      </Button>
    </Form.Item>
  </Form>
);

export default SurveyForm;
