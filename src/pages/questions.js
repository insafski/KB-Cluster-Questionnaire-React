import React from "react";
import styled from "styled-components";
import FormBuilder from "antd-form-builder";
import { Button, Form } from "antd";

const Container = styled.div`
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  width: 100%;
`;
const LeftPanel = styled.div`
  grid-area: left;
  background-image: url(${({ image }) => image});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ededed;
`;
const RightPanel = styled.div`
  grid-area: right;
  padding: 2rem 3rem 4rem;
  background-color: #535353;
  color: #ffffff;

  p {
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.2;
    letter-spacing: 0.03em;
    color: #ded8d8;
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 2.625rem;
    line-height: 1.12;
    color: #ffffff;
  }
`;
// const InnerContainer = styled.div`
//   display: flex;
//   height: 100%;
//   background-color: #232323;
// `;
// const ImageContainer = styled.div`
//   width: 100%;
// `;
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
      <LeftPanel />
      <RightPanel>
        <ScrollContainer>
          <Form {...{ form, onValuesChange, onFinish }}>
            <FormBuilder {...{ form, meta }} />
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </ScrollContainer>
      </RightPanel>
    </Container>
  );
};

export default Questions;
