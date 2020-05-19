const webpack = require('webpack');
const path = require('path');
const baseConfigForPages = require('../webpack.config');

function getWebpackConfig(entryPoint){
	const newConfig = Object.assign({}, baseConfigForPages);
    newConfig.entry = {
        [entryPoint]: path.resolve(__dirname, `../../app/pages/${entryPoint}.js`)
    };
	return newConfig;
}

module.exports = {
    getWebpackConfig
}