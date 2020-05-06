import styled from "styled-components";

const Heading = styled.h1`
  h1&,
  h2&,
  h3&,
  h4&,
  h5&,
  h6& {
    color: ${({ fontColor }) => fontColor || "var(--color-main-heading)"};
  }

  h1&,
  h2&,
  h3&,
  h4&,
  h5&,
  h6& {
    font-weight: var(--font-weight-heading);
    line-height: var(--line-height-heading);
  }

  h1& {
    font-size: var(--font-size-heading-xl);
    margin-bottom: 4rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-bottom: 3rem;
    }
  }

  h2& {
    font-size: var(--font-size-heading-l);
    margin-bottom: 4rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-bottom: 3rem;
    }
  }

  h3& {
    font-size: var(--font-size-heading-m);
    margin-bottom: 1.5rem;
  }

  h4& {
    font-size: var(--font-size-heading-xs);
    margin-bottom: 1.25rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-bottom: 1rem;
    }
  }
  }

  h5& {
    font-size: var(--font-size-heading-xs);
  }
`;

export default Heading;
