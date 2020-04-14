import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import Section from "./section";

const Container = styled(Section)`
  flex-direction: column;
  padding-top: 8rem;
  background-image: linear-gradient(
      90deg,
      rgba(245, 245, 247, 0.75) 0%,
      rgba(245, 245, 247, 0.75) 100%
    ),
    url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #f5f5f7;
  filter: grayscale(100%);

  h2 {
    max-width: 60%;
    margin-bottom: 3rem;
    color: #000;
  }

  p {
    margin-bottom: 3rem;
    max-width: 60%;
    color: #000;
  }
`;

const MapSection = ({ data }) => {
  const { Name, Description, LeadMap } = data ?? {};
  const baseUrl = process.env.REACT_APP_STRAPI_ENDPOINT.replace("/graphql", "");
  const url = LeadMap?.url ? baseUrl + LeadMap.url : "";

  return (
    <Container id="map" bgImage={url}>
      <h2>{Name || "Нет названи"}</h2>
      <ReactMarkdown>{Description || "Нет описания"}</ReactMarkdown>
    </Container>
  );
};

export default MapSection;
