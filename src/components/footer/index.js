import React from "react";
import styled from "styled-components";
import { Skeleton } from "antd";

import InnerContainer from "../inner-container";
import Paragraph from "../ui/paragraph";
import Logos from "./logos";

const Container = styled.footer`
  padding-top: 3rem;
  padding-bottom: 6rem;
  background-color: var(--color-lighter-grey);
  scroll-snap-align: start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  nav {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    justify-content: space-between;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.desktopL}) {
      grid-template-columns: 1fr;
    }

    ${Paragraph} {
      @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        justify-self: center;
        text-align: center;
      }

      p {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;
        white-space: nowrap;
      }

      a {
        padding-top: 0.5rem;
        font-size: var(--font-size-heading-xs);
        font-weight: var(--font-weight-heading);
        line-height: var(--line-height-heading);
        color: var(--color-secondary);

        :hover {
          color: var(--color-primary);
        }
      }
    }
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

const Footer = ({ data }) => {
  const { footer, partners } = data ?? {};

  return (
    <Container>
      <InnerContainer>
        <nav>
          <Logos data={partners} />
          {footer ? <Paragraph>{footer}</Paragraph> : <Skeleton />}
        </nav>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
