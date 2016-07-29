import React, { createElement, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';

const _ease = {
  easeInElastic: (_p, o, t) => {
    let p = _p;
    const _p1 = o >= 1 ? o : 1;
    const _p2 = (t || 1) / (o < 1 ? o : 1);
    const _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
    return -(_p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - _p3) * _p2));
  },
  easeOutElastic: (p, o, t) => {
    const _p1 = o >= 1 ? o : 1;
    const _p2 = (t || 1) / (o < 1 ? o : 1);
    const _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
    return _p1 * Math.pow(2, -10 * p) * Math.sin((p - _p3) * _p2) + 1;
  },
  easeInOutElastic: (_p, o, t) => {
    let p = _p;
    const _p1 = o >= 1 ? o : 1;
    const _p2 = (t || 1) / (o < 1 ? o : 1);
    const _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
    p *= 2;
    return p < 1 ? -0.5 * (_p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - _p3) * _p2)) :
    _p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - _p3) * _p2) * 0.5 + 1;
  },
  easeInBounce: (_p) => {
    let p = _p;
    const __p = 1 - p;
    if (__p < 1 / 2.75) {
      return 1 - (7.5625 * p * p);
    } else if (p < 2 / 2.75) {
      return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
    } else if (p < 2.5 / 2.75) {
      return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
    }
    return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
  },
  easeOutBounce: (_p) => {
    let p = _p;
    if (p < 1 / 2.75) {
      return 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    }
    return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  },
  easeInOutBounce: (_p) => {
    let p = _p;
    const invert = (p < 0.5);
    if (invert) {
      p = 1 - (p * 2);
    } else {
      p = (p * 2) - 1;
    }
    if (p < 1 / 2.75) {
      p = 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }
    return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
  },
};

let velocity;
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  // only load velocity on the client
  velocity = require('velocity-animate');
  Object.keys(_ease).forEach(key => {
    if (velocity.Easings) {
      velocity.Easings[key] = _ease[key];
    }
  });
} else {
  // provide a velocity stub for the server
  velocity = function velocityServerDummy() {
    const callback = arguments[arguments.length - 1];
    // call after stack flushes
    // in case you app depends on the asyncron nature of this function
    setImmediate(() =>
      callback()
    );
  };
}

import {
  toArrayChildren,
  findChildInChildrenByKey,
  mergeChildren,
  transformArguments,
  getChildrenFromProps,
  assignChild,
  checkStyleName,
} from './utils';
import AnimTypes from './animTypes';
const BackEase = {
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};

const placeholderKeyPrefix = 'ant-queue-anim-placeholder-';

const noop = () => {
};

