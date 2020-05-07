module.exports = {
    entry: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom'
    ],
    output:{
        filename: 'vendor.js'
    },
    optimizations: {
        splitChunks: {
            maxChunks: 1
        }
    }
}