import { useLocation } from "react-router-dom";

const cityName = process.env.REACT_APP_CITY_NAME;
const endpoint = process.env.REACT_APP_STRAPI_ENDPOINT;
const baseUrl = endpoint.replace("/graphql", "");
const theme = process.env.REACT_APP_THEME;

const useQueryString = () => new URLSearchParams(useLocation().search);

const handleColor = type =>
  type === "secondary" ? "var(--color-black)" : "var(--color-secondary)";
const handleWeight = type => {
  switch (type) {
    case "primary":
      return "var(--font-weight-body)";
    case "option":
      return "var(--font-weight-semi-bold)";
    case "comment":
      return "var(--font-weight-bold)";
    default:
      return "var(--font-weight-regular)";
  }
};
const handleSize = type => {
  switch (type) {
    case "secondary":
      return "var(--font-size-body-m)";
    case "comment":
      return "var(--font-size-body-s)";
    default:
      return "var(--font-size-body-l)";
  }
};
const handleLineHeight = type => {
  switch (type) {
    case "secondary":
      return "var(--line-height-body-l)";
    case "comment":
      return "var(--line-height-body-s)";
    default:
      return "var(--line-height-body-m)";
  }
};

export {
  cityName,
  endpoint,
  baseUrl,
  theme,
  useQueryString,
  handleColor,
  handleWeight,
  handleSize,
  handleLineHeight
};
