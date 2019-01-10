/**
 * Created by san on 2019年1月7日, 0007.
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common, {


  module: {
    rules: [
//    编译less
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      //html 清理

    ],

  },

  plugins: [
    //html auto generate
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: 'index.html',
      template: 'index.html'
    }),


    //提取合并css
    new ExtractTextPlugin('./css/index.css'),

    //clean useless file
    new CleanWebpackPlugin('./build',{
      root: resolve(__dirname,'../')
    })
  ]

})