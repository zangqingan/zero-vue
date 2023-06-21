module.exports = {
  root: true,
  // 此项指定环境的全局变量，
  env: {
    browser: true,
    es2021: true
  },
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写.（继承别人已经写好的包）
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential', // vue3支持
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  parser: 'vue-eslint-parser',
  // 此项是用来指定javaScript语言类型和风格
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // 指定js导入的方式
    parser: '@typescript-eslint/parser',
    project: true,
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
  },
  // 此项是用来提供插件的
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // 此项是自己自定义的规则
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off', // 不鼓励使用三斜线,关掉这个规则
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'handle-callback-err': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        trailingComma: 'none', // 在对象或数组最后一个元素不加逗号
        tabWidth: 2, // 缩进长度
        useTabs: false, // 是否Tab缩进代替空格
        semi: false, // 是否在末尾添加分号
        endOfLine: 'auto', // 结束行形式
        bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
        arrowParens: 'avoid', // 单参数箭头函数参数周围不使用圆括号
        singleAttributePerLine: true, // html标签属性换行
        bracketSameLine: true // 多属性html标签的‘>’不折行放置
      }
    ],
    'vue/no-unused-vars': 'off',
    'vue/no-mutating-props': 'off',
    'vue/valid-define-emits': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/multiline-html-element-content-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 5 },
        multiline: { max: 5 }
      }
    ], // vue template模板元素第一行最多5个属性
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-unused-components': 1,
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': 'off',
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: 'off',
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2,
    'no-var': 'error', // 禁止使用 var
    'no-array-constructor': 'off',
    'no-prototype-builtins': 'off',
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 1,
    'vue/no-dupe-keys': 1,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-empty': 'off',
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 'off',
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2, // 不能空格与tab混用
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 0,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 'off',
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      // 使用单引号
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    'semi-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      1,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ],
        line: { markers: ['/'] }
      }
    ],
    'template-curly-spacing': [1, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'array-bracket-spacing': [2, 'never']
  }
}
