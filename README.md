<div align="center">
  <h1>@rc-component/switch</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Part of the Ant Design ecosystem.</sub></p>
  <p>🔘 Accessible React switch for boolean state with controlled and uncontrolled modes.</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/switch"><img src="https://img.shields.io/npm/v/@rc-component/switch.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/switch"><img src="https://img.shields.io/npm/dm/@rc-component/switch.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/switch/actions"><img src="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/switch"><img src="https://img.shields.io/codecov/c/github/react-component/switch/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/switch"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/switch" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>


## Highlights

- Renders a native button with `role="switch"` and `aria-checked` state.
- Supports controlled and uncontrolled checked state.
- Handles click and keyboard toggles with left and right arrow keys.
- Provides content class/style slots for checked and unchecked labels.

## Install

```bash
npm install @rc-component/switch
```

## Usage

```tsx pure
import Switch from '@rc-component/switch';
import '@rc-component/switch/assets/index.css';

export default () => <Switch checkedChildren="On" unCheckedChildren="Off" />;
```

Online preview: https://switch.react-component.vercel.app/

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

| Name                | Type                                | Default       | Description                                |
| ------------------- | ----------------------------------- | ------------- | ------------------------------------------ |
| `autoFocus`         | boolean                             | -             | Focus the switch on mount.                 |
| `checked`           | boolean                             | -             | Controlled checked state.                  |
| `checkedChildren`   | React.ReactNode                     | -             | Content shown when checked.                |
| `className`         | string                              | -             | Additional class name.                     |
| `classNames`        | `{ content?: string }`              | -             | Semantic class names for internal content. |
| `defaultChecked`    | boolean                             | false         | Initial checked state.                     |
| `disabled`          | boolean                             | false         | Disable interaction.                       |
| `loadingIcon`       | React.ReactNode                     | -             | Extra loading icon node.                   |
| `onChange`          | `(checked, event) => void`          | -             | Triggered after checked state changes.     |
| `onClick`           | `(checked, event) => void`          | -             | Triggered after click.                     |
| `onKeyDown`         | React.KeyboardEventHandler          | -             | Key down handler.                          |
| `prefixCls`         | string                              | `'rc-switch'` | Prefix class name.                         |
| `style`             | React.CSSProperties                 | -             | Root style.                                |
| `styles`            | `{ content?: React.CSSProperties }` | -             | Semantic styles for internal content.      |
| `tabIndex`          | number                              | -             | Tab index.                                 |
| `title`             | string                              | -             | Native title attribute.                    |
| `unCheckedChildren` | React.ReactNode                     | -             | Content shown when unchecked.              |

## Development

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/switch is released under the [MIT](./LICENSE.md) license.
