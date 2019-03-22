# Purpose

This package contains a set of TSLint rules that enforces a consistent code style in all TypeScript projects.

# Usage

Install using npm to your devDependencies:

```
npm install --save-dev insurello/tslint-insurello#v2.0.2
```

Configure TSLint to use `tslint-insurello` by adding it to your `tslint.json`:

```javascript
{
   "extends": ["tslint-insurello"]
   "rules": {
     ...
   }
}
```

Default serverity level is warning, to force error set the enviroment variable `CI`.
