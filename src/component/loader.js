import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = styled(Spin)`
  .ant-spin {
    &-dot {
      font-size: 2rem;
    }

    &-container {
      height: 100%;
    }

    &-nested-loading {
      width: 100%;

      > div > .ant-spin {
        max-height: 100%;
      }
    }
  }
`;

const Loader = props => (
  <Spinner indicator={<LoadingOutlined spin />} {...props} />
);

export default Loader;
