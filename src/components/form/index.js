import React, { useState } from "react";
import { Checkbox, Form as AntdForm } from "antd";
import styled from "styled-components";
import Link from "../ui/link";

import Card from "./card";
import FormGroup from "./form-group";
import SurveyButton from "../survey-button";
import Heading from "../ui/heading";
import Text from "../ui/text";

const Container = styled.div`
  ${Text} + .ant-checkbox-wrapper {
    margin: 2rem 0;
  }
`;

const validateMessages = {
  required: "Обязательное поле"
};

const Form = ({ fields, onFinish }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <AntdForm
        {...{ onFinish, validateMessages }}
        layout="vertical"
        hideRequiredMark
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
          <Checkbox
            {...{ checked }}
            onChange={e => setChecked(e.target.checked)}
          >
            Настоящим подтверждаю, что я ознакомлен и согласен с условиями
            политики конфиденциальности. {<Link to="">Узнать больше</Link>}
          </Checkbox>
          <AntdForm.Item>
            <SurveyButton type="primary" htmlType="submit" disabled={!checked}>
              Отправить
            </SurveyButton>
          </AntdForm.Item>
        </Card>
      </AntdForm>
    </Container>
  );
};

export default Form;
