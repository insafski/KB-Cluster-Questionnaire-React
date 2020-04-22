import global from "../global-variables";

export default {
  breakpoint: { mobile: "360px", tablet: "960px", desktop: "1440px" },
  fontSize: {
    bodyS: "0.875rem",
    bodyM: "1rem",
    bodyL: "1.25rem",
    headingS: "1.75rem",
    headingM: "2.25rem",
    headingL: "3rem",
    headingXL: "5.75rem"
  },
  color: {
    ...global.color,
    primary: global.color.darkGrey,
    secondary: global.color.darkGrey,
    mainBg: global.color.white,
    mainText: global.color.black
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
    body: global.font.inter,
    heading: global.font.inter,
    monospace: global.font.monospace
  },
  fontWeight: {
    regular: 400,
    body: 500,
    heading: 700,
    semiBold: 600,
    bold: 700
  },
  lineHeight: {
    bodyS: 1.2,
    bodyM: 1.3,
    bodyL: 1.5,
    heading: 1
  },
  shadow: {
    small: `0 0 0.125rem rgba(0, 0, 0, .12)`,
    large: `0 0 0.25rem} rgba(0, 0, 0, .12)`
  },
  variant: {},
  text: {},
  button: {
    primary: {
      color: global.color.white,
      bg: global.color.primary
    },
    icon: {
      size: "1rem"
    }
  }
};
