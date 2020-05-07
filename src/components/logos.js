import React from "react";
import styled from "styled-components";

import { API_HOST } from "../config";
import Text from "./ui/text";

const Container = styled.ul`
  display: grid;
  grid-auto-columns: minmax(min-content, max-content);
  grid-auto-flow: column;
  grid-gap: 1rem;
  padding: 0;
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-auto-flow: row;
    justify-content: center;
  }
`;
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.75rem 2.25rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 1rem;
    background-color: transparent;
  }

  ul {
    display: grid;
    grid-auto-columns: 4rem;
    grid-auto-flow: column;
    grid-gap: 1.5rem;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  ${Text} {
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
    white-space: nowrap;
  }
`;

const Logos = ({ data }) => (
  <Container>
    {data?.map((item, i) => {
      const { name, images } = item ?? {};

      return (
        <li key={i}>
          <LogoWrapper>
            {name && <Text type="option">{name}</Text>}
            <ul>
              {images?.map((image, i) => {
                const { url } = image ?? {};

                return (
                  <li key={i}>
                    <Logo src={API_HOST + url} alt="" />
                  </li>
                );
              })}
            </ul>
          </LogoWrapper>
        </li>
      );
    })}
  </Container>
);

export default Logos;
