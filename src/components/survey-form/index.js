import React from "react";
import { Button, Form, Input, Radio, Upload } from "antd";
import styled from "styled-components";

import Card from "../card";
import ControlGroup from "./control-group";

const { TextArea } = Input;

const Container = styled.div`
  .ant {
    &-form-item-extra {
      color: #aaa;
    }

    &-input {
      color: #000;

      :focus {
        border-color: #7d7373;
      }
    }

    &-checkbox {
      :hover .ant-checkbox-inner {
        border-color: #c4c4c4;
      }

      &-group {
        display: flex;
        flex-direction: column;
      }

      &-wrapper {
        margin-left: 0;
      }

      &-checked {
        .ant-checkbox-inner {
          background-color: #000;
          border-color: #000;
        }

        ::after {
          border-color: #000;
        }
      }
    }

    &-checkbox-wrapper,
    &-btn {
      color: #000;
    }
  }
`;

const handleType = question => {
  const { type, options: initialOptions, defaultValue } = question;
  const options = initialOptions?.map(option => ({
    ...option,
    label: option?.value
  }));

  switch (type) {
    case "multiline":
      return <TextArea />;
    case "checkbox":
      return <ControlGroup {...{ defaultValue, options }} />;
    case "radio":
      return (
        <Radio.Group {...{ defaultValue }}>
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
  <Container>
    <Form
      {...{ onFinish, validateMessages }}
      layout="vertical"
      hideRequiredMark
    >
      {fields.map((question, i) => {
        const { group, label } = question;

        return (
          <Card key={i}>
            {label && <h3>{label}</h3>}
            {group &&
              group.map((item, i) => {
                const { name, label, required } = item;

                return (
                  <Form.Item
                    {...{ label, required }}
                    key={i}
                    name={name || label}
                    extra={!required && "Опционально"}
                    rules={
                      name === "email" && [
                        {
                          type: "email",
                          message: "Введите корректный email!"
                        }
                      ]
                    }
                  >
                    {handleType(item)}
                  </Form.Item>
                );
              })}
          </Card>
        );
      })}
      <Card>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Card>
    </Form>
  </Container>
);

export default SurveyForm;
