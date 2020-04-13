import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Statistic } from "antd";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12.5rem;

  .ant-statistic {
    :last-child {
      margin-top: 4rem;
    }

    &-content-value {
      font-weight: 500;
      font-size: 3.5rem;
      line-height: 1.2;
    }
  }
`;

const renderers = {
  root: props => <div {...props} />,
  paragraph: props => <span {...props} />,
  strong: ({ children }) => <Statistic value={children?.[0]?.props?.children} />
};

const Tab = ({ data }) => {
  const { Description, LeadMapMeta } = data;

  return (
    <Container>
      <ReactMarkdown source={Description} />
      <ReactMarkdown source={LeadMapMeta} {...{ renderers }} />
    </Container>
  );
};

export default Tab;
