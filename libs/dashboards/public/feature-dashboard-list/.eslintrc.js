const {
  dddFeatureRules,
} = require('../../../../tools/eslint/ddd-public-rules');

module.exports = {
  extends: ['../../../../.eslintrc.json'],
  ignorePatterns: ['!**/*'],
  overrides: [
    { ...dddFeatureRules('dashboards') },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@nrwl/nx/angular',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'architectPoc',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'architect-poc',
            style: 'kebab-case',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@nrwl/nx/angular-template'],
      rules: {},
    },
  ],
};
