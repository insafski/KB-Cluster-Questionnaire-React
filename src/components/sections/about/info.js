import React from "react";
import styled from "styled-components";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

import Logos from "../../logos";
import Heading from "../../ui/heading";
import Paragraph from "../../ui/paragraph";
import Button from "../../ui/button";

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

const Info = ({ loading, name, description, logotypes }) => (
  <Container>
    {!loading && name && description ? (
      <>
        <Logos data={logotypes} />
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
