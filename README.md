# @wzono/eslint-config

> This repository is based on [antfu/eslint-config](https://github.com/antfu/eslint-config), created by [antfu](https://github.com/antfu).

wzono's eslint config presets

## changes

- `eslint-config` use react as default
- some custom eslint rules are added
- use another fixture project to test format/fix

## Usage

> More details see https://github.com/antfu/eslint-config

### Install

```bash
pnpm add -D eslint @wzono/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@wzono"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2023 [Wesley Zon](https://github.com/wzono)
