var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var webpack = require("webpack");

module.exports = function(env) {
  return require(`./webpack.${env}.js`);
}
