const { testEnvironment, ...nxPreset } = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  preset: 'jest-playwright-preset',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.e2e.json',
    },
  },
  displayName: 'react-app-e2e-pw',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
    },
  },
};
