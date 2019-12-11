const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathModule = require('path');

const paths = {
    root: '.',
    dist: './dist',
    src: './src',
    get(key) {
        return pathModule.resolve(__dirname, this[key]);
    },
};

module.exports = {
    context: paths.get('root'),

    entry: `${paths.get('src')}/App.jsx`,
    output: {
        filename: 'bundle.js',
        path: paths.get('dist'),
        publicPath: '/',
    },

    devtool: 'source-map',

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: `${paths.get('src')}/index.html`,
        }),
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: paths.get('dist'),
        watchContentBase: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        alias: {
            Components: `${paths.get('src')}/components`,
            Core: `${paths.get('src')}/core`,
            Fonts: `${paths.get('src')}/fonts`,
            Icons: `${paths.get('src')}/icons`,
            Scss: `${paths.get('src')}/scss`,
        },
    },
};
