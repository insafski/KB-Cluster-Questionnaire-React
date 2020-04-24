import React from "react";
import styled from "styled-components";

import InnerContainer from "./inner-container";
import Link from "./ui/link";
import { Skeleton } from "antd";

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
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

  .ant-skeleton {
    max-width: 10rem;
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
  { title: "О платформе", to: "/#about" },
  { title: "Территории благоустройства", to: "/#territories" },
  { title: "Принять участие", to: "/#participate" }
];

const Header = ({ title }) => (
  <Container>
    <InnerContainer as="nav">
      {title ? (
        <Link to="/" type="secondary">
          {title}
        </Link>
      ) : (
        <Skeleton paragraph={false} />
      )}
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

export default Header;
