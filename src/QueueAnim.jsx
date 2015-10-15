import React, { createElement, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import velocity from 'velocity-animate';
import {
  toArrayChildren,
  findChildInChildrenByKey,
  mergeChildren,
  transformArguments,
  getChildrenFromProps,
} from './utils';
import AnimTypes from './animTypes';

const BackEase = {
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};

class QueueAnim extends React.Component {
  constructor() {
    super(...arguments);

    this.keysToEnter = [];
    this.keysToLeave = [];
    this.keysAnimating = [];

    // 第一次进入，默认进场
    const children = toArrayChildren(getChildrenFromProps(this.props));
    children.map(child => {
      if (!child || !child.key) {
        return;
      }
      this.keysToEnter.push(child.key);
    });

    this.state = {
      children,
      childenShow: {},
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
    const currentChildren = this.state.children;
    const newChildren = mergeChildren(
      currentChildren,
      nextChildren
    );

    // need render to avoid update
    this.setState({
      children: newChildren,
    });

    nextChildren.forEach((c)=> {
      const key = c.key;
      if (this.keysAnimating.indexOf(c.key) >= 0) {
        return;
      }
      const hasPrev = findChildInChildrenByKey(currentChildren, key);
      if (!hasPrev) {
        this.keysToEnter.push(key);
      }
    });

    currentChildren.forEach((c)=> {
      const key = c.key;
      if (this.keysAnimating.indexOf(key) >= 0) {
        return;
      }
      const hasNext = findChildInChildrenByKey(nextChildren, key);
      if (!hasNext) {
        this.keysToLeave.push(key);
      }
    });
  }

  componentDidUpdate() {
    const keysToEnter = Array.prototype.slice.call(this.keysToEnter);
    const keysToLeave = Array.prototype.slice.call(this.keysToLeave);
    if (this.keysAnimating.length === 0) {
      this.keysAnimating = keysToEnter.concat(keysToLeave);
    }
    keysToEnter.forEach(this.performEnter);
    keysToLeave.forEach(this.performLeave);
  }

  componentWillUnmount() {
    this.keysAnimating.forEach((key) => {
      velocity(findDOMNode(this.refs[key]), 'stop');
    });
  }

  getVelocityConfig(index) {
    if (this.props.animConfig) {
      return transformArguments(this.props.animConfig)[index];
    }
    return AnimTypes[transformArguments(this.props.type)[index]];
  }

  getVelocityEnterConfig() {
    return this.getVelocityConfig(0);
  }

  getVelocityLeaveConfig() {
    const config = this.getVelocityConfig(1);
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

  render() {
    const childrenToRender = toArrayChildren(this.state.children).map(child => {
      if (!child || !child.key) {
        return child;
      }
      if (typeof child.type === 'function') {
        return (
          <div ref={child.key} key={child.key} {...child.props}>
            {this.state.childenShow[child.key] ? child : null}
          </div>
        );
      }
      return cloneElement(child, {
        ref: child.key,
      }, this.state.childenShow[child.key] ? child.props.children : null);
    });
    return createElement(this.props.component, this.props, childrenToRender);
  }

  getVelocityEasing() {
    return transformArguments(this.props.ease).map((easeName) => {
      if (typeof easeName === 'string') {
        return BackEase[easeName] || easeName;
      }
    });
  }

  performEnter(key, i) {
    const node = findDOMNode(this.refs[key]);
    if (!node) {
      return;
    }
    const interval = transformArguments(this.props.interval)[0];
    const delay = transformArguments(this.props.delay)[0];
    const duration = transformArguments(this.props.duration)[0];
    node.style.visibility = 'hidden';
    velocity(node, this.getVelocityEnterConfig('enter'), {
      delay: interval * i + delay,
      duration: duration,
      easing: this.getVelocityEasing()[0],
      visibility: 'visible',
      begin: this.enterBegin.bind(this, key),
      complete: this.enterComplete.bind(this, key),
    });
    if (this.keysToEnter.indexOf(key) >= 0) {
      this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
    }
  }

  performLeave(key, i) {
    if (!this.refs[key]) {
      return;
    }
    const interval = transformArguments(this.props.interval)[1];
    const delay = transformArguments(this.props.delay)[1];
    const duration = transformArguments(this.props.duration)[1];
    velocity(findDOMNode(this.refs[key]), this.getVelocityLeaveConfig('leave'), {
      delay: interval * (this.keysToLeave.length - i) + delay,
      duration: duration,
      easing: this.getVelocityEasing()[1],
      display: 'none',
      complete: this.leaveComplete.bind(this, key),
    });
  }

  enterBegin(key) {
    const childenShow = this.state.childenShow;
    childenShow[key] = true;
    this.setState({
      childenShow: childenShow,
    });
  }

  enterComplete(key) {
    if (this.keysAnimating.indexOf(key) >= 0) {
      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
    }
  }

  leaveComplete(key) {
    const childenShow = this.state.childenShow;
    childenShow[key] = false;
    const currentChildren = toArrayChildren(getChildrenFromProps(this.props));
    this.setState({
      children: currentChildren,
      childenShow: childenShow,
    });
    if (this.keysToLeave.indexOf(key) >= 0) {
      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
    }
    if (this.keysAnimating.indexOf(key) >= 0) {
      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
    }
  }
}

const numberOrArray = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]);
const stringOrArray = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]);
const objectOrArray = React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]);
QueueAnim.propTypes = {
  component: React.PropTypes.string,
  interval: numberOrArray,
  duration: numberOrArray,
  delay: numberOrArray,
  type: stringOrArray,
  animConfig: objectOrArray,
  ease: stringOrArray,
};

QueueAnim.defaultProps = {
  component: 'div',
  interval: 30,
  duration: 500,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: [0.165, 0.84, 0.44, 1],
};

export default QueueAnim;
