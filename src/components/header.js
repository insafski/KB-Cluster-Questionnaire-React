import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import InnerContainer from "./inner-container";

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  width: 100%;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12);

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

      a:not(:hover) {
        color: #000;
      }

      :not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
`;

const links = [
  { title: "О проекте", to: "/#city" },
  { title: "Территории", to: "/#territory" },
  { title: "Карта", to: "/#map" },
  { title: "Опрос", to: "/#participate" }
];

const Header = ({ title }) => (
  <Container>
    <InnerContainer as="nav">
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <ul>
        {links.map((link, i) => {
          const { title, to } = link;

          return (
            <li key={i}>
              <Link {...{ to }}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </InnerContainer>
  </Container>
);

export default Header;
