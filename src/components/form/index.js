import React, { useState } from "react";
import { Checkbox, Form as AntForm } from "antd";
import styled from "styled-components";

import Card from "./card";
import FormGroup from "./form-group";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Link from "../ui/link";

const Container = styled.div`
  ${Text} + .ant-checkbox-wrapper {
    display: flex;
    margin: 2rem 0;

    .ant-checkbox {
      align-self: start;
      margin-top: 0.25rem;
      margin-right: 0.5rem;
    }
  }
`;

const validateMessages = {
  required: "Обязательное поле"
};

const SurveyForm = ({ fields, onFinish }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Container>
      <AntForm
        {...{ onFinish, validateMessages }}
        initialValues={{}}
        name="survey"
        layout="vertical"
        hideRequiredMark
        scrollToFirstError
      >
        {fields.map((field, i) => (
          <FormGroup key={i} {...field} />
        ))}
        <Card>
          <Heading as="h4">Спасибо за уделенное время!</Heading>
          <Text>
            Здесь изложена какая нибудь дополнительная информация о том
            насколько важен был этот опрос и как его результаты могут быть
            полезены для разработки проекта. И еще какая нибудь информация.
          </Text>
          <Checkbox onChange={e => setDisabled(!e.target.checked)}>
            Настоящим подтверждаю, что я ознакомлен и согласен с условиями
            политики конфиденциальности. <Link to="/policy">Узнать больше</Link>
          </Checkbox>
          <AntForm.Item>
            <Button type="primary" htmlType="submit" {...{ disabled }}>
              Отправить
            </Button>
          </AntForm.Item>
        </Card>
      </AntForm>
    </Container>
  );
};

export default SurveyForm;
