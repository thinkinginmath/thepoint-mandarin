const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = [
	{ entry: {
		main: './src/app.js'
	},
    output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
	}
   },
   { entry: {
		yt: './src/yt.js',
	},
    output: {
	    filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'ytlink'
	}
   }]

