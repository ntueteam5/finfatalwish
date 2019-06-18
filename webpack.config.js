let path = require('path');

let htmlPages = ['index','course'];

const ExtractTextPlugin = require('extract-text-webpack-plugin');

let htmlPlugins = htmlPages.map(page =>
    new HtmlWebpackPlugin({
        filename: `${character}.html`,
        template: `assets/${character}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${event}.html`,
        template: `assets/${event}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${item}.html`,
        template: `assets/${item}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${madeit}.html`,
        template: `assets/${madeit}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${main_page}.html`,
        template: `assets/${main_page}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${map}.html`,
        template: `assets/${map}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${messange}.html`,
        template: `assets/${messange}.html`,
        favicon:'assets/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
        filename: `${rule}.html`,
        template: `assets/${rule}.html`,
        favicon:'assets/images/favicon.ico'
    })
);

module.exports = {
    entry:'./assets/js/app.js',
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.[chunkhash].js'
        //publicPath: './dist/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options:{
                            url: false
                        }
                    },{
                        loader: 'postcss-loader'
                    }]
                }),
            },
            {
            test: /\.(js)$/,
            exclude:/(node_modules)/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            test:/\.(jpe?g|png|gif|svg)$/,
            use:[
                {
                    loader: 'url-loader',
                    options: {
                        limit:40000,
                        outputPath: './images'
                    }
                },
                'image-webpack-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use:{
                    loader: 'file-loader',
                    options:{
                        outputPath: 'css/fonts',
                        name: '[name].[ext]',
                    },
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.[hash].css'),
        ...htmlPlugins
    ]
}