module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
    'es2021': true
  },
  extends: [
    'semistandard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
    "@typescript-eslint/await-thenable": "off"
  }
};
