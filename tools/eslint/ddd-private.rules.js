module.exports = {
  dddPrivateRules,
};
function dddPrivateRules(domain) {
  return {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [`@architect-poc/${domain}-public-state`],
          message: 'You cannot import from your own shared library.',
        },
      ],
    },
  };
}
