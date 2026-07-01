<div align="center">
  <h1>@rc-component/switch</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🔘 Accessible React switch for boolean state with controlled and uncontrolled modes.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/switch"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/switch.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/switch"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/switch.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/switch"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/switch/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/switch"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/switch?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
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
ut install
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
ut install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

The dumi site runs at `http://localhost:8000` by default.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/switch is released under the [MIT](./LICENSE) license.
