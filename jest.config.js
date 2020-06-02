const { defaults } = require("jest-config");
const path = require("path");
const babelConfig = require("./babel.config.js");

module.exports = {
  clearMocks: true,
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "vue"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  coverageReporters: ["json"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js, vue}"],
  globals: {
    "vue-jest": {
      babelConfig
    }
  },
  transformIgnorePatterns: ["node_modules/(?!(vue-material-design-icons)/)"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "^.+\\.vue$": require.resolve("vue-jest")
  },
  moduleNameMapper: {
    "^.+\\.scss$": "babel-jest"
  }
};
