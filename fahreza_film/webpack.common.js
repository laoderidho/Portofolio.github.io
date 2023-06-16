const HtmlwebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')


module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js')
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader', 
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            filname: 'index.html',
            template: path.resolve(__dirname, 'src/template/index.html'),
        }),
        new copyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/')
                }
            ]
        })
    ]
}