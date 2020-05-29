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

    '@babel/preset-typescript',
    '@babel/preset-react'
  ],

  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
    
    [
      'macros', {
        config: './tailwind.config.js',
        format: 'auto',
        styledComponents: {
          ssr: false,
          displayName: false,
          pure: true
        }
      }
    ]
  ]
}
