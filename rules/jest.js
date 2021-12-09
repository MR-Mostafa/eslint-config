module.exports = {
  rules: {
    'jest/consistent-test-it': 'off',
    'jest/expect-expect': 'off',
    'jest/lowercase-name': 'off',
    'jest/max-nested-describe': ['error', { max: 2 }],
    'jest/no-alias-methods': 'off',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-done-callback': 'warn',
    'jest/no-duplicate-hooks': 'off',
    'jest/no-expect-resolves': 'off',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'off',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-matchers': 'error',
    'jest/no-standalone-expect': 'off',
    'jest/no-test-callback': 'off',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'off',
    'jest/no-truthy-falsy': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-lowercase-title': 'off',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-be-null': 'off',
    'jest/prefer-to-be-undefined': 'off',
    'jest/prefer-to-be': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-hook': 'error',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/unbound-method': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-title': 'warn',

    // jest-formatting
    'jest-formatting/padding-around-after-all-blocks': 'warn',
    'jest-formatting/padding-around-after-each-blocks': 'warn',
    'jest-formatting/padding-around-all': 'warn',
    'jest-formatting/padding-around-before-all-blocks': 'warn',
    'jest-formatting/padding-around-before-each-blocks': 'warn',
    'jest-formatting/padding-around-describe-blocks': 'warn',
    'jest-formatting/padding-around-expect-groups': 'warn',
    'jest-formatting/padding-around-test-blocks': 'warn',

    // conflicts
    '@typescript-eslint/unbound-method': 'off',
  },
};
