import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;
const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ logoColor }) => logoColor};
  mask: url(${({ url }) => url}) no-repeat center;
`;

const Logos = ({ data, logoColor }) => (
  <Container>
    {data?.map((item, i) => {
      const { url } = item ?? {};

      return (
        <li key={i}>
          <Logo {...{ url, logoColor }} />
        </li>
      );
    })}
  </Container>
);

export default Logos;