class QueueAnim extends React.Component {
  constructor() {
    super(...arguments);

    this.keysToEnter = [];
    this.keysToLeave = [];
    this.keysAnimating = [];
    this.placeholderTimeoutIds = {};

    // 第一次进入，默认进场
    const children = toArrayChildren(getChildrenFromProps(this.props));
    children.forEach(child => {
      if (!child || !child.key) {
        return;
      }
      this.keysToEnter.push(child.key);
    });

    this.originalChildren = toArrayChildren(getChildrenFromProps(this.props));

    this.state = {
      children,
      childrenShow: {},
    };

    [
      'performEnter',
      'performLeave',
      'enterBegin',
      'leaveComplete',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillReceiveProps(nextProps) {
    const nextChildren = toArrayChildren(nextProps.children);
    const currentChildren = this.originalChildren;
    const newChildren = mergeChildren(
      currentChildren,
      nextChildren
    );

    const childrenShow = !newChildren.length ? {} : this.state.childrenShow;
    // 在出场没结束时，childrenShow 里的值将不会清除。再触发进场时， childrenShow 里的值是保留着的, 设置了 enterForcedRePlay 将重新播放进场。
    this.keysToLeave.forEach(key => {
      // 将所有在出场里的停止掉。避免间隔性出现
      // 因为进场是用的间隔性进入，这里不做 stop 处理将会在这间隔里继续出场的动画。。
      const node = findDOMNode(this.refs[key]);
      velocity(node, 'stop');
      if (nextProps.enterForcedRePlay) {
        // 清掉所有出场的。
        delete childrenShow[key];
      }
    });

    this.keysToEnter = [];
    this.keysToLeave = [];
    this.keysAnimating = [];

    // need render to avoid update
    this.setState({
      childrenShow,
      children: newChildren,
    });

    nextChildren.forEach((c) => {
      if (!c) {
        return;
      }
      const key = c.key;
      const hasPrev = findChildInChildrenByKey(currentChildren, key);
      if (!hasPrev && key) {
        this.keysToEnter.push(key);
      }
    });

    currentChildren.forEach((c) => {
      if (!c) {
        return;
      }
      const key = c.key;
      const hasNext = findChildInChildrenByKey(nextChildren, key);
      if (!hasNext && key) {
        this.keysToLeave.push(key);
      }
    });
  }

  componentDidUpdate() {
    this.originalChildren = toArrayChildren(getChildrenFromProps(this.props));
    const keysToEnter = Array.prototype.slice.call(this.keysToEnter);
    const keysToLeave = Array.prototype.slice.call(this.keysToLeave);
    if (this.keysAnimating.length === 0) {
      this.keysAnimating = keysToEnter.concat(keysToLeave);
    }
    keysToEnter.forEach(this.performEnter);
    keysToLeave.forEach(this.performLeave);
  }

  componentWillUnmount() {
    [].concat(this.keysToEnter, this.keysToLeave, this.keysAnimating).forEach(key =>
      this.refs[key] && velocity(findDOMNode(this.refs[key]), 'stop')
    );
    Object.keys(this.placeholderTimeoutIds).forEach(key => {
      clearTimeout(this.placeholderTimeoutIds[key]);
    });
    this.keysToEnter = [];
    this.keysToLeave = [];
    this.keysAnimating = [];
  }

  getVelocityConfig(index, ...args) {
    if (this.props.animConfig) {
      return transformArguments(this.props.animConfig, ...args)[index];
    }
    return AnimTypes[transformArguments(this.props.type, ...args)[index]];
  }

  getVelocityEnterConfig(...args) {
    return this.getVelocityConfig(0, ...args);
  }

  getVelocityLeaveConfig(...args) {
    const config = this.getVelocityConfig(1, ...args);
    const ret = {};
    Object.keys(config).forEach((key) => {
      if (Array.isArray(config[key])) {
        ret[key] = Array.prototype.slice.call(config[key]).reverse();
      } else {
        ret[key] = config[key];
      }
    });
    return ret;
  }

  getVelocityEasing(...args) {
    return transformArguments(this.props.ease, ...args).map((easeName) => {
      if (typeof easeName === 'string') {
        return BackEase[easeName] || easeName;
      }
    });
  }

  getInitAnimType = (node, velocityConfig) => {
    /*
     * enterForcedRePlay 为 false 时:
     * 强行结束后，获取当前 dom 里是否有 data 里的 key 值，
     * 如果有，出场开始启动为 dom 里的值
     * 而不是 animTypes 里的初始值，如果是初始值将会跳动。
     */
    const data = { ...assignChild(velocityConfig) };
    const transformsBase = velocity && velocity.prototype.constructor &&
      velocity.prototype.constructor.CSS.Lists.transformsBase || [];
    const setPropertyValue = velocity && velocity.prototype.constructor &&
      velocity.prototype.constructor.CSS.setPropertyValue || noop;
    const getUnitType = velocity && velocity.prototype.constructor &&
      velocity.prototype.constructor.CSS.Values.getUnitType || noop;
    const nodeStyle = node.style;
    Object.keys(data).forEach(dataKey => {
      let cssName = dataKey;
      if (transformsBase.indexOf(dataKey) >= 0) {
        cssName = 'transform';
        const transformString = nodeStyle[checkStyleName(cssName)];
        if (transformString && transformString !== 'none') {
          if (transformString.match(dataKey)) {
            const rep = new RegExp(`^.*${dataKey}\\(([^\\)]+?)\\).*`, 'i');
            const transformData = transformString.replace(rep, '$1');
            data[dataKey][1] = parseFloat(transformData);
          }
        }
      } else if (nodeStyle[dataKey] && parseFloat(nodeStyle[dataKey])) {
        data[dataKey][1] = parseFloat(nodeStyle[dataKey]);
      }
      // 先把初始值设进 style 里。免得跳动；把下面的设置放到这里。
      setPropertyValue(node, cssName, `${data[dataKey][1]}${getUnitType(dataKey)}`);
    });
    return data;
  };

  performEnter(key, i) {
    const interval = transformArguments(this.props.interval, key, i)[0];
    const delay = transformArguments(this.props.delay, key, i)[0];
    this.placeholderTimeoutIds[key] = setTimeout(
      this.performEnterBegin.bind(this, key, i),
      interval * i + delay
    );
    if (this.keysToEnter.indexOf(key) >= 0) {
      this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
    }
  }

  performEnterBegin(key, i) {
    const childrenShow = this.state.childrenShow;
    childrenShow[key] = true;
    this.setState({ childrenShow }, this.realPerformEnter.bind(this, key, i));
  }

  realPerformEnter(key, i) {
    const node = findDOMNode(this.refs[key]);
    if (!node) {
      return;
    }
    const duration = transformArguments(this.props.duration, key, i)[0];
    velocity(node, 'stop');
    const data = this.props.enterForcedRePlay ? this.getVelocityEnterConfig(key, i) :
      this.getInitAnimType(node, this.getVelocityEnterConfig(key, i));
    if (this.props.enterForcedRePlay) {
      node.style.visibility = 'hidden';
    }
    velocity(node, data, {
      duration,
      easing: this.getVelocityEasing(key, i)[0],
      visibility: 'visible',
      begin: this.enterBegin.bind(this, key),
      complete: this.enterComplete.bind(this, key),
    });
  }

  performLeave(key, i) {
    clearTimeout(this.placeholderTimeoutIds[key]);
    delete this.placeholderTimeoutIds[key];
    const node = findDOMNode(this.refs[key]);
    if (!node) {
      return;
    }
    const interval = transformArguments(this.props.interval, key, i)[1];
    const delay = transformArguments(this.props.delay, key, i)[1];
    const duration = transformArguments(this.props.duration, key, i)[1];
    const order = this.props.leaveReverse ? (this.keysToLeave.length - i - 1) : i;
    velocity(node, 'stop');
    node.style.visibility = 'visible';
    const data = this.getInitAnimType(node, this.getVelocityLeaveConfig(key, i));
    velocity(node, data, {
      delay: interval * order + delay,
      duration,
      easing: this.getVelocityEasing(key, i)[1],
      begin: this.leaveBegin.bind(this),
      complete: this.leaveComplete.bind(this, key),
    });
  }

  enterBegin(key, elements) {
    elements.forEach((elem) => {
      const animatingClassName = this.props.animatingClassName;
      elem.className = elem.className.replace(animatingClassName[1], '');
      if (elem.className.indexOf(animatingClassName[0]) === -1) {
        elem.className += (` ${animatingClassName[0]}`);
      }
    });
  }

  enterComplete(key, elements) {
    if (this.keysAnimating.indexOf(key) >= 0) {
      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
    }
    elements.forEach((elem) => {
      elem.className = elem.className.replace(this.props.animatingClassName[0], '').trim();
    });
  }

  leaveBegin(elements) {
    elements.forEach((elem) => {
      const animatingClassName = this.props.animatingClassName;
      elem.className = elem.className.replace(animatingClassName[0], '');
      if (elem.className.indexOf(animatingClassName[1]) === -1) {
        elem.className += (` ${animatingClassName[1]}`);
      }
    });
  }

  leaveComplete(key, elements) {
    if (this.keysAnimating.indexOf(key) < 0) {
      return;
    }
    this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
    const childrenShow = this.state.childrenShow;
    childrenShow[key] = false;
    if (this.keysToLeave.indexOf(key) >= 0) {
      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
    }
    const needLeave = this.keysToLeave.some(c => childrenShow[c]);
    if (!needLeave) {
      const currentChildren = toArrayChildren(getChildrenFromProps(this.props));
      this.setState({
        children: currentChildren,
        childrenShow,
      });
    }
    elements.forEach((elem) => {
      elem.className = elem.className.replace(this.props.animatingClassName[1], '').trim();
    });
  }

  render() {
    const childrenToRender = toArrayChildren(this.state.children).map(child => {
      if (!child || !child.key) {
        return child;
      }
      return this.state.childrenShow[child.key] ? cloneElement(child, {
        ref: child.key,
        key: child.key,
      }) : createElement('div', {
        ref: placeholderKeyPrefix + child.key,
        key: placeholderKeyPrefix + child.key,
      });
    });
    const { ...tagProps } = this.props;
    [
      'component',
      'interval',
      'duration',
      'delay',
      'type',
      'animConfig',
      'ease',
      'leaveReverse',
      'animatingClassName',
      'enterForcedRePlay',
    ].forEach(key => delete tagProps[key]);
    return createElement(this.props.component, { ...tagProps }, childrenToRender);
  }
}

const numberOrArray = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]);
const stringOrArray = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]);
const objectOrArray = React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]);
const funcOrString = React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]);
const funcOrStringOrArray = React.PropTypes.oneOfType([React.PropTypes.func, stringOrArray]);
const funcOrObjectOrArray = React.PropTypes.oneOfType([React.PropTypes.func, objectOrArray]);
const funcOrNumberOrArray = React.PropTypes.oneOfType([React.PropTypes.func, numberOrArray]);

QueueAnim.propTypes = {
  component: funcOrString,
  interval: numberOrArray,
  duration: funcOrNumberOrArray,
  delay: funcOrNumberOrArray,
  type: funcOrStringOrArray,
  animConfig: funcOrObjectOrArray,
  ease: funcOrStringOrArray,
  leaveReverse: React.PropTypes.bool,
  enterForcedRePlay: React.PropTypes.bool,
  animatingClassName: React.PropTypes.array,
};

QueueAnim.defaultProps = {
  component: 'div',
  interval: 100,
  duration: 450,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: 'easeOutQuart',
  leaveReverse: false,
  enterForcedRePlay: false,
  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving'],
};

export default QueueAnim;
