const darkThemeVars = require("antd/dist/dark-theme");
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true; @import "${require.resolve(
        "antd/lib/style/color/colorPalette.less"
      )}";`,
      ...darkThemeVars,
      "@font-family": '"Inter", sans-serif',
      "@primary-color": "#fff"
      // "@popover-background": "#2a323a",
      // "@border-color-split": "#656e76"
    }
  })
);
