const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },  
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],
}

