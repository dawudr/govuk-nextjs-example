const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const withTranspileModules = require("next-transpile-modules")([
  "govuk-react-jsx",
]);

module.exports = withPlugins([
  [
    withImages,
    {
      inlineImageLimit: false,
      esModule: false,
    },
  ],
  [withTranspileModules],
]);
