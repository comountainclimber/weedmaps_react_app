module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        //"react-native"
    ],
    "globals": {
         "google": true,
         "d3": true
    },
    "rules": {
        "strict": [0],
        "import/prefer-default-export": [0],
        "no-multi-str": [0],
        "no-plusplus": [0],
        "no-underscore-dangle": [0],
        "comma-dangle": [0],
        // in react-native we purposefully exclude file extensions from our import statements
        "import/extensions": [0],
        "max-len": ["warn", 100],
        "consistent-return": "warn",
        "object-curly-spacing": [0],
        "quotes": ["error", "single"],
        "object-shorthand": [0],
        "no-param-reassign": "warn",
        "indent": ["warn", 4],
        "no-use-before-define": [0],
        "no-unused-vars": ["error", {"varsIgnorePattern": "React", "args": "none" }],
        "semi": [ "error", "always"],
        // do not require validation of props
        "react/prop-types": "warn",
        // throw an error for unused imports of react components
        "react/jsx-uses-vars": 1,
        // throw error if writing JSX without requiring React
        "react/react-in-jsx-scope": 1,
        // allow files with .js and .jsx to contain jsx
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // double quotes jsx
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-space-before-closing": 1,
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-curly-spacing": 1,
        "react/jsx-boolean-value": 1,
        "react/no-string-refs": 1,
        "react/jsx-wrap-multilines": 1,
        "react/self-closing-comp": 1,
        "react/jsx-closing-bracket-location": 1,
    }
};