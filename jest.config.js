module.exports = {
  roots: ['<rootDir>/packages'],
  collectCoverageFrom: ['<rootDir>/packages/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}
