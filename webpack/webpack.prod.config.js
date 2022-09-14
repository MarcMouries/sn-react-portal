const webpack = require("webpack");
const baseCfg = require("./webpack.base");
const ESLintPlugin = require('eslint-webpack-plugin');

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const cfg = {
  entry: baseCfg.entry,
  output: baseCfg.output,
  resolve: baseCfg.resolve,
  stats: 'errors-only',
  mode: "production",

  optimization: {
    ...baseCfg.optimization,
    minimize: true
  },

  module: {
    strictExportPresence: true,
    rules: [
      baseCfg.rules.css,
      baseCfg.rules.svg,
      baseCfg.rules.assets,
      baseCfg.rules.img,
      baseCfg.rules.jsx()
    ]
  },

  plugins: [
    new ESLintPlugin({
      useEslintrc: true,
      emitWarning: true
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    baseCfg.plugins.createIndexHtml()
  ]
};

module.exports = cfg;
