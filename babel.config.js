module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // <-- permite JSX sem importar React
      },
    ],
    "@babel/preset-env",
  ],
};
