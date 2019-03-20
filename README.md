# Purpose

This package contains a set of tslint rules that enforces a consistent code style in all Typescript projects.

# Usage

Install using npm to your devDependencies:

```
npm install --save-dev https://github.com/insurello/tslint-insurello
```

Configure tslint to use `tslint-insurello` by adding it to your `tslint.json`:

```javascript
{
   "extends": ["tslint-insurello"]
   "rules": {
     ...
   }
}
```

Default serverity level is warning, to force error set the enviroment variable `CI`.
