const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    root: __dirname + '/src/',
  },
  entry: [
    'babel-polyfill',
    './src/main',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src/'),
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
    ],
  },
};
