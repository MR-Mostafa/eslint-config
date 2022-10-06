const exts = '+(js|jsx|ts|tsx)';
const dirs = '+(test|tests|__test__|__tests__|spec|specs)';

/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: [`**/${dirs}/**/*.${exts}`, `**/**/*.+(spec|test|e2e-spec|e2e-test).${exts}`],
      plugins: ['jest', 'jest-formatting'],
      env: {
        'jest/globals': true,
      },
      extends: ['./rules/jest', './rules/jest-format'],
    },
  ],
};
