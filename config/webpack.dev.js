const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const globalConfig = require('./global.config');

const devConfig = {
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch'
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: globalConfig.publicPathDev
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        https: globalConfig.httpsDev,
        compress: true,
        port: 9000,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = merge.strategy({
    entry: 'prepend',
    plugins: 'prepend'

})(commonConfig, devConfig);