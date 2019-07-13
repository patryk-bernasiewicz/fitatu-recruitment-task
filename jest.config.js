module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  modulePaths: ['src', 'src/components', 'src/pages'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@img(.*)$': '<rootDir>/src/assets/img$1',
    '^@scss(.*)$': '<rootDir>/src/assets/scss$1',
    '^@services(.*)$': '<rootDir>/src/services$1'
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/__tests__/*.js'],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
