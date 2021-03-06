import React from "react";
import ReactMarkdown from "react-markdown";
import { Statistic } from "antd";
import styled from "styled-components";

const Container = styled.div`
  > div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-column-gap: 4rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      grid-template-rows: 1fr;
      grid-auto-flow: row;

      span {
        margin-bottom: 1rem;
      }
    }
  }

  .ant-statistic-content-value {
    margin-bottom: 0.5rem;
    color: var(--color-primary);
    font-family: var(--font-body);
    font-weight: var(--font-weight-black);
    font-size: var(--font-size-heading-s);
    line-height: var(--line-height-body-l);
  }
`;

const Numbers = ({ data }) => {
  const renderers = {
    paragraph: ({ children }) => <div {...{ children }} />,
    text: ({ children }) => <span {...{ children }} />,
    strong: ({ children }) => (
      <Statistic value={children?.[0]?.props?.children} />
    ),
  };

  return (
    <Container>
      <ReactMarkdown source={data || "Нет данных"} {...{ renderers }} />
    </Container>
  );
};

export default Numbers;
