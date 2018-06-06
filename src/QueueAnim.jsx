
import React, { createElement } from 'react';
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

const typeDefault = ['displayName', 'propTypes', 'getDefaultProps',
  'defaultProps', 'childContextTypes', 'contextTypes'];

class QueueAnim extends React.Component {

  static propTypes = {
    component: PropTypes.any,
    componentProps: PropTypes.object,
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

  static defaultProps = {
    component: 'div',
    componentProps: {},
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
  constructor(props) {
    super(props);
    /**
     * @param oneEnter
     * 记录第一次进入;
     */
    this.oneEnter = false;
    /**
     * @param tweenToEnter;
     * 记录强制切换时是否需要添加 animation;
     * 如 enter 后, leave -> enter，样式是没有发生变化，就不需要添加 animation 属性。
     */
    this.tweenToEnter = {};
    /**
     * @param leaveUnfinishedChild;
     * 记录多次切换，出场没完成动画的 key。
     */
    this.leaveUnfinishedChild = [];
    /**
     * @param saveTweenOneTag;
     * 记录 TweenOne 标签，在 leaveUnfinishedChild 里使用，残留的元素不需要考虑 props 的变更。
     */
    this.saveTweenOneTag = {};
    /**
     * @param unwantedStart;
     * 记录 animation 里是否需要 startAnim;
     * 修复进场时, 时间不准的问题；
     * -> 进: 需要；
     * -> 进 -> 进: 需要；
     * -> 进 -> 出: 不需要;
     * -> 进 -> 出 -> 进: 不需要;
     */
    this.unwantedStart = {};
    /**
     * @param keysToEnter;
     * 记录进场的 key;
     */
    this.keysToEnter = [];
    /**
     * @param keysToLeave;
     * 记录出场的 key;
     */
    this.keysToLeave = [];
    /**
     * @param keysToEnterPaused;
     * 记录在进入时是否处理暂停状态
     */
    this.keysToEnterPaused = {};
    /**
     * @param placeholderTimeoutIds;
     * 进场时 deley 的 timeout 记录;
     */
    this.placeholderTimeoutIds = {};
    // 第一次进入，默认进场
    const children = toArrayChildren(getChildrenFromProps(props));
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
    this.originalChildren = toArrayChildren(getChildrenFromProps(props));
    this.state = {
      children,
      childrenShow,
    };
  }

  componentDidMount() {
    if (this.props.appear) {
      this.componentDidUpdate();
    }
    this.oneEnter = true;
  }

  componentWillReceiveProps(nextProps) {
    const nextChildren = toArrayChildren(nextProps.children).filter(item => item);
    let currentChildren = this.originalChildren.filter(item => item);
    if (this.state.children.length) {
      /**
       * 多次刷新处理
       * 如果 state.children 里还有元素，元素还在动画，当前子级加回在出场的子级;
       */
      const leaveChild = this.state.children.filter(item =>
        item && this.keysToLeave.indexOf(item.key) >= 0
      );
      this.leaveUnfinishedChild = leaveChild.map(item => item.key);
      currentChildren = mergeChildren(currentChildren, leaveChild);
    }
    const newChildren = mergeChildren(
      currentChildren,
      nextChildren
    );

    const childrenShow = !newChildren.length ? {} : this.state.childrenShow;
    this.keysToEnterPaused = {};
    const emptyBool = !nextChildren.length
      && !currentChildren.length
      && this.state.children.length;
    /**
     * 在出场没结束时，childrenShow 里的值将不会清除。
     * 再触发进场时， childrenShow 里的值是保留着的, 设置了 enterForcedRePlay 将重新播放进场。
     */
    if (!emptyBool) {// 空子级状态下刷新不做处理
      const nextKeys = nextChildren.map(c => c.key);
      this.keysToLeave.forEach(key => {
        // 将所有在出场里的停止掉。避免间隔性出现
        if (nextKeys.indexOf(key) >= 0) {
          this.keysToEnterPaused[key] = true;
          currentChildren = currentChildren.filter(item => item.key !== key);
          if (nextProps.enterForcedRePlay) {
            // 清掉所有出场的。
            delete childrenShow[key];
          }
        }
      });
    }

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

  getTweenSingleConfig(data, num, enterOrLeave) {
    const obj = {};
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        obj[key] = data[key][num];
      } else if (!enterOrLeave && !num || enterOrLeave && num) {
        obj[key] = data[key];
      }
    });
    return obj;
  }

  getTweenAnimConfig(data, num, enterOrLeave) {
    if (Array.isArray(data)) {
      return data.map(item => {
        return this.getTweenSingleConfig(item, num, enterOrLeave);
      });
    }
    return this.getTweenSingleConfig(data, num, enterOrLeave);
  }

  getTweenData = (key, i, type) => {
    const props = this.props;
    const enterOrLeave = type === 'enter' ? 0 : 1;
    const start = type === 'enter' ? 1 : 0;
    const end = type === 'enter' ? 0 : 1;
    let startAnim = this.getAnimData(props, key, i, enterOrLeave, start);
    const animate = this.getAnimData(props, key, i, enterOrLeave, end);
    startAnim = type === 'enter' && (props.enterForcedRePlay
      || !this.unwantedStart[key]) ?
      startAnim : null;
    let ease = transformArguments(props.ease, key, i)[enterOrLeave];
    const duration = transformArguments(props.duration, key, i)[enterOrLeave];
    if (Array.isArray(ease)) {
      ease = ease.map(num => num * 100);
      ease = TweenOne.easing.path(
        `M0,100C${ease[0]},${100 - ease[1]},${ease[2]},${100 - ease[3]},100,0`,
        { lengthPixel: duration / 16.6667 });
    }
    return { startAnim, animate, ease, duration, isArray: Array.isArray(animate) };
  }

