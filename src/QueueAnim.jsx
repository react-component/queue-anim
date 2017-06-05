import React, { createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import TweenOne, { ticker } from 'rc-tween-one';

import {
  toArrayChildren,
  findChildInChildrenByKey,
  mergeChildren,
  transformArguments,
  getChildrenFromProps,
} from './utils';
import AnimTypes from './animTypes';

const noop = () => {
};

class QueueAnim extends React.Component {
  constructor() {
    super(...arguments);

    this.isEnterKey = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
    // 记录转换成 TweenOne 组件。
    this.saveTweenTag = {};
    this.keysToEnterPaused = {};
    this.placeholderTimeoutIds = {};

    // 第一次进入，默认进场
    const children = toArrayChildren(getChildrenFromProps(this.props));
    const childrenShow = {};
    children.forEach(child => {
      if (!child || !child.key) {
        return;
      }
      if (this.props.appear) {
        this.keysToEnter.push(child.key);
      } else {
        childrenShow[child.key] = true;
      }
    });
    this.keysToEnterToCallback = [...this.keysToEnter];
    this.originalChildren = toArrayChildren(getChildrenFromProps(this.props));
    this.state = {
      children,
      childrenShow,
    };
  }

  componentDidMount() {
    if (this.props.appear) {
      this.componentDidUpdate();
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextChildren = toArrayChildren(nextProps.children);
    const currentChildren = this.originalChildren;
    const newChildren = mergeChildren(
      currentChildren,
      nextChildren
    );

    const childrenShow = !newChildren.length ? {} : this.state.childrenShow;
    this.keysToEnterPaused = {};
    // 在出场没结束时，childrenShow 里的值将不会清除。再触发进场时， childrenShow 里的值是保留着的, 设置了 enterForcedRePlay 将重新播放进场。
    this.keysToLeave.forEach(key => {
      // 将所有在出场里的停止掉。避免间隔性出现
      // 进场是用的间隔性进入，这里不做 stop 处理将会在这间隔里继续出场的动画。。
      this.keysToEnterPaused[key] = true;
      if (nextProps.enterForcedRePlay) {
        // 清掉所有出场的。
        delete childrenShow[key];
      }
    });

    this.keysToEnter = [];
    this.keysToLeave = [];

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
      // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
      if (this.saveTweenTag[key]) {
        this.saveTweenTag[key] = React.cloneElement(this.saveTweenTag[key], {}, c);
      }
    });

    currentChildren.forEach((c) => {
      if (!c) {
        return;
      }
      const key = c.key;
      const hasNext = findChildInChildrenByKey(nextChildren, key);
      if (!hasNext && key) {
        // 出场时删出动画标签，render 时重新生成。
        delete this.saveTweenTag[key];
        this.keysToLeave.push(key);
      }
    });
    this.keysToEnterToCallback = [...this.keysToEnter];
  }

  componentDidUpdate() {
    this.originalChildren = toArrayChildren(getChildrenFromProps(this.props));
    const keysToEnter = [...this.keysToEnter];
    const keysToLeave = [...this.keysToLeave];
    keysToEnter.forEach(this.performEnter);
    keysToLeave.forEach(this.performLeave);
  }

  componentWillUnmount() {
    Object.keys(this.placeholderTimeoutIds).forEach(key => {
      ticker.clear(this.placeholderTimeoutIds[key]);
    });
    this.keysToEnter = [];
    this.keysToLeave = [];
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

  getTweenEnterData = (key, i) => {
    const props = this.props;
    let startAnim = this.getAnimData(props, key, i, 0, 1);
    const enterAnim = this.getAnimData(props, key, i, 0, 0);
    startAnim = props.enterForcedRePlay || !this.isEnterKey[key] ? startAnim : {};
    let ease = transformArguments(props.ease, key, i)[0];
    const duration = transformArguments(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(num => num * 100);
      ease = TweenOne.easing.path(
        `M0,100C${ease[0]},${100 - ease[1]},${ease[2]},${100 - ease[3]},100,0`,
        { lengthPixel: duration / 16.6667 });
    }

    return [
      { duration: 0, ...startAnim },
      {
        onStart: this.enterBegin.bind(this, key),
        onComplete: this.enterComplete.bind(this, key),
        duration,
        ease,
        ...enterAnim,
      },
    ];
  }

  getTweenLeaveData = (key, i) => {
    const props = this.props;
    let startAnim = this.getAnimData(props, key, i, 1, 0);
    const leaveAnim = this.getAnimData(props, key, i, 1, 1);
    startAnim = props.enterForcedRePlay || !this.isEnterKey[key] ? startAnim : {};
    const interval = transformArguments(props.interval, key, i)[1];
    const delay = transformArguments(props.delay, key, i)[1];
    const order = props.leaveReverse ? (this.keysToLeave.length - i - 1) : i;
    let ease = transformArguments(props.ease, key, i)[0];
    const duration = transformArguments(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(num => num * 100);
      ease = TweenOne.easing.path(
        `M0,100C${ease[0]},${100 - ease[1]},${ease[2]},${100 - ease[3]},100,0`,
        { lengthPixel: duration / 16.6667 });
    }
    return [
      { duration: 0, ...startAnim },
      {
        onStart: this.leaveBegin.bind(this, key),
        onComplete: this.leaveComplete.bind(this, key),
        duration: transformArguments(props.duration, key, i)[0],
        ease,
        delay: interval * order + delay,
        ...leaveAnim,
      },
    ];
  }

  getAnimData = (props, key, i, enterOrLeave, startOrEnd) => {
    /*
     * transformArguments 第一个为 enter, 第二个为 leave；
     * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
     * 用 tween-one 的数组来实现老的动画逻辑。。。
     */
    return props.animConfig ?
      this.getTweenAnimConfig(
        transformArguments(props.animConfig, key, i)[enterOrLeave], startOrEnd
      ) :
      this.getTweenType(transformArguments(props.type, key, i)[enterOrLeave], startOrEnd);
  }

  getChildrenToRender = child => {
    if (!child || !child.key) {
      return child;
    }
    const key = child.key;
    if ((this.keysToLeave.indexOf(key) >= 0 && this.state.childrenShow[key])
      || this.state.childrenShow[key]) {
      const animation = this.keysToLeave.indexOf(key) >= 0 ?
        this.getTweenLeaveData(key, this.keysToLeave.indexOf(key)) :
        this.keysToEnterToCallback.indexOf(key) >= 0
        && this.getTweenEnterData(key, this.keysToEnterToCallback.indexOf(key)) || null;
      const props = {
        key,
        component: null,
        animation,
      };
      if (!this.saveTweenTag[key]) {
        this.saveTweenTag[key] = createElement(TweenOne, props, child);
      } else {
        this.saveTweenTag[key] = cloneElement(this.saveTweenTag[key], props);
      }
      if (this.keysToEnterPaused[key]
        && !(this.keysToLeave.indexOf(key) >= 0 && this.state.childrenShow[key])) {
        return cloneElement(this.saveTweenTag[key], { paused: true });
      }
      return this.saveTweenTag[key];
    }
    return null;
  };

  performEnter = (key, i) => {
    const interval = transformArguments(this.props.interval, key, i)[0];
    const delay = transformArguments(this.props.delay, key, i)[0];
    this.placeholderTimeoutIds[key] = ticker.timeout(
      this.performEnterBegin.bind(this, key),
      interval * i + delay
    );
    if (this.keysToEnter.indexOf(key) >= 0) {
      this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
    }
  }

  performEnterBegin = (key) => {
    const childrenShow = this.state.childrenShow;
    childrenShow[key] = true;
    delete this.keysToEnterPaused[key];
    this.setState({ childrenShow });
  }

  performLeave = (key) => {
    ticker.clear(this.placeholderTimeoutIds[key]);
    delete this.placeholderTimeoutIds[key];
  }

  enterBegin = (key, e) => {
    const elem = e.target;
    const animatingClassName = this.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[1], '');
    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className += (`${elem.className ? ' ' : ''}${animatingClassName[0]}`);
    }
    this.isEnterKey[key] = true;
  }

  enterComplete = (key, e) => {
    if (this.keysToEnterPaused[key]) {
      return;
    }
    const elem = e.target;
    elem.className = elem.className.replace(this.props.animatingClassName[0], '').trim();
    this.props.onEnd({ key, type: 'enter' });
  }

  leaveBegin = (key, e) => {
    const elem = e.target;
    const animatingClassName = this.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[0], '');
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className += (` ${animatingClassName[1]}`);
    }
  }

  leaveComplete = (key, e) => {
    // 切换时同时触发 onComplete。 手动跳出。。。
    if (this.keysToEnterToCallback.indexOf(key) >= 0) {
      return;
    }
    const childrenShow = this.state.childrenShow;
    delete childrenShow[key];
    if (this.keysToLeave.indexOf(key) >= 0) {
      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
      delete this.saveTweenTag[key];
      delete this.isEnterKey[key];
    }
    const needLeave = this.keysToLeave.some(c => childrenShow[c]);
    if (!needLeave) {
      const currentChildren = toArrayChildren(getChildrenFromProps(this.props));
      this.setState({
        children: currentChildren,
        childrenShow,
      });
    }
    const elem = e.target;
    elem.className = elem.className.replace(this.props.animatingClassName[1], '').trim();
    this.props.onEnd({ key, type: 'leave' });
  }

  render() {
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
      'onEnd',
      'appear',
    ].forEach(key => delete tagProps[key]);
    const childrenToRender = toArrayChildren(this.state.children).map(this.getChildrenToRender);
    return createElement(this.props.component, { ...tagProps }, childrenToRender);
  }
}

QueueAnim.propTypes = {
  component: PropTypes.any,
  interval: PropTypes.any,
  duration: PropTypes.any,
  delay: PropTypes.any,
  type: PropTypes.any,
  animConfig: PropTypes.any,
  ease: PropTypes.any,
  leaveReverse: PropTypes.bool,
  enterForcedRePlay: PropTypes.bool,
  animatingClassName: PropTypes.array,
  onEnd: PropTypes.func,
  appear: PropTypes.bool,
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
  onEnd: noop,
  appear: true,
};

export default QueueAnim;
