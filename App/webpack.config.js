const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js | jsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test: /\.(*s)css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"./src/assets/[name].scss"
        }),
    ]
}