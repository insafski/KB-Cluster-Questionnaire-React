import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { TERRITORIES_QUERY } from "../queries";

const Container = styled.div`
  padding: 3rem 4rem 5rem;
  max-width: 40rem;
  height: 100%;
`;
const Date = styled.span`
  margin-bottom: 3rem;
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.2;
  color: #bbbbbb;
`;
const Title = styled.div`
  margin-bottom: 4rem;

  p {
    font-size: 1.375rem;
    line-height: 1.12;
  }
`;

const item = {
  date: "от 15 дек. 2020 г.",
  title: "Жители, как соавторы перемен в Арзамасе",
  description: "Опрос команды “Стрелки КБ” о развитии города до 2025 г. ",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const Description = () => {
  const slug = process.env.REACT_APP_CITY_NAME;
  const { data, loading, error } = useQuery(TERRITORIES_QUERY, {
    variables: { slug }
  });

  const {
    Name,
    Description,
    PresentationVideoLink,
    LeadMap,
    LeadMapMeta,
    Questions,
    FooterText,
    Logotypes
  } = data;

  if (error) {
    return <p>{`Ошибка: ${error.message}`}</p>;
  }

  return (
    <Spin spinning={loading} indicator={<LoadingOutlined spin />}>
      <Container>
        <Date>{date}</Date>
        <Title>
          <h1>{title}</h1>
          <p>{description}</p>
        </Title>
        <p>{content}</p>
      </Container>
    </Spin>
  );
};

export default Description;
