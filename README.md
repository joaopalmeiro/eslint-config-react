# eslint-config-react

My personal [ESLint](https://eslint.org/) config for [React](https://reactjs.org/) projects.

## Usage

**Install**:

```bash
npm install --save-dev @joaopalmeiro/eslint-config-react
```

or

```bash
yarn add --dev @joaopalmeiro/eslint-config-react
```

or

```bash
pnpm add --save-dev @joaopalmeiro/eslint-config-react
```

**Add the `.eslintrc.json` file to the project:**:

<!-- prettier-ignore-start -->
```json
{
    "extends": "@joaopalmeiro/eslint-config-react"
}
```
<!-- prettier-ignore-end -->

## References

- [@joaopalmeiro/prettier-config](https://github.com/joaopalmeiro/prettier-config) package.
- [Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) documentation.
- [How to Create Your Own ESLint Config Package](https://www.freecodecamp.org/news/creating-your-own-eslint-config-package/) blog post by Leonardo Faria.
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) package.
- [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds) package.
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) package.

## Development

- `npm install`.
- `npm pack --dry-run`.

## Deployment

- `npm version minor` or `npm version patch` or `npm version major`.
- `git push --follow-tags`.

## Notes

- `npm install --save-peer eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import`.
- [eslint-find-rules](https://www.npmjs.com/package/eslint-find-rules).
- [Range Ignore](https://prettier.io/docs/en/ignore.html#range-ignore) (Prettier).
