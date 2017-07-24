const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./entry.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true }},
          { loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.resolve(__dirname, 'stylesheets')]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  },
  devtool: 'source-map',
};
