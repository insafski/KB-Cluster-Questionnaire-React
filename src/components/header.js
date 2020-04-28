import React, { useState } from "react";
import styled from "styled-components";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import InnerContainer from "./inner-container";
import Link from "./ui/link";
import { Skeleton } from "antd";
import Button from "./ui/button";

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      flex-direction: column;
      align-items: start;
      padding-top: 1rem;
      padding-bottom: 0;
    }
  }

  .ant-skeleton {
    max-width: 10rem;
  }

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
      padding: 0 0 1rem;
    }

    li {
      font-size: 1rem;
      line-height: 1;

      a:not(:hover) {
        color: var(--color-main-body);
      }

      :not(:last-child) {
        margin-right: 4rem;
      }

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-bottom: 0.75rem;
      }
    }
  }
`;
const TitleContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }

  && button {
    display: none;
    padding: 0.25rem;
    color: var(--color-font-main-body);

    :active,
    :hover,
    :focus {
      color: var(--color-secondary);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    && button {
      display: block;
    }
  }
`;

const links = [
  { title: "О платформе", to: "/#about" },
  { title: "Территории благоустройства", to: "/#territories" },
  { title: "Принять участие", to: "/#participate" }
];

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
        <ul>
          {links.map((link, i) => {
            const { title, to } = link;

            return (
              <li key={i}>
                <Link
                  {...{ to }}
                  type="primary"
                  isActive={(match, location) =>
                    match && location?.pathname + location?.hash === to
                  }
                  activeStyle={{
                    color: "var(--color-primary)"
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </InnerContainer>
    </Container>
  );
};

export default Header;
