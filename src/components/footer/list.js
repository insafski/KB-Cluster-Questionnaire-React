import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 1rem;
    line-height: 1;

    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const List = () => (
  <Container>
    {[...Array(5).keys()].map((_, i) => (
      <li key={i}>Item</li>
    ))}
  </Container>
);

export default List;
