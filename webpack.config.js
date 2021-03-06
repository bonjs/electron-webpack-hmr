var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	target: 'electron-renderer',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html",
			chunksSortMode: 'none',
			chunks: ['main', "runtime"],
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 3000,
		host: "0.0.0.0",
		hot: true,
		//open: true,
		inline: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ['latest'] //按照最新的ES6语法规则去转换
					}
				},
			}, {
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}
				]
			}, {
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			}, {
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.common.js'
		}
	}
}
