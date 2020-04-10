import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Statistic } from "antd";

const Container = styled.div`
  display: flex;
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
