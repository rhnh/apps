import HtmlWebpackPlugin = require('html-webpack-plugin')
import CopyWebpackPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'images',
          to: 'images',
        },
      ],
    }),
  ],
}

export default config
