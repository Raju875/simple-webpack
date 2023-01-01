const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist/webpack/"),
    filename: "bundle.js",
  },
};
