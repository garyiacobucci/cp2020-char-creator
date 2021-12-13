const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      /*{
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          }
        },
      },*/
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        type: 'asset/resource'
      }      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true
  },
};