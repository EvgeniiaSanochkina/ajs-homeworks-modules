const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

const productionConfig = require('./webpack.production.config.js');

const developmentConfig = require('./webpack.development.config.js');

module.exports = function(env) {
    if (env.development) {
        return merge(commonConfig, developmentConfig);
    } else {
        return merge(commonConfig, productionConfig);
    }

}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },

        ]
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}