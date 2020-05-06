import React, { useState } from "react";
import styled from "styled-components";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import InnerContainer from "../inner-container";
import Link from "../ui/link";
import { Skeleton } from "antd";
import Button from "../ui/button";
import LinksList from "./links-list";

const links = [
  { title: "О платформе", to: "/#about" },
  { title: "Территории благоустройства", to: "/#territories" },
  { title: "Принять участие", to: "/#participate" }
];

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  color: var(--color-main-body);
  background-color: var(--color-white);
  box-shadow: var(--shadow-large);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
      flex-direction: column;
      align-items: start;
    }
  }

  .ant-skeleton {
    max-width: 5rem;

    &-title {
      margin: 0;
    }
  }
`;
const TitleContainer = styled.div`
  flex: 1;
  width: 100%;

  &,
  button,
  a {
    height: 1.25rem;
  }

  && button {
    display: none;
    padding: 0;
    color: var(--color-font-main-body);
    font-size: 1rem;

    :active,
    :hover,
    :focus {
      color: var(--color-secondary);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    && button {
      display: flex;

      > .anticon {
        line-height: 0.75;
      }
    }
  }
`;

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container {...{ isOpen }}>
      <InnerContainer as="nav">
        <TitleContainer>
          {title ? (
            <Link to="/" type="secondary">
              {title}
            </Link>
          ) : (
            <Skeleton paragraph={false} />
          )}
          <Button type="link" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </Button>
        </TitleContainer>
        <LinksList {...{ links, isOpen }} />
      </InnerContainer>
    </Container>
  );
};

export default Header;
