import React, { createElement } from 'react';
// import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';

import {
  toArrayChildren,
  findChildInChildrenByKey,
  mergeChildren,
  transformArguments,
  getChildrenFromProps,
} from './utils';
import Css from './Css';
import AnimTypes from './animTypes';

class QueueAnim extends React.Component {
  constructor() {
    super(...arguments);
    this.keysToEnter = [];
    this.keysToLeave = [];
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
      oneEnterKey: {},
      enterComplete: {},
    };

    [
      'getTweenType',
      'performEnterAndLeave',
      'removeElement',
      'getStyle',
      'getTweenAnimConfig',
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

    this.keysToEnter = [];
    this.keysToLeave = [];

    // need render to avoid update
    this.setState({
      children: newChildren,
    });

    nextChildren.forEach((c)=> {
      if (!c) {
        return;
      }
      const key = c.key;
      const hasPrev = findChildInChildrenByKey(currentChildren, key);
      if (!hasPrev && key) {
        this.keysToEnter.push(key);
      }
    });

    currentChildren.forEach((c)=> {
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
    keysToEnter.forEach(this.performEnterAndLeave.bind(this, 0));
    keysToLeave.forEach(this.performEnterAndLeave.bind(this, 1));
  }

  componentWillUnmount() {
    if (this.originalChildren && this.originalChildren.length > 0) {
      Object.keys(this.placeholderTimeoutIds).forEach(key => {
        clearTimeout(this.placeholderTimeoutIds[key]);
      });
    }
  }

  getStyle(styleData) {
    const style = {};
    Object.keys(styleData).forEach(key=> {
      const css = styleData[key];
      const name = Css.isTransform(key);
      if (name === 'filter') {
        style[name] = Css.mergeStyle(style[name] || '', Css.getFilterParam(css, css, 1));
      } else if (name === 'transform') {
        style[name] = Css.mergeStyle(style[name] || '', Css.getParam(key, css, parseFloat(css)));
      } else {
        style[name] = css;
      }
    });
    return style;
  }

  getTweenType(type, num) {
    const data = AnimTypes[type];
    return this.getTweenAnimConfig(data, num);
  }

  getTweenAnimConfig(data, num) {
    const obj = {};
    Object.keys(data).forEach(key => {
      obj[key] = data[key][num];
    });
    return obj;
  }

  performEnterAndLeave(num, key, i) {
    clearTimeout(this.placeholderTimeoutIds[key]);
    delete this.placeholderTimeoutIds[key];
    const interval = transformArguments(this.props.interval, key, i)[num];
    const delay = transformArguments(this.props.delay, key, i)[num];
    if (num) {
      const order = this.props.leaveReverse ? (this.keysToLeave.length - 1) : i;
      this.placeholderTimeoutIds[key] = setTimeout(
        this.performLeaveBegin.bind(this, key),
        interval * order + delay
      );
      if (this.keysToLeave.indexOf(key) >= 0) {
        this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
      }
    } else {
      this.placeholderTimeoutIds[key] = setTimeout(
        this.performEnterBegin.bind(this, key),
        interval * i + delay
      );
      if (this.keysToEnter.indexOf(key) >= 0) {
        this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
      }
    }
  }

  performEnterBegin(key) {
    const childrenShow = this.state.childrenShow;
    childrenShow[key] = true;
    const oneEnterKey = this.state.oneEnterKey;
    oneEnterKey[key] = true;
    this.setState({ childrenShow, oneEnterKey });
  }

  performLeaveBegin(key) {
    const childrenShow = this.state.childrenShow;
    delete childrenShow[key];
    this.setState({ childrenShow });
  }

  enterComplete(key) {
    const enterComplete = this.state.enterComplete;
    enterComplete[key] = true;
    this.setState({
      enterComplete,
    });
  }

  removeElement(key) {
    const oneEnterKey = this.state.oneEnterKey;
    delete oneEnterKey[key];
    // const children = toArrayChildren(this.state.children).filter(child => child.key !== key);
    setTimeout(()=> {
      // 加setTimeout 是 tweenOne 的 bug, 呆会再改,,先用着;
      this.setState({ oneEnterKey });
    });
  }

  render() {
    // React.Children.toArray(this.state.children) key add .$
    const animatingClassName = this.props.animatingClassName;
    const childrenToRender = toArrayChildren(this.state.children).map((child, i) => {
      if (!child || !child.key) {
        return child;
      }
      const key = child.key;
      const enterStyle = this.getStyle(this.getTweenType(transformArguments(this.props.type, key, i)[0], 1));
      let className = child.className || '';
      className = className.replace(animatingClassName[0], '');
      className = className.replace(animatingClassName[1], '');
      const enterClassName = !this.state.enterComplete[key] ?
        `${className || ''} ${animatingClassName[0]}` :
      className || '';
      const enterAnim = this.props.animConfig ?
        this.getTweenAnimConfig(transformArguments(this.props.animConfig, key, i)[0], 0) :
        this.getTweenType(transformArguments(this.props.type, key, i)[0], 0);
      const enter = (<TweenOne
        key={key}
        component={child.type}
        {...child.props}
        animation={{
          duration: transformArguments(this.props.duration, key, i)[0],
          ease: transformArguments(this.props.ease, key, i)[0],
          onComplete: this.enterComplete.bind(this, key),
          ...enterAnim,
        }}
        style={{...child.props.style, ...enterStyle}}
        className={enterClassName.trim()}
      />);
      const leaveStyle = this.getStyle(this.getTweenType(transformArguments(this.props.type, key, i)[1], 0));
      const leaveClassName = `${className || ''} ${animatingClassName[1]}`;
      const leaveAnim = this.props.animConfig ?
        this.getTweenAnimConfig(transformArguments(this.props.animConfig, key, i)[1], 1) :
        this.getTweenType(transformArguments(this.props.type, key, i)[1], 1);
      const leave = (<TweenOne key={key}
        component={child.type}
        {...child.props}
        animation={{
          duration: transformArguments(this.props.duration, key, i)[1],
          ease: transformArguments(this.props.ease, key, i)[1],
          onComplete: this.removeElement.bind(this, key),
          ...leaveAnim,
        }}
        style={{...child.props.style, ...leaveStyle}}
        className={leaveClassName.trim()}
      />);
      const oneEnterOrEmpty = this.state.oneEnterKey[key] ? leave : null;
      return this.state.childrenShow[key] ? enter : oneEnterOrEmpty;
    });
    return createElement(this.props.component, this.props, childrenToRender);
  }

}

const numberOrArray = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]);
const stringOrArray = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]);
const objectOrArray = React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]);
const funcOrStringOrArray = React.PropTypes.oneOfType([React.PropTypes.func, stringOrArray]);
const funcOrObjectOrArray = React.PropTypes.oneOfType([React.PropTypes.func, objectOrArray]);
const funcOrNumberOrArray = React.PropTypes.oneOfType([React.PropTypes.func, numberOrArray]);
const stringOrFunc = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]);

QueueAnim.propTypes = {
  component: stringOrFunc,
  interval: numberOrArray,
  duration: funcOrNumberOrArray,
  delay: funcOrNumberOrArray,
  type: funcOrStringOrArray,
  animConfig: funcOrObjectOrArray,
  ease: funcOrStringOrArray,
  leaveReverse: React.PropTypes.bool,
  animatingClassName: React.PropTypes.array,
};

QueueAnim.defaultProps = {
  component: 'div',
  interval: 100,
  duration: 300,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: 'easeOutQuart',
  leaveReverse: false,
  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving'],
};

export default QueueAnim;
