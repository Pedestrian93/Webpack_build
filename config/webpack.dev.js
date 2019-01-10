/**
 * Created by san on 2019年1月7日, 0007.
 */
const {resolve} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//for dev
const webpack = require('webpack')

const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common, {
  entry: ['./src/js/index.js', './index.html'],
  module: {
    rules: [

//    编译less
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // 创建一个style标签，将js中的css放入其中
        }, {
          loader: "css-loader" // 将css以CommonJs语法打包到js中
        }, {
          loader: "less-loader" // 将less转换成css
        }]
      },

      //html-loader
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ],

  },

  plugins: [
    //dev
    new webpack.HotModuleReplacementPlugin(),

  ],

  devServer: {
    // bonjour: true,
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    hot: true,
    open: true
  }
})
