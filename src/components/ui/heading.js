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
    margin-bottom: 3rem;
  }

  h2& {
    font-size: var(--font-size-heading-l);
    margin-bottom: var(--space-x-large);
  }

  h3& {
    font-size: var(--font-size-heading-m);
    margin-bottom: var(--space-large);
  }

  h4& {
    font-size: var(--font-size-heading-s);
  }

  h5& {
    font-size: var(--font-size-heading-xs);
  }
`;

export default Heading;
