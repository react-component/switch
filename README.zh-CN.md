<div align="center">
  <h1>@rc-component/switch</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
  <p>🔘 React 开关组件。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/switch"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/switch.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/switch"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/switch.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/switch/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/switch"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/switch/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/switch"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/switch?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- 渲染具有 `role="switch"` 和 `aria-checked` 状态的本机按钮。
- 支持受控和非受控检查状态。
- 使用左右箭头键处理点击和键盘切换。
- 为选中和未选中的标签提供内容类/样式槽。

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

在线预览：https://switch.react-component.vercel.app/

## 示例

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

| 名称                | 类型                                | 默认值       | 说明                                |
| ------------------- | ----------------------------------- | ------------- | ------------------------------------------ |
| `autoFocus`         | boolean                             | -             | 将开关聚焦在安装座上。                 |
| `checked`           | boolean                             | -             | 受控的检查状态。                  |
| `checkedChildren`   | React.ReactNode                     | -             | 勾选时显示的内容。                |
| `className`         | string                              | -             | 附加 className。                     |
| `classNames`        | `{ content?: string }`              | -             | 内部内容的语义 className。 |
| `defaultChecked`    | boolean                             | false         | 初始检查状态。                     |
| `disabled`          | boolean                             | false         | 禁用交互。                       |
| `loadingIcon`       | React.ReactNode                     | -             | 额外加载图标节点。                   |
| `onChange`          | `(checked, event) => void`          | -             | 检查状态更改后触发。     |
| `onClick`           | `(checked, event) => void`          | -             | 点击后触发。                     |
| `onKeyDown`         | React.KeyboardEventHandler          | -             | 按键按下处理函数。                         |
| `prefixCls`         | string                              | `'rc-switch'` | className 前缀。                         |
| `style`             | React.CSSProperties                 | -             | 根样式。                                |
| `styles`            | `{ content?: React.CSSProperties }` | -             | 内部内容的语义样式。      |
| `tabIndex`          | number                              | -             | Tab index.                                 |
| `title`             | string                              | -             | 本土产权属性。                    |
| `unCheckedChildren` | React.ReactNode                     | -             | 未选中时显示的内容。              |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

dumi 站点默认运行在 `http://localhost:8000`。

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/switch 基于 [MIT](./LICENSE) 许可证发布。
