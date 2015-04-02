var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: {
		home: "./src/js/entry/home.js",
		special: "./src/js/entry/special.js"
	},
	output: {
		path: path.join(__dirname, "dist/js"),
		publicPath: "dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	resolve: {
		root: [
			__dirname + "/src/js/vendor"
		],
		alias: {
			"bootstrap": "bootstrap/bootstrap.3.3.2.min.js",
			"underscore": "underscore.1.7.0.min.js"
		}
	},	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("core.js"),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})		
	],
	externals: {
		"$": "jQuery"
	}	
};