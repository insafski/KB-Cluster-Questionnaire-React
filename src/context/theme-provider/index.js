import React, { useContext } from "react";
import { ThemeProvider as Theme } from "styled-components";

import defaultLight from "./theme/default/light";
import defaultDark from "./theme/default/dark";
import domRF from "./theme/dom-rf";
import GlobalStyle from "./global-style";
import { StateContext } from "../index";
import { theme } from "../../utils";

const ThemeProvider = ({ children }) => {
  const {
    state: { customTheme }
  } = useContext(StateContext);

  const handleTheme = theme => {
    switch (theme) {
      case "dark":
        return defaultDark;
      case "domRF":
        return domRF;
      case "custom":
        return {
          ...defaultLight,
          color: {
            ...defaultLight.font,
            ...(customTheme
              ? {
                  primary: customTheme.primary,
                  mainBg: customTheme.background,
                  mainText: customTheme.color
                }
              : {})
          },
          font: {
            ...defaultLight.font,
            ...(customTheme
              ? {
                  body: customTheme.font,
                  heading: customTheme.font
                }
              : {})
          }
        };
      default:
        return defaultLight;
    }
  };

  return (
    <Theme theme={handleTheme(theme)}>
      <>
        <GlobalStyle />
        {children}
      </>
    </Theme>
  );
};

export default ThemeProvider;
