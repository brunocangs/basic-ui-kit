const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../docs')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['babel-preset-env', 'babel-preset-react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        ]
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]
}