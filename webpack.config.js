var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(gif|jpe?g|webp|png)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        enabled: false
                      },
                      optipng: {
                        enabled: false
                      },
                      pngquant: {
                        enabled: false
                      }
                    }
                  },
                ],
              }
        ]
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}