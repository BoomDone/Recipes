module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
        transformIgnorePatterns: [
    
            "<rootDir>/node_modules/(?!@ionic-native|@ionic|ionicons)",
    ],
    coverageReporters: ['text', 'html'],
    coverageDirectory: '<rootDir>/coverage'
}