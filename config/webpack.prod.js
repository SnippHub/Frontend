const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const globalConfig = require('./global.config');

const devConfig = {
    entry: {
        app: [
            'babel-polyfill'
        ]
    },
    output: {
        publicPath: globalConfig.publicPathProd,
        filename: "[name].[hash].js"
    },
    devtool: false,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ]
};


module.exports = merge.strategy({
    entry: 'prepend',
    plugins: 'prepend'

})(commonConfig, devConfig);