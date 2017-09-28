var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname , 'views', 'index.html'),
    filename: 'index.html'
});
var WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
    entry: [
        'babel-polyfill',
        './app/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ["babel-loader?presets[]=env"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000&name=[name].[ext]'
            },
            {
                test: /\.(csv)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }

        ]
    },
    devServer:{
        historyApiFallback: true
    },
    watch: true,
    plugins: [
      HTMLWebpackPluginConfig,
      new WriteFilePlugin()
    ]
}
