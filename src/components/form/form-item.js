import React from "react";
import { Form, Input, Upload } from "antd";
import styled from "styled-components";

import ControlGroup from "./control-group";

const { TextArea } = Input;
const Container = styled(Form.Item)`
  .ant {
    &-form-item-extra {
      color: var(--color-dark-grey);
    }

    &-input {
      color: #000;

      :hover,
      :focus {
        border-right-width: 0.125rem !important;
      }

      :focus {
        border-color: var(--color-dark-grey);
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
      padding-bottom: 1rem;
    }

    &-form-item-label > label,
    &-checkbox-wrapper {
      font-size: var(--font-size-body-l);
      line-height: var(--line-height-body-m);
      color: var(--color-secondary);
    }

    &-form-item-label > label {
      height: auto;
    }

    &-checkbox + span {
      padding-left: 1rem;
    }

    &-input {
      height: 3.5rem;
      border: 0.125rem solid var(--color-grey-second);
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
      extra={!required && "Опционально"}
      rules={handledRules()}
    >
      {handleType()}
    </Container>
  );
};

export default FormItem;
