import React from "react";
import styled from "styled-components";
import { Form, Button } from "antd";
import FormBuilder from "antd-form-builder";

const Container = styled.div`
  padding: 1rem;
  max-width: 40rem;

  .ant-input {
    padding: 0.25rem 0;
    height: 4rem;
    font-family: Inter, sans-serif;
    font-size: 1.375rem;
    line-height: 1.12;
    letter-spacing: 0.03em;
    color: rgba(222, 216, 216, 0.8);
    background: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 0.125rem solid #ffffff;
  }
`;
const Title = styled.h1`
  margin-right: 5.5rem;
  margin-bottom: 3.5rem;
`;

const item = {
  title: "Жители, как соавторы перемен в Арзамасе"
};
const meta = {
  fields: [
    {
      key: "name",
      placeholder: "Ваше имя",
      required: true
    },
    {
      key: "email",
      placeholder: "Ваш имейл",
      required: true
    },
    {
      key: "comment",
      placeholder: "Дополнительный комментарий"
    }
  ]
};

const Register = () => {
  const { title } = item;
  const [form] = FormBuilder.useForm();
  const onFinish = data => console.log(data);
  const onValuesChange = form.handleValuesChange;

  return (
    <Container>
      <Title>{title}</Title>
      <Form {...{ form, onValuesChange, onFinish }}>
        <FormBuilder {...{ form, meta }} />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Register;
