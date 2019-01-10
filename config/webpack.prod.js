/**
 * Created by san on 2019年1月7日, 0007.
 */
const webpack = require('webpack')
const CleanCSSPlugin = require("less-plugin-clean-css")
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common, {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: './js/[name].[hash:10].js'
  },


  module: {
    rules: [
//    编译less
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          use: ["css-loader","postcss-loader",{
            loader: "less-loader", options: {
            plugins: [
              new CleanCSSPlugin({ advanced: true })
            ]
          }}]
        })
        ,

      },
      //html 清理

    ],

  },

  plugins: [
    //html auto generate
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: 'index.html',
      template: 'index.html',
      minify:{
        removeComments:true,
        collapseWhitespace:true
      }
    }),
    //clear
    new CleanWebpackPlugin('./dist',{
      root: resolve(__dirname,'../')
    }),
    //提取合并css
    new ExtractTextPlugin('./css/[name].[hash:10].css'),
    //压缩css
    new webpack.optimize.UglifyJsPlugin({sourceMap:true}),
    //clean useless file
    new CleanWebpackPlugin('./build',{
      root: resolve(__dirname,'../')
    }),


  ],

  devtool: 'source-map'

})