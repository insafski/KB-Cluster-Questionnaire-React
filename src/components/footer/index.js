import React from "react";
import styled from "styled-components";
import { Skeleton } from "antd";

import InnerContainer from "../inner-container";
import Logos from "../logos";

const Container = styled.footer`
  padding-top: 3.5rem;
  padding-bottom: 9rem;
  background-color: #3d3d3d;
  scroll-snap-align: start;

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 12.5rem;
    align-items: flex-start;
  }

  .ant {
    &-input {
      color: #272727;
      border: 0.125rem solid #979797;
      border-radius: 0;
      box-sizing: border-box;

      ::placeholder {
        color: #969696;
      }

      &-affix-wrapper {
        max-width: 24rem;
        background-color: #f2f2f2;
      }
    }

    &-btn {
      padding: 0;
      color: #000;
    }
  }
`;

const Footer = () => (
  <Container>
    <InnerContainer>
      <nav>
        <Logos />
        <Skeleton />
      </nav>
    </InnerContainer>
  </Container>
);

export default Footer;
