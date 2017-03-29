var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')    
  },
  module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015', 'stage-0'] }
                }],
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}