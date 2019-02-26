module.exports = api => {
  api.cache(true);

  // adapt this to your setup
  const presets = [
    "next/babel",
    "@zeit/next-typescript/babel" // if you use TypeScript
  ];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "^react-native$": "react-native-web",
          core: "@custom/core"
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
