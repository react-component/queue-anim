import React from 'react';
import { findDOMNode } from 'react-dom';
import velocity from 'velocity-animate';

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
      childenShow: {},
    };

    [
      'performEnter',
      'performLeave',
      'leaveCallback',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  performEnter(key, i) {
    if (!this.refs[key]) {
      return;
    }
    findDOMNode(this.refs[key]).style.visibility = 'hidden';
    velocity(findDOMNode(this.refs[key]), {
      opacity: [1, 0],
      translateX: [0, 30],
      display: 'none'
    }, {
      delay: 30 * i,
      duration: 500,
      visibility: 'visible',
      begin: () => {
        let childenShow = this.state.childenShow;
        childenShow[key] = true;
        this.setState({
          childenShow: childenShow
        });
      }
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
      delay: 200 * (this.keysToLeave.length - i),
      duration: 500,
      display: 'none',
      complete: this.leaveCallback
    });
    if (this.keysToLeave.indexOf(key) >= 0) {
      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
    }
  }

  leaveCallback() {
    const currentChildren = toArrayChildren(this.props.children);
    this.setState({
      children: currentChildren
    });
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
    return <span>{childrenToRender}</span>;
  }
}

export default QueueAnim;

function toArrayChildren(children) {
  const ret = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  let ret = null;
  if (children) {
    children.forEach((c) => {
      if (ret) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  let ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  const nextChildrenPending = {};
  let pendingChildren = [];
  prev.forEach((c) => {
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(c);
    }
  });

  next.forEach((c) => {
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
  });

  ret = ret.concat(pendingChildren);
  return ret;
}
