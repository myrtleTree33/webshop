const webpack = require('webpack');
module.exports = {
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {},
      debug: true
    })
  ],
  devtool: 'source-map',
  externals: {
    'react/lib/ExecutionEnvironment': 'true',
    'react/lib/ReactContext': 'true'
  }
};
