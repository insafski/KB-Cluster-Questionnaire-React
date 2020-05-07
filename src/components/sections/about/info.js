import React from "react";
import styled from "styled-components";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

import Heading from "../../ui/heading";
import Paragraph from "../../ui/paragraph";
import Button from "../../ui/button";
import { API_HOST } from "../../../config";

const Container = styled.div`
  p,
  .ant-skeleton-content {
    margin-bottom: 4rem;
  }

  .ant-skeleton:not(.ant-skeleton-element) {
    + .ant-skeleton-element {
      .ant-skeleton-button {
        height: 4rem;
        width: 8rem;
        border-radius: 2rem;
      }
    }
  }

  a {
    width: 100%;
  }
`;
const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 3rem);
  grid-gap: 3rem;
  margin-bottom: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(auto-fill, 3rem);
    grid-gap: 1.5rem;
    margin-bottom: 2rem;
  }

  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Info = ({ loading, name, description, logotypes }) => (
  <Container>
    {!loading && name && description ? (
      <>
        <LogosContainer>
          {logotypes
            .map(logo => logo.images)
            .flat()
            .map((image, i) => (
              <img key={i} src={API_HOST + image.url} alt="" />
            ))}
        </LogosContainer>
        <Heading as="h1">{name}</Heading>
        <Paragraph type="primary-bold">{description}</Paragraph>
        <Link to="#participate">
          <Button type="primary">Перейти к опросу</Button>
        </Link>
      </>
    ) : (
      <>
        <Skeleton />
        <Skeleton.Button />
      </>
    )}
  </Container>
);

export default Info;
