import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import velocity from 'velocity-animate';
import { toArrayChildren, findChildInChildrenByKey, mergeChildren } from './utils';

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

  performEnter(key, i) {
    let node = findDOMNode(this.refs[key]);
    if (!node) {
      return;
    }
    node.style.visibility = 'hidden';
    velocity(node, {
      opacity: [1, 0],
      translateX: [0, 30],
      display: 'none'
    }, {
      delay: this.props.interval * i + this.props.delay,
      duration: this.props.duration,
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
    velocity(findDOMNode(this.refs[key]), {
      opacity: [0, 1],
      translateX: [30, 0]
    }, {
      delay: this.props.interval * (this.keysToLeave.length - i) + this.props.delay,
      duration: this.props.duration,
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

QueueAnim.propTypes = {
  interval: React.PropTypes.number,
  duration: React.PropTypes.number,
  delay: React.PropTypes.number
};

QueueAnim.defaultProps = {
  interval: 30,
  duration: 500,
  delay: 0
};

export default QueueAnim;
