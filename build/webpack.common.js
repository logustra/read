const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx|tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', 
          'eslint-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@@': path.resolve(__dirname, '../src/modules'),
      'atoms': path.resolve(__dirname, '../src/components/atoms'),
      'molecules': path.resolve(__dirname, '../src/components/molecules'),
      'organisms': path.resolve(__dirname, '../src/components/organisms'),
      'templates': path.resolve(__dirname, '../src/components/templates')
    }
  },

  plugins: [
    new Dotenv({
      path: './.env'
    }),

    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 7
    })
  ]
}
