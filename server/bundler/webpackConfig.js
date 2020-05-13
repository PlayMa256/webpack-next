const baseWebpack = require('../webpack.config');
export default function getWebpackConfig(entryPoint) {
    const config = {
        ...baseWebpack,
        entrypoint: entryPoint
    }
    return config;
}