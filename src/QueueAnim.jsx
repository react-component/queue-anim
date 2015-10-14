import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import velocity from 'velocity-animate';
import {
  toArrayChildren,
  findChildInChildrenByKey,
  mergeChildren,
  transformArguments,
} from './utils';
import AnimTypes from './animTypes';

class QueueAnim extends React.Component {
  constructor(props) {
    super(...arguments);

    this.keysToEnter = [];
    this.keysToLeave = [];

    // 第一次进入，默认进场
    let children = toArrayChildren(this.props.children);
    children.map(child => {
      if (!child || !child.key) {
        return;
      }
      this.keysToEnter.push(child.key);
    });

    this.state = {
      children,
      childenShow: {}
    };

    [
      'performEnter',
      'performLeave',
      'enterBegin',
      'leaveComplete',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  getVelocityEnterConfig() {
    if (this.props.animConfig) {
      return this.props.animConfig;
    }
    return AnimTypes[this.props.type];
  }

  getVelocityLeaveConfig() {
    let config = this.getVelocityEnterConfig();
    let ret = {};
    Object.keys(config).forEach((key) => {
      if (Array.isArray(config[key])) {
        ret[key] = Array.prototype.slice.call(config[key]).reverse();
      } else {
        ret[key] = config[key];
      }
    });
    return ret;
  }

  performEnter(key, i) {
    let node = findDOMNode(this.refs[key]);
    if (!node) {
      return;
    }
    let interval = transformArguments(this.props.interval)[0];
    let delay = transformArguments(this.props.delay)[0];
    let duration = transformArguments(this.props.duration)[0];
    node.style.visibility = 'hidden';
    velocity(node, this.getVelocityEnterConfig(), {
      delay: interval * i + delay,
      duration: duration,
      easing: this.props.ease,
      visibility: 'visible',
      begin: this.enterBegin.bind(this, key)
    });
    if (this.keysToEnter.indexOf(key) >= 0) {
      this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
    }
  }

  performLeave(key, i) {
    if (!this.refs[key]) {
      return;
    }
    let interval = transformArguments(this.props.interval)[1];
    let delay = transformArguments(this.props.delay)[1];
    let duration = transformArguments(this.props.duration)[1];
    velocity(findDOMNode(this.refs[key]), this.getVelocityLeaveConfig(), {
      delay: interval * (this.keysToLeave.length - i) + delay,
      duration: duration,
      easing: this.props.ease,
      display: 'none',
      complete: this.leaveComplete.bind(this, key)
    });
  }

  enterBegin(key) {
    let childenShow = this.state.childenShow;
    childenShow[key] = true;
    this.setState({
      childenShow: childenShow
    });
  }

  leaveComplete(key) {
    let childenShow = this.state.childenShow;
    childenShow[key] = false;
    const currentChildren = toArrayChildren(this.props.children);
    this.setState({
      children: currentChildren,
      childenShow: childenShow
    });
    if (this.keysToLeave.indexOf(key) >= 0) {
      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const keysToEnter = Array.prototype.slice.call(this.keysToEnter);
    keysToEnter.forEach(this.performEnter);
    const keysToLeave = Array.prototype.slice.call(this.keysToLeave);
    keysToLeave.forEach(this.performLeave);
  }

  componentWillReceiveProps(nextProps) {
    const nextChildren = toArrayChildren(nextProps.children);
    let currentChildren = this.state.children;
    let newChildren = mergeChildren(
      currentChildren,
      nextChildren
    );

    // need render to avoid update
    this.setState({
      children: newChildren,
    });

    nextChildren.forEach((c)=> {
      const key = c.key;
      const hasPrev = findChildInChildrenByKey(currentChildren, key);
      if (!hasPrev) {
        this.keysToEnter.push(key);
      }
    });

    currentChildren.forEach((c)=> {
      const key = c.key;
      const hasNext = findChildInChildrenByKey(nextChildren, key);
      if (!hasNext) {
        this.keysToLeave.push(key);
      }
    });
  }

  render() {
    const childrenToRender = toArrayChildren(this.state.children).map(child => {
      if (!child || !child.key) {
        return child;
      }
      return <div key={child.key} ref={child.key} {...child.props}>
        {this.state.childenShow[child.key] ? child : null}
      </div>;
    });
    return <div {...this.props}>{childrenToRender}</div>;
  }
}

const numberOrArray = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]);

QueueAnim.propTypes = {
  interval: numberOrArray,
  duration: numberOrArray,
  delay: numberOrArray,
  type: React.PropTypes.string,
  animConfig: React.PropTypes.object,
  ease: React.PropTypes.array
};

QueueAnim.defaultProps = {
  interval: 30,
  duration: 500,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: [0.165, 0.84, 0.44, 1]
};

export default QueueAnim;
