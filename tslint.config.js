module.exports = {
  defaultSeverity: process.env.CI ? "error" : "warning",
  extends: [
    "tslint:latest",
    "tslint-config-prettier",
    "tslint-config-security"
  ],
  rules: {
    "import-blacklist": [true, "fp-ts/lib/Trace", { "fp-ts": ["trace"] }],
    "interface-name": [true, "never-prefix"],
    "interface-over-type-literal": false,
    "max-classes-per-file": false,
    "no-implicit-dependencies": [true, "dev"],
    "no-submodule-imports": false,
    "no-var-requires": false,
    "object-literal-sort-keys": false,
    "variable-name": {
      options: [
        "ban-keywords",
        "check-format",
        "allow-leading-underscore",
        "allow-pascal-case"
      ]
    }
  }
};
