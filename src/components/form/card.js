import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: var(--color-card-bg);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 1.25rem;
  }
`;

export default Card;
