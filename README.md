# rc-queue-anim
---

Animate React Component in queue, thanks to [rc-animate](https://github.com/react-component/animate) and [enter-animation](https://github.com/jljsj33/enter-animation).

[![NPM version][npm-image]][npm-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![Total alerts][lgtm-alerts-image]][lgtm-alerts-url]
[![Language grade: JavaScript][lgtm-grade-image]][lgtm-grade-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-queue-anim.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-queue-anim
[github-actions-image]: https://github.com/react-component/queue-anim/workflows/CI/badge.svg
[github-actions-url]: https://github.com/react-component/queue-anim/actions
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/queue-anim/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/queue-anim/branch/master
[lgtm-alerts-image]: https://img.shields.io/lgtm/alerts/g/react-component/queue-anim.svg?logo=lgtm&logoWidth=18&style=flat-square
[lgtm-alerts-url]: https://lgtm.com/projects/g/react-component/queue-anim/alerts/
[lgtm-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/react-component/queue-anim.svg?logo=lgtm&logoWidth=18&style=flat-square
[lgtm-grade-url]: https://lgtm.com/projects/g/react-component/queue-anim/context:javascript
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-queue-anim.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-queue-anim

## Example
2.x: https://queue-anim.vercel.app/

1.x: http://react-component.github.io/queue-anim/examples/

![](https://t.alipayobjects.com/images/rmsweb/T12PliXjXgXXXXXXXX.gif)

## Usage

```js
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <QueueAnim>
    <div key="1">enter in queue</div>
    <div key="2">enter in queue</div>
    <div key="3">enter in queue</div>
  </QueueAnim>
, mountNode);
```

## Install

[![rc-queue-anim](https://nodei.co/npm/rc-queue-anim.png)](https://npmjs.org/package/rc-queue-anim)

## Browser Support

|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|
| --- | --- | --- | --- | --- |
| IE 10+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

### 1.7.x add childRefs and currentRef; 

```js
<QueueAnim 
  component={Row} 
  ref={(c) => {
    this.ref = c;
  }}
  onEnd={() => {
    // this..currentRef = <Row />
    // this..childRefs.a = <Col key="a">1212</Col>
  }}
>
  <Col key="a">1212</Col>
</QueueAnim>
```

## API

> You must provide the key attribute for all children of QueueAnim, children would not peform any animation without key.

| props      | type           | default | description    |
|------------|----------------|---------|----------------|
| type       | string / array | `right` | Animation Styles <br/>`alpha` `left` `right` `top` `bottom` `scale` `scaleBig` `scaleX` `scaleY`|
| animConfig | object / array | null    | Custom config, See below for more details [animConfig](#animConfig) |
| delay      | number / array | 0       | delay of animation |
| duration   | number / array | 450     | duration of animation  |
| interval   | number / array | 100      | interval of duration |
| leaveReverse | boolean      | false   | reverse animation order at leave |
| ease       | string / array | `easeOutQuart` | animation easing config like `'ease'`, `['easeIn', 'easeOut']`, `[[.42,0,.58,1]`, [.42,0,.58,1]]: [more](http://easings.net/en) |
| appear     | boolean        |  true   | whether support appear anim |
| component  | string / React.Element | `div` | component tag |
| componentProps | Object | null | component is React.Element, component tag props |
| animatingClassName | array | `['queue-anim-entering', 'queue-anim-leaving']` | className to every element of animating |
| forcedReplay | boolean | false | `leave` animation moment trigger `enter`, forced replay. |
| onEnd      | function      |   null    |  animation end callback({ key, type }), type: `enter` or `leave` |

> Above props support array format, like `['left', 'top']`, the secord item is leave config. [Demo](http://react-component.github.io/queue-anim/examples/enter-leave.html)

### animConfig

**Data fall into three categories：**

- Custom set start: `{ opacity:[1, 0] }` ；
<br/> default；
<br/>type: `{ opacity: Array<end, start> }`；
<br/>leave automatic reverse: `{ opacity: Array<start, end> }`；

- Custom: `{ opacity: 0 }`；
<br/> Start position is not set。

- Array: `[{ opacity:[1, 0] }, { opacity:[1, 0] }]`；
<br/> type: `[{ opacity: Array<end, start> }, { opacity: Array<start, end>}]`

## Development

```
npm install
npm start
```
