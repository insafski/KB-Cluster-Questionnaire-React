import React from "react";
import styled from "styled-components";
import { API_HOST } from "../config";

const Container = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Logos = ({ data }) => (
  <Container>
    {data?.map((item, i) => {
      const { url } = item ?? {};

      return (
        <li key={i}>
          <Logo src={API_HOST + url} alt="" />
        </li>
      );
    })}
  </Container>
);

export default Logos;
