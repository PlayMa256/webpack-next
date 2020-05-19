const webpack = require('webpack');
const { getWebpackConfig } = require('./bundler/webpackConfig');

module.exports = (entryPoint) => {
	console.log('a', entryPoint);
	const compiler = webpack(getWebpackConfig(entryPoint));

	return new Promise((resolve, reject) => {
		compiler.run((fatal, stats) => {
			if (stats && stats.hasErrors()) {
				reject(fatal);
			}
			resolve(stats);
		});
	})
}