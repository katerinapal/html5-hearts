var path = require('path');
var webpack = require('webpack');

module.exports = [{
  entry: {
	  'main': [
    'babel-polyfill',
	'webpack-dev-server/client?http://localhost:8080',
	'./js/main.js', './index.js'
  ]},
  output: {
      publicPath: '/',
	  path: path.join(__dirname, '/output'),
	  filename: '[name].js',
	  libraryTarget: 'amd',
	  target: 'web'
  },
  debug: true,
  devtool: 'source-map',
  module: {
	  rules: [
      {
        test: /require\.js$/,
        use: [ 'script-loader' ]
      }
    ],
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, '/'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015-without-strict']
        }
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  devServer: {
    contentBase: "./",
	outputPath: path.join(__dirname, '/output')
  }
},
{
	target: 'web',
  entry: {
	
  
  'js/BrainWorker': ['./js/BrainWorker.js']},
  output: {
      publicPath: '/',
	  path: path.join(__dirname, '/output'),
	  filename: '[name].js',
	  globalObject: 'window'
  },
  debug: true,
  devtool: 'source-map',
  module: {
	  rules: [
      {
        test: /require\.js$/,
        use: [ 'script-loader' ]
      }
    ],
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, '/'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  devServer: {
    contentBase: "./",
	outputPath: path.join(__dirname, '/output')
  }
}];
