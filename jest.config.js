module.exports = {
  moduleNameMapper: {
    '^~/test/(.*)$': '<rootDir>/test/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
