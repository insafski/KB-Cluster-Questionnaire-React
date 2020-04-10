import React from "react";
import styled from "styled-components";

import InnerContainer from "./inner-container";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  scroll-snap-align: start;
  background-color: ${({ bgColor }) => bgColor};

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

const Section = ({ children, bgColor, ...props }) => (
  <Container {...{ bgColor }} {...props}>
    <InnerContainer>{children}</InnerContainer>
  </Container>
);

export default Section;