  getTweenSingleData = (key, startAnim, animate, ease, duration, delay, onStart, onComplete) => {
    const startLength = Object.keys(startAnim || {}).length;
    const animation = {
      onStart,
      onComplete,
      duration,
      delay,
      ease,
      ...animate,
    };
    const startAnimate = startLength ? { duration: 0, ...startAnim } : null;
    return { animation, startAnimate };
  }

  getTweenEnterOrLeaveData = (key, i, delay, type) => {
    let animateData = this.getTweenData(key, i, type);
    const startAnim = animateData.startAnim;
    const animate = animateData.animate;
    const onStart = (type === 'enter' ? this.enterBegin : this.leaveBegin).bind(this, key);
    const onComplete = (type === 'enter' ? this.enterComplete : this.leaveComplete).bind(this, key);
    if (animateData.isArray) {
      const length = animate.length - 1;
      const animation = [];
      const startArray = [];
      animate.forEach((leave, ii) => {
        const start = startAnim[ii];
        const animObj = this.getTweenSingleData(key, start, leave, animateData.ease,
          animateData.duration / length, !ii ? delay : 0,
          !ii ? onStart : null,
          ii === length ? onComplete : null);
        animation.push(animObj.animation);
        if (animObj.startAnimate) {
          startArray.push(animObj.startAnimate);
        }
      });
      return startArray.concat(animation);
    }
    animateData = this.getTweenSingleData(key, startAnim, animate, animateData.ease,
      animateData.duration, delay, onStart, onComplete);
    return [animateData.startAnimate, animateData.animation].filter(item => item);
  }

  getTweenAppearData = (key, i) => ({
    ...this.getAnimData(this.props, key, i, 0, 0),
    duration: 0,
  });

  getAnimData = (props, key, i, enterOrLeave, startOrEnd) => {
    /**
     * transformArguments 第一个为 enter, 第二个为 leave；
     * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
     * 用 tween-one 的数组来实现老的动画逻辑。。。
     */
    return props.animConfig ?
      this.getTweenAnimConfig(
        transformArguments(props.animConfig, key, i)[enterOrLeave], startOrEnd, enterOrLeave
      ) :
      this.getTweenType(transformArguments(props.type, key, i)[enterOrLeave], startOrEnd);
  }

  getChildrenToRender = child => {
    if (!child || !child.key) {
      return child;
    }
    const key = child.key;
    if (!this.state.childrenShow[key]) {
      return null;
    }
    let i = this.keysToLeave.indexOf(key);
    let animation;
    const isFunc = typeof child.type === 'function';
    const forcedJudg = isFunc ? {} : null;
    if (isFunc) {
      Object.keys(child.type).forEach(name => {
        if (typeDefault.indexOf(name) === -1) {
          forcedJudg[name] = child.type[name];
        }
      });
    }
    // 处理出场
    if (i >= 0) {
      if (this.leaveUnfinishedChild.indexOf(key) >= 0) {
        return this.saveTweenOneTag[key];
      }
      const interval = transformArguments(this.props.interval, key, i)[1];
      let delay = transformArguments(this.props.delay, key, i)[1];
      const order = this.props.leaveReverse ? (this.keysToLeave.length - i - 1) : i;
      delay = interval * order + delay;
      animation = this.getTweenEnterOrLeaveData(key, i, delay, 'leave');
    } else {
      // 处理进场;
      i = this.keysToEnterToCallback.indexOf(key);
      if (!this.oneEnter && !this.props.appear) {
        animation = this.getTweenAppearData(key, i);
      } else {
        animation = this.getTweenEnterOrLeaveData(key, i, 0, 'enter');
      }
      if (this.tweenToEnter[key]) {
        // 如果是已进入的，将直接返回标签。。
        return createElement(TweenOne,
          { key, component: child.type, forcedJudg, componentProps: child.props });
      }
    }
    const paused = this.keysToEnterPaused[key] && !this.keysToLeave.indexOf(key) >= 0;
    animation = paused ? null : animation;
    const tag = createElement(TweenOne,
      { key, component: child.type, id: key, forcedJudg, componentProps: child.props, animation });
    this.saveTweenOneTag[key] = tag;
    return tag;
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
    ticker.clear(this.placeholderTimeoutIds[key]);
    delete this.placeholderTimeoutIds[key];
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
      elem.className = (`${elem.className} ${animatingClassName[0]}`).trim();
    }
  }

  enterComplete = (key, e) => {
    if (this.keysToEnterPaused[key] || this.keysToLeave.indexOf(key) >= 0) {
      return;
    }
    const elem = e.target;
    elem.className = elem.className.replace(this.props.animatingClassName[0], '').trim();
    this.tweenToEnter[key] = true;
    this.unwantedStart[key] = true;
    this.props.onEnd({ key, type: 'enter' });
  }

  leaveBegin = (key, e) => {
    const elem = e.target;
    const animatingClassName = this.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[0], '');
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className = (`${elem.className} ${animatingClassName[1]}`).trim();
    }
    this.unwantedStart[key] = true;
    delete this.tweenToEnter[key];
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
      delete this.saveTweenOneTag[key];
      delete this.unwantedStart[key];
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
      'componentProps',
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
    const props = { ...tagProps, ...this.props.componentProps };
    return createElement(this.props.component, props, childrenToRender);
  }
}
QueueAnim.isQueueAnim = true;
export default QueueAnim;
