const app = require('express')();
const webpack = require('webpack');
const getEntrypoint = require('./bundler/entrypoint');
const webpackConfig = require('./bundler/webpackConfig');

app.get('/pages/:page', (req, res) => {
    const entrypoint = getEntrypoint(req.params.page);
    const config = webpackConfig(entrypoint);
    
});