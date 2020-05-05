import global from "../global-variables";
import light from "../default/light";

const {
  color: {
    white,
    brand: { domRFLight, domRFDark, domRFDarker }
  }
} = global;

export default {
  ...light,
  color: {
    ...light.color,
    primary: domRFLight,
    secondary: domRFDark,
    mainBg: white,
    mainBody: domRFDark,
    mainHeading: domRFDarker
  }
};
