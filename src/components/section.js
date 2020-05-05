import React from "react";
import styled from "styled-components";

import InnerContainer from "./inner-container";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 6rem 0;
  scroll-snap-align: start;
  background-color: ${({ bgColor }) => bgColor};
`;

const Section = ({ children, bgColor, ...props }) => (
  <Container {...{ bgColor }} {...props}>
    <InnerContainer>{children}</InnerContainer>
  </Container>
);

export default Section;
