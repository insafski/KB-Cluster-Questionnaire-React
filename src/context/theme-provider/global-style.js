import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    :root {
      /* Font sizes */
      --font-size-body-s: ${theme.fontSize.bodyS};
      --font-size-body-m: ${theme.fontSize.bodyM};
      --font-size-body-l: ${theme.fontSize.bodyL};
      --font-size-heading-s: ${theme.fontSize.headingS};
      --font-size-heading-m: ${theme.fontSize.medium};
      --font-size-heading-l: ${theme.fontSize.headingL};
      --font-size-heading-xl: ${theme.fontSize.headingXL};

      /* Colors */
      --color-white: ${theme.color.white};
      --color-black: ${theme.color.black};
      --color-grey: ${theme.color.grey};
      --color-main-text: ${theme.color.mainText};
      --color-main-bg: ${theme.color.mainBg};
      --color-primary: ${theme.color.primary};

      /* Space */
      --space-zero: ${theme.space.zero};
      --space-x-small: ${theme.space.xSmall};
      --space-small: ${theme.space.small};
      --space-medium: ${theme.space.medium};
      --space-large: ${theme.space.large};
      --space-x-large: ${theme.space.xLarge};

      /* Fonts */
      --font-body: ${theme.font.body};
      --font-heading: ${theme.font.heading};
      --font-monospace: ${theme.font.monospace};

      /* Font Weights */
      --font-weight-body: ${theme.fontWeight.body};
      --font-weight-heading: ${theme.fontWeight.heading};
      --font-weight-bold: ${theme.fontWeight.bold};

      /* Line Height */
      --line-height-body: ${theme.lineHeight.body};
      --line-height-heading: ${theme.lineHeight.heading};
    }

    html body {
      font-family: var(--font-body);
      font-size: var(--font-size-x-small);

      background-color: var(--color-main-bg);
      color: var(--color-main-text);
      
      transition-property: background-color, color;
      transition-duration: 0.3s;
      transition-timing-function: ease;

      @media (max-width: ${theme.breakpoint.desktop}) {}
      @media (max-width: ${theme.breakpoint.tablet}) {}
      @media (max-width: ${theme.breakpoint.mobile}) {}
    }   
    
    h1, h2, h3, h4, h5, h6, p, span {
      color: var(--color-main-text);
    }
    
    h1, h2, h3, h4 {
      font-weight: var(--font-weight-heading);
    }

    img {
      max-width: 100%; 
      height: auto
    }
  `}
`;

export default GlobalStyle;
