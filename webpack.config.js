const path = require ('path');

module.exports = {
  context: __dirname,
  entry: './js/App.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join (__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    publicPath: '/public/',
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
