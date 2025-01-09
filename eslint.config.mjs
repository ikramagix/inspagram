import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node,    // Include Node.js globals
        ...globals.jest,    // Include Jest globals (for testing)
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable outdated rule
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
    },
  },
  pluginJs.configs.recommended, // Use recommended JavaScript rules
  pluginReact.configs.flat.recommended, // Use recommended React rules
];
