const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');
const libraryName = pkg.name;

const webpackConfig = {
	mode: 'development',
	entry: './main.ts',
	output: {
		path: path.resolve(__dirname, './'),
		library: libraryName,
		filename: 'index.js',
		// libraryTarget: 'commonjs',
		libraryTarget: 'umd',
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
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React',
		},
		'react-redux': {
			commonjs: 'react-redux',
			commonjs2: 'react-redux',
			amd: 'ReactRedux',
			root: 'ReactRedux',
		},
		redux: {
			commonjs: 'redux',
			commonjs2: 'redux',
			amd: 'Redux',
			root: 'Redux',
		},
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'StyledComponents',
			root: 'StyledComponents',
		},
	},
};

module.exports = webpackConfig;
