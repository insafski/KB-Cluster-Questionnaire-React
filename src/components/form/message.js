import React from "react";
import styled from "styled-components";
import { Result } from "antd";

import Button from "../ui/button";
import Link from "../ui/link";

const Container = styled.div`
  background-color: var(--color-white);

  .ant-result {
    margin-bottom: 2rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      padding: 2rem 1rem;
    }

    &-title {
      color: var(--color-main-heading);
      font-size: var(--font-size-heading-xs);
      font-weight: var(--font-weight-heading);
      line-height: var(--line-height-heading);
    }

    &-extra {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      > * {
        display: block;
        margin: 0;
        padding: 0.5rem;

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoint.mobile}) {
          width: 100%;
        }
      }
    }
  }
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
                <Button type="secondary">Следующий опрос</Button>
              </Link>
            ]
          : [])
      ]}
    />
  </Container>
);

export default Message;
