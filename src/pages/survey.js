import React from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";

import { ADD_RESPONSE_MUTATION, FORM_QUERY } from "../queries";
import Loader from "../components/loader";
import Header from "../components/header";
import SurveyForm from "../components/survey-form";

const Container = styled.div`
  width: 100%;
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 2rem 8rem;
  max-width: 44rem;
  width: 100%;
  height: 100%;

  h2 {
    font-size: 3rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const Survey = ({ title, match }) => {
  const { territory } = match?.params ?? {};
  const { data, loading, error } = useQuery(FORM_QUERY, {
    variables: { slug: territory }
  });
  const [addResponse] = useMutation(ADD_RESPONSE_MUTATION);

  if (error) {
    return <p>{`Ошибка: ${error.message}`}</p>;
  }

  const { id, Name, Description, city } = data?.territories?.[0] ?? {};
  const onFinish = data => {
    const { name, surname, email, comment, ...answers } = data;

    const response = {
      city: city?.id,
      territory: id,
      name,
      surname,
      email,
      ...(comment ? comment : {}),
      answers: JSON.stringify(answers)
    };

    return addResponse({ variables: { data: response } });
  };

  return (
    <Loader spinning={loading}>
      <Container>
        <Header {...{ title }} />
        <InnerContainer>
          <h2>{Name || "Нет названия"}</h2>
          <ReactMarkdown>{Description || "Нет описания"}</ReactMarkdown>
          <SurveyForm
            fields={data?.territories?.[0]?.Questions || []}
            {...{ onFinish }}
          />
        </InnerContainer>
      </Container>
    </Loader>
  );
};

export default Survey;
