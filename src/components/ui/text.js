import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const handleColor = type =>
  type === "secondary" ? "var(--color-black)" : "var(--color-secondary)";

const handleWeight = type => {
  switch (type) {
    case "primary":
      return "var(--font-weight-body)";
    case "option":
      return "var(--font-weight-semi-bold)";
    case "comment":
      return "var(--font-weight-bold)";
    default:
      return "var(--font-weight-regular)";
  }
};

const handleSize = type => {
  switch (type) {
    case "secondary":
      return "var(--font-size-body-m)";
    case "comment":
      return "var(--font-size-body-s)";
    default:
      return "var(--font-size-body-l)";
  }
};

const handleLineHeight = type => {
  switch (type) {
    case "secondary":
      return "var(--line-height-body-l)";
    case "comment":
      return "var(--line-height-body-s)";
    default:
      return "var(--line-height-body-m)";
  }
};

const Text = styled(({ source, children, type, ...props }) =>
  source ? (
    <ReactMarkdown {...{ source, ...props }} />
  ) : (
    <p {...{ children, ...props }} />
  )
)`
  color: ${({ type }) => handleColor(type)};
  font-weight: ${({ type }) => handleWeight(type)};
  font-size: ${({ type }) => handleSize(type)};
  line-height: ${({ type }) => handleLineHeight(type)};
`;

export default Text;
