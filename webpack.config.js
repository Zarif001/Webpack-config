const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { config } = require('process')

const isDev = process.env.NODE_ENV === 'develompent'
const isProd = !isDev

const optimization = () =>{
    return {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd){
        config.minimizer = [
            new TerserWebpackPlugin()
        ]
    }
    return config 
}
module.exports = {
    context:path.resolve(__dirname, 'src'),
    mode:'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions: ['.js', '.png', '.html', '.css'],
        alias:{
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization:optimization(),
    devServer:{
        port: 8000,
        open: true,
        hot: isDev
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin ({
            filename: '[name].css'
        })
    ],
    module:{
        rules:[
            {
                test:/\.html$/,
                use:['html-loader']

            },
            {
                test:/\.css$/,
                use: [ 
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader']
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                use:['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}
