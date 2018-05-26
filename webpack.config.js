const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');

const webpackConfig = {
	mode: 'development',
	entry: './main.ts',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'index.js',
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: [/node_modules/],
				options: {},
			},
		],
	},
	plugins: [
		// new UglifyJsPlugin({
		// 	cache: true,
		// 	parallel: true,
		// 	uglifyOptions: {
		// 		compress: false,
		// 		ecma: 5,
		// 		mangle: false,
		// 	},
		// 	sourceMap: false,
		// }),
	],
	externals: {
		react: 'react',
		'react-redux': 'react-redux',
		redux: 'redux',
		'styled-components': 'styled-components',
	},
};

module.exports = webpackConfig;
