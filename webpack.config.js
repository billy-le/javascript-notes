// nodule modules
const path = require('path');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // these entry points will be the output to file path with source file
    entry: {
        'rxjs/mouseClick': './rxjs/mouseClick/index.js',
    },

    // bundle all entries as filenames and output to dist folder
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        chunkFilename: '[name].js',
    },

    // because everything in webpack reads javascript files, we need loaders to
    // include other file types or transpile new ecma features
    module: {
        rules: [
            {
                test: /\.js|x$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    // plugins extends webpack functionalities
    plugins: [
        // deletes old dist folder in order to build a fresh one
        new CleanWebpackPlugin(),
        // html-webpack-plugin injects a script tag
        new HtmlWebpackPlugin({
            filename: './rxjs/index.html',
            template: './rxjs/mouseClick/index.html',
        }),
    ],

    // enable static code splitting
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    // development settings
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        publicPath: '/dist/',
        contentBase: path.resolve(__dirname, 'dist'),
    },
};
