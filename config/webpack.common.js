module.exports = {

  resolve: {
    alias: {
      vendor: path.resolve(process.cwd(), 'vendor/'),
    }
  },

  entry: {
    app: [
      path.resolve(process.cwd(), 'src/index.js')
    ],

    vendor: [
      path.resolve(process.cwd(), 'vendor/vendor-one.js')
    ]
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.hbs'),
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"], // vendor libs + extracted manifest
      minChunks: Infinity,
    }),

    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: true
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};
