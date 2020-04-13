import React from "react";
import styled from "styled-components";
import FormBuilder from "antd-form-builder";
import { Button, Form } from "antd";
import Card from "../components/card";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 44rem;
  width: 100%;
  height: 100%;

  .ant-input {
    color: #000;
  }
`;
const ScrollContainer = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

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

const Questions = () => {
  const [form] = FormBuilder.useForm();
  const onFinish = data => console.log(data);
  const onValuesChange = form.handleValuesChange;

  return (
    <Container>
      <InnerContainer>
        <ScrollContainer>
          <Card>
            <Form {...{ form, onValuesChange, onFinish }}>
              <FormBuilder {...{ form, meta }} />
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </ScrollContainer>
      </InnerContainer>
    </Container>
  );
};

export default Questions;
