module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.test.js$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!src/config.js', '!src/__testHelpers__/*'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 95,
    },
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  clearMocks: true,
};
