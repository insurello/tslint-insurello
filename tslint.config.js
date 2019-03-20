module.exports = {
  extends: ["tslint:latest", "tslint-config-prettier"],
  defaultSeverity: process.env.CI ? "error" : "warning",
  rules: {
    "interface-name": [true, "never-prefix"],
    "interface-over-type-literal": false,
    "object-literal-sort-keys": false,
    "variable-name": {
      options: [
        "ban-keywords",
        "check-format",
        "allow-leading-underscore",
        "allow-pascal-case"
      ]
    },
    "no-var-requires": false
  }
};
