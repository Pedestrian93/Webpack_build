/**
 * Created by san on 2019年1月7日, 0007.
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',

  output: {
    path: resolve(__dirname, '../build'),
    filename: './js/index.js'
  },

  module: {
    rules: [


      //图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'img',
              publicPath: '../img',
              name: '[hash:5].[ext]'
            }
          }
        ]
      },



//    编译less


      //ES6 to ES5
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
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
    })
  ]

}