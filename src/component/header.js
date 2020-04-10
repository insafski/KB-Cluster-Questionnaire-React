import React from "react";
import styled from "styled-components";

import InnerContainer from "./inner-container";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  color: #000;
  background-color: #fff;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1;
    color: #000;
    margin-bottom: 0;
  }

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;

    li {
      font-size: 1rem;
      line-height: 1;

      :not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
`;

const Header = ({ title }) => {
  return (
    <Container>
      <InnerContainer as="nav">
        <h1>{title}</h1>
        <ul>
          {Array(4)
            .fill("Item")
            .map((item, i) => (
              <li key={i}>{item}</li>
            ))}
        </ul>
      </InnerContainer>
    </Container>
  );
};

export default Header;
