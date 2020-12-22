const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin({
            patterns: [{
                from: './src/assets/img',
                to: './img'
            }, ],
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.vue$/i,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
}