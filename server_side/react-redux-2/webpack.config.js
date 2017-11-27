var path = require('path')

module.exports = {
	entry: './client/app.js',

	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/javascripts')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015']
					}
				}
			}
		]
	}
}