const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: ['.*\\.spec\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  collectCoverageFrom: [
    '<rootDir>/**/*.(t|j)s',
    '!<rootDir>/**/index.(t|j)s',
    '!<rootDir>/**/*.module.(t|j)s',
    '!<rootDir>/core/**/*.(t|j)s',
    '!<rootDir>/**/schemas/*.(t|j)s',
    '!<rootDir>/**/dto/*.(t|j)s',
    '!<rootDir>/**/**/*dto.(t|j)s',
    '!<rootDir>/**/main.(t|j)s',
    '!<rootDir>/**/jest*.config.(t|j)s',
    '!<rootDir>/**/middlewares/*.(t|j)s',
    '!<rootDir>/**/constants/*.(t|j)s',
    '!<rootDir>/**/migrations/*.(t|j)s',
    '!<rootDir>/**/**/decorators/*.(t|j)s',
    '!<rootDir>/**/**/dto/*.(t|j)s',
    '!<rootDir>/**/**/dto/custom-validators/*.(t|j)s',
    '!<rootDir>/**/**/utils/custom-decorator/*.(t|j)s',
  ],
  coverageDirectory: path.join(__dirname, 'coverage'),
  coverageReporters: ['text', 'cobertura', 'html', 'lcov'],
  reporters: ['default'],
  testEnvironment: 'node',
  testTimeout: 60000,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: __dirname,
  }),
};
