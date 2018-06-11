const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env, argv) {
    const entry = ['babel-polyfill']
    entry.push(env);
    
    return {
      entry: entry,
      output: {
        filename: 'App.js',
        path: path.resolve(__dirname, 'dist')
      },
      module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
      },
      plugins: [
          new CopyWebpackPlugin([
            { from: './index.html', to: './dist' }
          ])
      ]
    }
}