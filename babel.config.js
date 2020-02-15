module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        'useBuiltIns': 'entry',
        'corejs': 3,
        'modules': false,
        'targets': {
          'node': 'current',
          'browsers': '> 5%'
        }
      }
    ],

    '@babel/preset-react',
    '@babel/preset-typescript'
  ],

  plugins: [
    '@babel/plugin-syntax-object-rest-spread',
    [
      'macros', {
        config: './tailwind.js',
        format: 'auto'
      }
    ]
  ]
}
