import { useLocation } from "react-router-dom";

const useQueryString = () => new URLSearchParams(useLocation().search);

const handleColor = type =>
  type === "secondary" ? "var(--color-main-heading)" : "var(--color-main-body)";
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
const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
};
const handleMinWidth = width => `${parseInt(width) + 1}px`;

export {
  useQueryString,
  handleColor,
  handleWeight,
  handleSize,
  handleLineHeight,
  hexToRgb,
  handleMinWidth
};
