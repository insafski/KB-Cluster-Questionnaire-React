import React from "react";
import { Form, Input, Upload } from "antd";
import styled from "styled-components";

import ControlGroup from "./control-group";

const { TextArea } = Input;
const Container = styled(Form.Item)`
  .ant {
    &-form-item-extra {
      margin-top: 0.25rem;
      color: var(--color-grey-second);
    }

    &-input {
      border: 0.0625rem solid var(--color-grey-second);
      color: var(--color-main-body);

      :focus {
        border-color: var(--color-grey-second);
        box-shadow: none;
      }
    }

    &-checkbox {
      :hover .ant-checkbox-inner {
        border-color: var(--color-grey);
      }

      &-group {
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem;
      }

      &-wrapper {
        margin-left: 0;
      }

      &-checked {
        .ant-checkbox-inner {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
        }

        ::after {
          border-color: var(--color-primary);
        }
      }
    }

    &-form-item-label {
      padding-bottom: 0.5rem;
    }

    &-form-item-label > label,
    &-checkbox-wrapper {
      font-size: var(--font-size-body-m);
      line-height: var(--line-height-body-m);
      color: var(--color-main-body);
    }

    &-form-item-label > label {
      height: auto;
    }

    &-checkbox + span {
      padding-left: 1rem;
    }
  }
`;

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
            transform: value => value || undefined,
            message: "Выберите один из вариантов",
            required
          }
        ];
      default:
        return [{ required }];
    }
  };

  return (
    <Container
      {...{ label, required }}
      hasFeedback={(type === "text" || type === "email") && true}
      name={name ? name : label}
      extra={!required && "Необязательное поле"}
      rules={handledRules()}
    >
      {handleType()}
    </Container>
  );
};

export default FormItem;
