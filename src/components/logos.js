import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  .ant-skeleton {
    margin-right: 1rem;
    width: auto;
  }
`;

const Logos = () => (
  <Container>
    <Skeleton.Button />
    <Skeleton.Button />
  </Container>
);

export default Logos;
