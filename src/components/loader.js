import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Container = styled.div`
  height: 100%;

  .ant-spin {
    color: var(--color-primary);

    &-dot {
      font-size: var(--font-size-heading-l);
    }

    &-container {
      height: 100%;
    }

    &-nested-loading {
      height: 100%;

      > div > .ant-spin {
        max-height: 100%;
      }
    }
  }
`;

const Loader = props => (
  <Container>
    <Spin indicator={<LoadingOutlined spin />} {...props} />
  </Container>
);

export default Loader;
