const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const globals = require('globals');

module.exports = tseslint.config(
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  { languageOptions: { globals: globals.node } },
  { files: ['**/*.ts'], extends: tseslint.configs.recommended },
  { files: ['tests/**/*.ts'], languageOptions: { globals: globals.jest } },
);
