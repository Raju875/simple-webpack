# simple-webpack

This is very basic webpack config repo.

### Getting Started

1.  Install [node](https://nodejs.org/en/download/)
2.  Create your local directory, run `npm init -y` and package.json file will create.
3.  Add `"scripts": {"build": "webpack"}` inside package.json .
4.  Also add `"type": "module.cjs",` in package.json if necessary.
5.  Run `npm i -D webpack` for webpack development version & `npm install -D webpack-cli` for webpack cli.
6.  create `webpack.config.js` and add following configureation:
    ..
    const path = require("path");

        module.exports = {
        mode: "development",
        entry: "./src/scripts/index.js",
        output: {
            path: path.resolve(__dirname, "dist/webpack/"),
            filename: "bundle.js",
        },

    }; ...

7.  Create necessary html, js, css and others files and write some code.
8.  Run `npm run build` and build.js file will create inside dist/webpack directory.
9.  Now open your favourite browser and enjoy the output.
