module.exports = {
  reporters: ['default'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(jwks-rsa))'],
  testTimeout: 50000,
};
