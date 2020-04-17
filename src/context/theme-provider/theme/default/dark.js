import global from "../global-variables";
import light from "./light";

export default {
  ...light,
  color: {
    ...light.color,
    primary: global.color.white,
    mainBg: global.color.black,
    mainText: global.color.white
  }
};
