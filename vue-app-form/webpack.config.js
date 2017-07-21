var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/App.vue',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  /*module: {
    rules: [
      {
        test: /\.js$/,
        loader: [

        ],
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },*/
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // ...
    })
  ]
}