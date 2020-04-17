import React from "react";
import { Button, Form } from "antd";
import styled from "styled-components";

import Card from "../card";
import FormGroup from "./form-group";

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
      {fields.map((field, i) => (
        <FormGroup key={i} {...field} />
      ))}
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
