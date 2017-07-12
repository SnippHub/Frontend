const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const globalConfig = require('./global.config');
const isProd = process.env.NODE_ENV === "production"

const extractCss = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: !isProd
});

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json", "*"],
        modules: [path.resolve(__dirname, "../src"), "node_modules"]
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }, {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    entry: {
        app: [
            './src/index.jsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', globalConfig.buildDir)
    },
    plugins: [
        extractCss,
        new HtmlWebpackPlugin({
            title: globalConfig.siteTitle,
            template: 'src/index.ejs',
            baseHref: globalConfig.getBaseHref()
        })
    ]
};