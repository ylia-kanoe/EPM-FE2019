const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/js/app.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ], 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
              test: /\.scss$/,
              use:  [  'style-loader', 
              MiniCssExtractPlugin.loader, 
              'css-loader', 'sass-loader']
            }
            ,
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options: { 
                    outputPath: 'assets/image',
                    name: '[name].[ext]'
                    
                }
            },
            {
                test: /\.(ttf|woff)$/,
                loader: 'file-loader',
                options: { 
                    outputPath: 'assets/fonts',
                    name: '[name].[ext]'
                }
            } 
        ]
    }
}

