import Link from "../ui/link";
import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    padding: 1rem 0 0;
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
      margin-bottom: 0.75rem;

      :not(:last-child) {
        margin-right: 0;
      }
    }
  }
`;

const LinksList = ({ links, isOpen }) => (
  <Container {...{ isOpen }}>
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
  </Container>
);

export default LinksList;
