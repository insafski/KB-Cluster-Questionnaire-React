import global from "../global-variables";

const { color, font } = global;
const { greySecond, darkGrey, lighterGrey, white, black } = color;
const { inter, monospace } = font;

export default {
  breakpoint: { mobile: "480px", tablet: "768px", desktop: "960px" },
  fontSize: {
    bodyS: "0.875rem",
    bodyM: "1rem",
    bodyL: "1.25rem",
    bodyXL: "1.5rem",
    headingXS: "1.75rem",
    headingS: "2rem",
    headingM: "2.25rem",
    headingL: "3rem",
    headingXL: "5.75rem"
  },
  color: {
    ...color,
    primary: greySecond,
    secondary: darkGrey,
    cardBg: lighterGrey,
    mainBg: white,
    mainText: black,
    mainHeading: black
  },
  space: {
    zero: 0,
    xSmall: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
    xLarge: "4rem"
  },
  font: {
    body: inter,
    heading: inter,
    monospace: monospace
  },
  fontWeight: {
    regular: 400,
    body: 500,
    heading: 700,
    semiBold: 600,
    bold: 700,
    black: 900
  },
  lineHeight: {
    bodyS: 1.2,
    bodyM: 1.3,
    bodyL: 1.5,
    heading: 1
  },
  shadow: {
    small: "0 0 0.25rem rgba(0, 0, 0, .12)",
    large: "0 0 0.5rem rgba(0, 0, 0, .12)"
  },
  button: {
    primary: {
      color: white,
      bg: greySecond
    },
    icon: {
      size: "1rem"
    }
  }
};
