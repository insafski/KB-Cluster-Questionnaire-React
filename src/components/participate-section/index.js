import React from "react";
import styled from "styled-components";

import Section from "../section";
import { Button } from "antd";
import Video from "./video";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3rem;
  }

  p {
    margin-bottom: 3rem;
    max-width: 60%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      font-size: 1rem;
      line-height: 1;

      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  .ant-btn-primary {
    padding-left: 3rem;
    padding-right: 3rem;
    height: 4rem;
    border-radius: 2rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.12;
    color: #494949;

    :active,
    :hover,
    :focus {
      background-color: #dedede;
    }
  }
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12.5rem;
  margin-bottom: 4rem;
`;

const ParticipateSection = ({ data }) => {
  const { Name, Description, PresentationVideoLink } = data ?? {};

  return (
    <Container id="participate">
      <h2>{`Примите участие в разработке проекта: ${Name ||
        "Нет названия"}`}</h2>
      <ReactMarkdown source={Description || "Нет описания"} />
      <VideoContainer>
        <Video link={PresentationVideoLink} />
        <ul>
          {[...Array(3).keys()].map((_, i) => (
            <li key={i}>{Description || "Нет описания"}</li>
          ))}
        </ul>
      </VideoContainer>
      <Link to="/form">
        <Button type="primary">Перейти к опросу</Button>
      </Link>
    </Container>
  );
};

export default ParticipateSection;
