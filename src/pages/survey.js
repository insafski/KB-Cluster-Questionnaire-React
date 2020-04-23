import React from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Skeleton } from "antd";

import { ADD_RESPONSE_MUTATION, FORM_QUERY } from "../queries";
import { useQueryString } from "../utils";
import Loader from "../components/loader";
import Form from "../components/form";
import Heading from "../components/ui/heading";
import Paragraph from "../components/ui/paragraph";
import Error from "./error";
import Footer from "../components/footer";
import Message from "../components/form/message";

const Container = styled.div`
  width: 100%;
`;
const TitleContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 2rem;
  max-width: 40rem;
  width: 100%;
  height: 100%;
`;
const FormContainer = styled.div`
  margin: 0 5rem 10rem;
  padding: 4.5rem;
  background-color: var(--color-secondary);
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 40rem;
`;

const Survey = ({ history }) => {
  const query = useQueryString();
  const slug = query.get("t");
  const formSuccess = query.get("success");
  const formError = query.get("error");

  const { data, loading, error } = useQuery(FORM_QUERY, {
    variables: { slug }
  });
  const [addResponse] = useMutation(ADD_RESPONSE_MUTATION, {
    onCompleted: () => history.push(`/form?t=${slug}&success=true`),
    onError: () => history.push("&error=true")
  });

  const { id, Name, Description, Questions, city } =
    data?.territories?.[0] ?? {};
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

  const nextSlug = data?.territories?.[0]?.city?.territories?.[0]?.slug;

  const handleForm = () => {
    switch (true) {
      case Questions && !formSuccess && !formError:
        return <Form fields={Questions} {...{ onFinish }} />;
      case formSuccess === "true":
        return (
          <Message
            status="success"
            title="Спасибо, что прошли опрос"
            link={`/form?t=${nextSlug}`}
          />
        );
      case formError === "true":
        return <Message status="error" title="Ошибка" />;
      default:
        return <Skeleton active paragraph={{ rows: 12 }} />;
    }
  };

  return (
    <Loader spinning={loading}>
      <Container>
        <TitleContainer>
          {Name && Description ? (
            <>
              <Heading as="h2">{Name}</Heading>
              <Paragraph>{Description}</Paragraph>
            </>
          ) : (
            <Skeleton active />
          )}
        </TitleContainer>
        <FormContainer>
          <InnerContainer>
            {handleForm()}
            {error && <Error message={error?.message} />}
          </InnerContainer>
        </FormContainer>
        <Footer />
      </Container>
    </Loader>
  );
};

export default Survey;
