import React from 'react';
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

  getVelocityEnterConfig() {
    if (this.props.animConfig) {
      return this.props.animConfig;
    }
    return AnimTypes[this.props.type];
  }

  getVelocityLeaveConfig() {
    const config = this.getVelocityEnterConfig();
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
      return (
        <div key={child.key} ref={child.key} {...child.props}>
          {this.state.childenShow[child.key] ? child : null}
        </div>
      );
    });
    return <div {...this.props}>{childrenToRender}</div>;
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
    velocity(node, this.getVelocityEnterConfig(), {
      delay: interval * i + delay,
      duration: duration,
      easing: this.props.ease,
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
    velocity(findDOMNode(this.refs[key]), this.getVelocityLeaveConfig(), {
      delay: interval * (this.keysToLeave.length - i) + delay,
      duration: duration,
      easing: this.props.ease,
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

QueueAnim.propTypes = {
  interval: numberOrArray,
  duration: numberOrArray,
  delay: numberOrArray,
  type: React.PropTypes.string,
  animConfig: React.PropTypes.object,
  ease: React.PropTypes.array,
};

QueueAnim.defaultProps = {
  interval: 30,
  duration: 500,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: [0.165, 0.84, 0.44, 1],
};

export default QueueAnim;
