'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

function allDirectoryFiles() {
  fs.readdirSync(path.join(__dirname, './lambdas'))
    .filter((filename) => /\.js$/.test(filename))
    .map((filename) => {
      const entry = {}
      entry[filename.replace('.js', '')] = path.join(
        __dirname,
        './lambdas/',
        filename
      )
      return entry
    })
    .reduce((finalObject, entry) => Object.assign(finalObject, entry), {})
}

module.exports = {
  entry: allDirectoryFiles(),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }],
  },
}
