const path = require('path');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: __dirname + '/src/js'
  },
  entry: [
    './src/js/app'
  ],
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src/js'),
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  }
};
