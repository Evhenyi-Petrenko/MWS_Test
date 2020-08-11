const  path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		},{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
				},{
					loader: "postcss-loader",
					options: {config: { path: 'src/js/postcss.config.js'}}
				},{
					loader: "sass-loader",
				}
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
};
