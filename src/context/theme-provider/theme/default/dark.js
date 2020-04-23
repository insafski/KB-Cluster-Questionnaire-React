import global from "../global-variables";
import light from "./light";

const {
  color: { black, white }
} = global;

export default {
  ...light,
  color: {
    ...light.color,
    cardBg: black,
    mainBg: black,
    mainBody: white,
    mainHeading: white
  }
};
