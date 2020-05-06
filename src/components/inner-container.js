import styled from "styled-components";

const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 79rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0 1.25rem;
  }
`;

export default InnerContainer;
