# rc-switch

---

switch ui component for react.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies][david-image]][david-url]
[![DevDependencies][david-dev-image]][david-dev-url]
[![npm download][download-image]][download-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/rc-switch.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-switch
[travis-image]: https://img.shields.io/travis/react-component/switch.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/switch
[coveralls-image]: https://img.shields.io/coveralls/react-component/switch.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/switch?branch=master
[david-url]: https://david-dm.org/react-component/switch
[david-image]: https://david-dm.org/react-component/switch/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/switch?type=dev
[david-dev-image]: https://david-dm.org/react-component/switch/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/rc-switch.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-switch
[bundlephobia-url]: https://bundlephobia.com/result?p=rc-switch
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/rc-switch

## Feature

- support ie8,ie8+,chrome,firefox,safari

## API

| Property       | Type                     | Default   | Description                                              |
| -------------- | ------------------------ | --------- | -------------------------------------------------------- |
| prefixCls      | String                   | rc-switch |                                                          |
| className      | String                   | ''        | additional class name of root node                       |
| checked        | boolean                  | false     | whether switch is checked                                |
| defaultChecked | boolean                  | false     | whether switch is checked on init                        |
| onChange       | Function(checked, event) |           | called when switch is checked or unchecked               |
| tabIndex       | number                   |           | tab-index of switch node                                 |
| onClick        | Function(checked, event) |           | called when switch is clicked                            |
| autoFocus      | boolean                  |           | get focus when mounts                                    |
| disabled       | boolean                  | false     | whether switch is disabled                               |
| loadingIcon    | React.ReactNode          |           | specific the extra node. generally used in loading icon. |

## install

[![rc-switch](https://nodei.co/npm/rc-switch.png)](https://npmjs.org/package/rc-switch)

## Usage

```js
import ReactDOM from 'react-dom';
import Switch from 'rc-switch';

ReactDOM.render(<Switch />, container);
```

## Development

```
npm install
npm start
```

Online demo: http://react-component.github.io/switch/examples/

## License

rc-switch is released under the MIT license.
