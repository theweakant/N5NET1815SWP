

module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.(css|scss)$": "jest-transform-css"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(antd|@ant-design|rc-.*|@babel)/)"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        // "\\.(gif|ttf|eot|svg)$": "<rootDir>/fileMock.js"
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testEnvironment: "jsdom"
};

