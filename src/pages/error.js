import React from "react";
import styled from "styled-components";
import { Result } from "antd";

import Button from "../components/ui/button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Error = ({ message }) => (
  <Container>
    <Result
      status="error"
      title="Ошибка!"
      subTitle={message}
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => window.location.reload()}
        >
          Перезагрузить
        </Button>
      ]}
    />
  </Container>
);

export default Error;
