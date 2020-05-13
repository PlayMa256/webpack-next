module.exports = {
    mode: 'production',
    entry: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom'
    ],
    output:{
        filename: 'vendor.js'
    }
}