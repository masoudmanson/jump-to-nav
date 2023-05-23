module.exports = {
  // env: { browser: true, es2020: true },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:react-hooks/recommended',
  // ],
  // parser: '@typescript-eslint/parser',
  // parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // plugins: ['react-refresh'],
  // rules: {
  //   'react-refresh/only-export-components': 'warn',
  // },

  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard",
    "plugin:sonarjs/recommended",
    // disables rules that conflict with prettier
    // must come last
    "prettier",
    "prettier/standard"
  ],
  "plugins": ["react", "sonarjs", "standard"],
  "rules": {
    "camelcase": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-prototype-builtins": "warn",
    "no-unreachable": "error",
    "no-unused-vars": "error",
    "no-trailing-spaces": "warn",
    "no-multi-spaces": "error",
    "react/boolean-prop-naming": "warn",
    "react/jsx-key": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-string-refs": "warn",
    "react/prop-types": "warn",
    "react/no-danger": "error",
    "semi": ["error", "always"],
    "sonarjs/cognitive-complexity": "off",
    "sonarjs/prefer-single-boolean-return": "off",
    "no-extra-semi": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "standard/object-curly-even-spacing": "warn",
    "standard/computed-property-even-spacing": "off",
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "internal"
          },
          {
            "pattern": "~ui/**",
            "group": "internal"
          },
          {
            "pattern": "~utils/**",
            "group": "internal"
          }
        ],
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ]
  },
  "overrides": [
    {
      "extends": ["plugin:@typescript-eslint/recommended"],
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": ["tsconfig.json"]
      },
      "plugins": ["@typescript-eslint/eslint-plugin"],
      "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "camelcase": "off",
        "@typescript-eslint/camelcase": "off",
        "semi": "off",
        "@typescript-eslint/semi": "error",
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "off"
      }
    }
  ],
  "settings": {
    "propWrapperFunctions": ["forbidExtraProps"],
    "react": {
      "version": "detect"
    },
    "max-len": 120
  }
}
