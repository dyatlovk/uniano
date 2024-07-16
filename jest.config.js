/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.ts?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    '^@common/models(.*)$': '<rootDir>/src/common/models/$1',
  },
};
