import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    const {
      fontSize,
      color,
      space,
      font,
      fontWeight,
      lineHeight,
      shadow
    } = theme;

    return `
      :root {
        /* Font sizes */
        --font-size-body-s: ${fontSize.bodyS};
        --font-size-body-m: ${fontSize.bodyM};
        --font-size-body-l: ${fontSize.bodyL};
        --font-size-body-xl: ${fontSize.bodyXL};
        --font-size-heading-xs: ${fontSize.headingXS};
        --font-size-heading-s: ${fontSize.headingS};
        --font-size-heading-m: ${fontSize.headingM};
        --font-size-heading-l: ${fontSize.headingL};
        --font-size-heading-xl: ${fontSize.headingXL};
  
        /* Colors */
        --color-white: ${color.white};
        --color-black: ${color.black};
        --color-grey: ${color.grey};
        --color-grey-second: ${color.greySecond};
        --color-lighter-grey: ${color.lighterGrey};
        --color-light-grey: ${color.lightGrey};
        --color-dark-grey: ${color.darkGrey};
        --color-darker-grey: ${color.darkerGrey};
        --color-main-body: ${color.mainBody};
        --color-main-heading: ${color.mainHeading};
        --color-main-bg: ${color.mainBg};
        --color-card-bg: ${color.cardBg};
        --color-primary: ${color.primary};
        --color-secondary: ${color.secondary};
  
        /* Space */
        --space-zero: ${space.zero};
        --space-x-small: ${space.xSmall};
        --space-small: ${space.small};
        --space-medium: ${space.medium};
        --space-large: ${space.large};
        --space-x-large: ${space.xLarge};
  
        /* Fonts */
        --font-body: ${font.body};
        --font-heading: ${font.heading};
        --font-monospace: ${font.monospace};
  
        /* Font Weights */
        --font-weight-body: ${fontWeight.body};
        --font-weight-heading: ${fontWeight.heading};
        --font-weight-regular: ${fontWeight.regular};
        --font-weight-semi-bold: ${fontWeight.semiBold};
        --font-weight-bold: ${fontWeight.bold};
        --font-weight-black: ${fontWeight.black};
  
        /* Line Height */
        --line-height-body-s: ${lineHeight.bodyS};
        --line-height-body-m: ${lineHeight.bodyM};
        --line-height-body-l: ${lineHeight.bodyL};
        --line-height-heading: ${lineHeight.heading};
        
        /* Shadow */
        --shadow-small: ${shadow.small};
        --shadow-medium: ${shadow.medium};
        --shadow-large: ${shadow.large};
      }
      
      @media screen and (max-width: ${theme.breakpoint.mobile}) {
        :root {
          /* Font sizes */
          --font-size-body-s: ${fontSize.bodyS};
          --font-size-body-m: ${fontSize.bodyM};
          --font-size-body-l: ${fontSize.bodyM};
          --font-size-heading-xs: ${fontSize.bodyL};
          --font-size-heading-s: ${fontSize.bodyXL};
          --font-size-heading-m: ${fontSize.bodyXL};
          --font-size-heading-l: ${fontSize.headingS};
          --font-size-heading-xl: ${fontSize.headingL};
        }
      }
  
      html body {
        font-family: var(--font-body);
        font-size: var(--font-size-body-m);
  
        background-color: var(--color-main-bg);
        color: var(--color-main-body);
        
        transition-property: background-color, color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }   
      
      p, span {
        color: var(--color-main-text);
      }
  
      img {
        max-width: 100%; 
        height: auto
      }
      
      .ant-skeleton {
        &-content,
        &-element {
          .ant-skeleton {
            &-title,
            &-button,
            &-paragraph > li {
              background: var(--color-grey);
            }
          }
        }
      }
      
      ::selection {
        background-color: var(--color-primary);
      }
    `;
  }}
`;

export default GlobalStyle;
