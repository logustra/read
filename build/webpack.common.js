const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main.tsx',
  
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
      'atoms': path.resolve(__dirname, '../src/components/atoms'),
      'molecules': path.resolve(__dirname, '../src/components/molecules'),
      'organisms': path.resolve(__dirname, '../src/components/organisms'),
      'templates': path.resolve(__dirname, '../src/components/templates'),
      'constants': path.resolve(__dirname, '../src/constants'),
      'libs': path.resolve(__dirname, '../src/libs'),
      'modules': path.resolve(__dirname, '../src/modules'),
      'services': path.resolve(__dirname, '../src/services'),
      'stores': path.resolve(__dirname, '../src/stores'),
      'styles': path.resolve(__dirname, '../src/styles'),
      'typings': path.resolve(__dirname, '../src/typings'),
      'utils': path.resolve(__dirname, '../src/utils')
    }
  },

  plugins: [
    new Dotenv({
      path: './.env'
    })
  ]
}
