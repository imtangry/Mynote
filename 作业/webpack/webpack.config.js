var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html'
});
module.exports = {
    mode: "development",
    plugins: [
        htmlWebpackPlugin
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {loader: 'file-loader'}
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    },

                ]
            },
        ]
    }
}
