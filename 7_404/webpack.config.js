const path = require('path');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bb",
    projectName: "404",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      path: path.resolve(__dirname, '../dist'),
    },
    externals: ["@emotion/react", "@emotion/styled"]
  });
};
