import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useQueryString = () => new URLSearchParams(useLocation().search);

const handleColor = type =>
  type === "secondary" ? "var(--color-main-heading)" : "var(--color-main-body)";
const handleWeight = type => {
  switch (type) {
    case "primary":
      return "var(--font-weight-body)";
    case "primary-bold":
      return "var(--font-weight-bold)";
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
    case "primary-bold":
      return "var(--font-size-body-xl)";
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
const handleMinWidth = width => `${parseInt(width) + 1}px`;
const useMediaQuery = query => {
  const [doesMatch, onSetDoesMatch] = useState(false);

  useEffect(() => {
    const onUpdateMatch = ({ matches }) => {
      onSetDoesMatch(matches);
    };

    const matcher = window.matchMedia(query);

    const isModern = "addEventListener" in matcher;
    if (isModern) {
      matcher.addEventListener("change", onUpdateMatch);
    } else {
      matcher.addListener(onUpdateMatch);
    }

    onUpdateMatch(matcher);

    return () => {
      if (isModern) {
        matcher.removeEventListener("change", onUpdateMatch);
      } else {
        matcher.removeListener(onUpdateMatch);
      }
    };
  }, [query, onSetDoesMatch]);

  return doesMatch;
};

export {
  useQueryString,
  handleColor,
  handleWeight,
  handleSize,
  handleLineHeight,
  handleMinWidth,
  useMediaQuery
};
