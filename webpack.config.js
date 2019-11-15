const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

  devtool: 'source-map',

  entry: {
    application: ['./src/frontend/js/index.js'],
  }, 

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]_[hash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [ path.resolve(__dirname, "src/frontend") ],
	      exclude: [ /node_modules/, path.resolve(__dirname, "src/backend") ],
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.html$/,
        include: [ path.resolve(__dirname, "src/frontend") ],
        use: [
          
          {
            loader: "html-loader",
            options: {
            
            }
          }

        ]
      }
 
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/frontend/index.html",
      //filename: "./index.html"
    })
  ]

};