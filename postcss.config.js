const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const postcssPlugins = [
  tailwind('./tailwind.config.js')
]

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(
    autoprefixer(),
    purgecss({
      content: ['./src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      whitelist: ['html', 'body']
    }),
    cssnano({
      preset: 'default'
    })
  )
}

module.exports = {
  plugins: postcssPlugins
}
