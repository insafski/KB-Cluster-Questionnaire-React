import styled from "styled-components";
import { NavLink } from "react-router-dom";

const handleType = (type, primary, secondary, def) => {
  switch (type) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    default:
      return def || "inherit";
  }
};

const Link = styled(NavLink)`
  font: inherit;
  color: ${({ type }) =>
    handleType(type, "var(--color-dark-grey)", "var(--color-black)")};
  font-weight: ${({ type }) =>
    handleType(
      type,
      "var(--font-weight-semi-bold)",
      "var(--font-weight-heading)"
    )};
  font-size: ${({ type }) =>
    handleType(type, "var(--font-size-body-s)", "var(--font-size-body-m)")};

  :hover {
    color: var(--color-primary);
  }
`;

export default Link;
