const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './js/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
 	plugins: [
	 	new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
	},
  module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	}
};
