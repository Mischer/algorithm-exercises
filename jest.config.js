module.exports = {
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    testMatch: [
        '**/?(*.)+(spec|test).js?(x)'
    ],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ],
    coverageDirectory: 'coverage',
    transform: {}
};