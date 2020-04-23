import React from "react";
import styled from "styled-components";
import { Result } from "antd";

import Button from "../ui/button";
import Link from "../ui/link";

const Container = styled.div`
  background-color: var(--color-white);
`;

const Message = ({ status, title, link }) => (
  <Container>
    <Result
      {...{ status, title }}
      extra={[
        <Link key="home" to="/">
          <Button type="primary">На главную</Button>
        </Link>,
        ...(link
          ? [
              <Link key="survey" to={link}>
                <Button>Следующий опрос</Button>
              </Link>
            ]
          : [])
      ]}
    />
  </Container>
);

export default Message;
