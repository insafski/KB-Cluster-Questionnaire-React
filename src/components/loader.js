import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = styled(Spin)`
  color: var(--color-primary);

  .ant-spin {
    &-dot {
      font-size: var(--font-size-heading-l);
    }

    &-container {
      height: 100%;
    }
  }

  .ant-spin-nested-loading > div > & {
    max-height: 100%;
  }
`;

const Loader = props => (
  <Spinner indicator={<LoadingOutlined spin />} {...props} />
);

export default Loader;
