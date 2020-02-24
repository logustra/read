module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [1, 'always', [
      'feat',
      'fix',
      'improvement',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert'
    ]]
  }
}
