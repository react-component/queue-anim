# rc-queue-anim
---

Animate React Component in queue, thanks to [rc-animate](https://github.com/react-component/animate) and [enter-animation](https://github.com/ant-design/enter-animation).

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/rc-queue-anim)](https://saucelabs.com/u/rc-queue-anim)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/rc-queue-anim.svg)](https://saucelabs.com/u/rc-queue-anim)

[npm-image]: http://img.shields.io/npm/v/rc-queue-anim.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-queue-anim
[travis-image]: https://img.shields.io/travis/react-component/queue-anim.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/queue-anim
[coveralls-image]: https://img.shields.io/coveralls/react-component/queue-anim.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/queue-anim?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/queue-anim.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/queue-anim
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-queue-anim.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-queue-anim


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/


online example: http://react-component.github.io/queue-anim/examples/



## install


[![rc-queue-anim](https://nodei.co/npm/rc-queue-anim.png)](https://npmjs.org/package/rc-queue-anim)


## Usage

```js
var QueueAnim = require('rc-queue-anim');
var React = require('react');
React.render(
<QueueAnim >
  <div key='1'>依次进入</div>
  <div key='2'>依次进入</div>
  <div key='3'>依次进入</div>
</QueueAnim>, container);
```

## API

|参数        |类型             |默认     |详细             |
|------------|----------------|---------|----------------|
| type       | string / array | `right` | 动画内置参数, <br/>`left` `right` `top` `bottom` `scale` `scaleFrom` `scaleX` `scaleY`|
| animConfig | object / array | null    | 配置动画参数, 如 `{opacity:[1, 0],translateY:[0, -30]}` 具体参考 [velocity](http://julian.com/research/velocity) 的写法|
| delay      | number / array | 0       | 整个动画的延时,以毫秒为单位 |
| duration   | number / array | 500     | 每个动画的时间,以毫秒为单位  |
| interval   | number / array | 30      | 每个动画的间隔时间,以毫秒为单位  |
| leaveReverse | boolean      | false   | 出场时是否倒放,从最后一个 dom 开始往上播放 |
| ease       | string / array | `easeOutQuart` | 动画的缓动函数,[查看详细](http://julian.com/research/velocity/#easing) |
| component  | string | `div` | QueueAnim 替换的标签名 |

> 当以上数据为Array时，`['enter', 'leave']` 第一个为 `enter` 数据, 第二个为 `leave` 数据


