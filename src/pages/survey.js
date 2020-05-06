import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Skeleton } from "antd";

import { ADD_RESPONSE_MUTATION, FORM_QUERY } from "../queries";
import { useQueryString } from "../utils";
import Form from "../components/form";
import Heading from "../components/ui/heading";
import Paragraph from "../components/ui/paragraph";
import Error from "./error";
import Footer from "../components/footer";
import Message from "../components/form/message";
import Section from "../components/section";
import InnerContainer from "../components/inner-container";

const Container = styled.div`
  width: 100%;

  ${InnerContainer} {
    max-width: 40rem;
  }
`;
const TitleContainer = styled(Section)`
  padding-top: 8rem;
  min-height: auto;
`;
const FormContainer = styled.div`
  margin: 0 5rem 10rem;
  padding: 4.5rem;
  background-color: var(--color-secondary);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 0;
    padding: 2rem 1.25rem;
  }
`;

const Survey = ({ history, location }) => {
  const query = useQueryString();
  const slug = query.get("t");
  const formSuccess = query.get("success");
  const formError = query.get("error");
  const { state } = location;
  const { isSuccess, isError } = state ?? {};

  const { data, loading, error } = useQuery(FORM_QUERY, {
    variables: { slug }
  });
  const [addResponse] = useMutation(ADD_RESPONSE_MUTATION, {
    onCompleted: () =>
      history.push(`/form?t=${slug}&success=true`, { isSuccess: true }),
    onError: () => history.push("&error=true", { isError: true })
  });

  useEffect(() => {
    ((formSuccess && !isSuccess) || (formError && !isError)) &&
      history.push(`/form?t=${slug}`);
  }, [formError, formSuccess, isError, isSuccess, history, slug]);

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
      case Questions && !isSuccess && !isError:
        return <Form fields={Questions} {...{ onFinish }} />;
      case formSuccess === "true" && isSuccess:
        return (
          <Message
            status="success"
            title="Спасибо, что прошли опрос"
            link={`/form?t=${nextSlug}`}
          />
        );
      case formError === "true" && isError:
        return <Message status="error" title="Ошибка" />;
      default:
        return <Skeleton paragraph={{ rows: 12 }} />;
    }
  };

  return (
    <Container>
      <TitleContainer>
        {!loading && Name && Description ? (
          <>
            <Heading as="h2">{Name}</Heading>
            <Paragraph>{Description}</Paragraph>
          </>
        ) : (
          <Skeleton />
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
  );
};

export default Survey;
