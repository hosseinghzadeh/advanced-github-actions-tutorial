module.exports = {
  testEnvironment: 'node',
  watchman: false,
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: { module: 'CommonJS', moduleResolution: 'Node' },
    }],
  },
};
