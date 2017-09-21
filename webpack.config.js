var path = require('path');
module.exports = {
    entry: [
        'babel-polyfill',
        './app/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
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
    }
}