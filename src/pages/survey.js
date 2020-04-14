import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { FORM_QUERY } from "../queries";
import Loader from "../components/loader";
import Header from "../components/header";
import SurveyForm from "../components/survey-form";
import ReactMarkdown from "react-markdown";

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

  .ant {
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

const questions = [
  {
    label: "Давайте сначал познакомимься поближе",
    group: [
      {
        label: "Ваше имя",
        type: "text",
        required: true,
        message: ""
      },
      {
        label: "Ваша фамилия",
        type: "text",
        required: true,
        message: ""
      },
      {
        label: "Ваш email",
        type: "text",
        required: true,
        message: ""
      },
      {
        label: "Дополнительный комментарий",
        type: "text",
        required: false,
        message: ""
      }
    ]
  },
  {
    group: [
      {
        label: "Какие проблемы территории вы знаете?",
        description: "Отметьте проблемы, с которыми вы согласны",
        image: "path/to/image",
        type: "checkbox",
        required: true,
        options: [
          "Сложный доступ на территорию",
          "Мусор",
          "Небезопасно находиться",
          "Нечем заняться"
        ],
        defaultOption: 0,
        message: ""
      },
      {
        label: "Какие еще проблемы этой территории вы знаете?",
        image: "path/to/image",
        type: "multiline",
        required: false
      }
      // {
      //   label: "Загрузить фотографию",
      //   description: "Форматы Зng, jpg. Не должно превышать 20 Мбайт",
      //   type: "upload",
      //   required: false
      // }
    ]
  }
];

const Survey = ({ title, match }) => {
  const { territory } = match?.params ?? {};
  const { data, loading, error } = useQuery(FORM_QUERY, {
    variables: { slug: territory }
  });

  if (error) {
    return <p>{`Ошибка: ${error.message}`}</p>;
  }

  const { Name, Description } = data?.territories?.[0] ?? {};
  const onFinish = data => console.log(data);

  return (
    <Loader spinning={loading}>
      <Container>
        <Header {...{ title }} />
        <InnerContainer>
          <h2>{Name || "Нет названия"}</h2>
          <ReactMarkdown>{Description || "Нет описания"}</ReactMarkdown>
          <SurveyForm fields={questions} {...{ onFinish }} />
        </InnerContainer>
      </Container>
    </Loader>
  );
};

export default Survey;
