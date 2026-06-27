<div align="center">
  <h1>@rc-component/switch</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>🔀 React 开关组件。</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/switch"><img src="https://img.shields.io/npm/v/@rc-component/switch.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/switch"><img src="https://img.shields.io/npm/dm/@rc-component/switch.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/switch/actions"><img src="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/switch"><img src="https://img.shields.io/codecov/c/github/react-component/switch/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/switch"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/switch" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- Renders a native button with `role="switch"` and `aria-checked` state.
- 支持 controlled and uncontrolled checked state.
- Handles click and keyboard toggles with left and right arrow keys.
- 提供 content class/style slots for checked and unchecked labels.

## 安装

```bash
npm install @rc-component/switch
```

## 使用

```tsx pure
import Switch from '@rc-component/switch';
import '@rc-component/switch/assets/index.css';

export default () => <Switch checkedChildren="On" unCheckedChildren="Off" />;
```

Online preview: https://switch.react-component.vercel.app/

## API

| 名称                | 类型                                | 默认值       | 说明                                |
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

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/switch is released under the [MIT](./LICENSE.md) license.
