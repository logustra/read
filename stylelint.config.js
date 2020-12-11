module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-rscss/config'
  ],
  rules: {
    'length-zero-no-unit': null,
    'at-rule-empty-line-before': ['always', {
      ignore: ['after-comment'],
      except: [
        'inside-block',
        'after-same-name'
      ]
    }],

    // rscss
    'rscss/no-descendant-combinator': false
  }
}
