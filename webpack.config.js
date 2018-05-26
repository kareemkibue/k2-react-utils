const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
	// mode: 'development',
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'index.js',
	},
	// devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				// test: /\.tsx?$/,
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: [/node_modules/],
				options: {},
			},
		],
	},
	plugins: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
				compress: false,
				ecma: 6,
				mangle: true,
			},
			sourceMap: false,
		}),
	],
};

module.exports = webpackConfig;
