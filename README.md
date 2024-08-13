## Repro

1 - run `yarn install`
2 - run `yarn test`
3 - Check the code at [./vitest-plugin](./vitest-plugin/storybook-plugin.ts)

### With browser mode enabled:
![](browser-mode.png)

### With browser mode disabled:
![](no-browser-mode.png)

### When changing to use `configResolved` instead of `config`:
![](without-config-resolved.png)