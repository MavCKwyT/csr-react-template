module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    parser: 'typescript-eslint/parser',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'no-dupe-class-members': 'off',
    'no-plusplus': 'off',
    'no-var': 'off',
    'no-param-reassign': 'warn',
    'max-len': ['warn', { code: 120 }],
  },
};
