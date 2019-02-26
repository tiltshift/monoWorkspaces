const withTM = require("next-transpile-modules");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript(
  withTM({
    transpileModules: ["@custom"],
    webpack: config => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web"
      };

      return config;
    }
  })
);
