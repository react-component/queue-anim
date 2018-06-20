/* eslint no-console:0 no-restricted-globals:0 */
import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect.js';
import TestUtils from 'react-dom/test-utils';
import ticker from 'rc-tween-one/lib/ticker';
import QueueAnim from '../src';

const defaultInterval = 100;

describe('rc-queue-anim', () => {
  let div;

  function getOpacity(node) {
    if (!node) {
      return null;
    }
    return parseFloat(window.getComputedStyle(node).opacity);
  }

  function getLeft(node) {
    if (!node) {
      return null;
    }
    return parseFloat(node.style.left);
  }

  function getTop(node) {
    if (!node) {
      return null;
    }
    return parseFloat(node.style.top);
  }

  function shouldAnimatingThisOne(instance, index) {
    const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    children.forEach((node, i) => {
      console.log(i, getOpacity(node));
      if (i === 0) {
        return;
      }
      if (i <= index) {
        expect(getOpacity(node)).to.above(0);
      } else {
        // placeholder
        expect(node.innerHTML).to.be('');
      }
    });
  }

  function createQueueAnimInstance(props = {}) {
    class QueueAnimExample extends React.Component {
      state = {
        show: true,
        unMount: false,
        items: [{
          key: 1,
          content: 'div',
        }, {
          key: 2,
          content: 'div',
        }, {
          key: 3,
          content: 'div',
        }],
      }
      toggle = () => {
        this.setState({
          show: !this.state.show,
        });
      }
      unMountQueue = () => {
        this.setState({
          unMount: true,
        });
      }
      removeOne = () => {
        const items = this.state.items;
        const removeIndex = 0;
        items.splice(removeIndex, 1);
        this.setState({ items });
        return removeIndex;
      }
      render() {
        return (
          <section>
            {!this.state.unMount ? <QueueAnim {...props}>
              {
                this.state.show ?
                  this.state.items.map((item) =>
                    <div key={item.key}
                      style={{ position: 'relative' }}
                    >
                      {item.content}
                    </div>
                  ) :
                  null
              }
              {null}
            </QueueAnim> : null}
          </section>
        );
      }
    }
    return ReactDom.render(<QueueAnimExample />, div);
  }

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    try {
      ReactDom.unmountComponentAtNode(div);
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  });

  it('should render children', () => {
    const instance = createQueueAnimInstance();
    const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(children.length).to.be(1);
  });

  it('should render all children', () => {
    const instance = createQueueAnimInstance({ appear: false });
    const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(children.length).to.be(4);
  });

  it('should have queue animation', (done) => {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance();
    shouldAnimatingThisOne(instance, 0);
    ticker.timeout(() => {
      shouldAnimatingThisOne(instance, 1);
      ticker.timeout(() => {
        shouldAnimatingThisOne(instance, 2);
        ticker.timeout(() => {
          shouldAnimatingThisOne(instance, 3);
          done();
        }, interval);
      }, interval);
    }, 18);
  });

  it('should have interval', (done) => {
    const interval = 300;
    const instance = createQueueAnimInstance({
      interval,
    });
    shouldAnimatingThisOne(instance, 0);
    ticker.timeout(() => {
      shouldAnimatingThisOne(instance, 1);
      ticker.timeout(() => {
        shouldAnimatingThisOne(instance, 2);
        ticker.timeout(() => {
          shouldAnimatingThisOne(instance, 3);
          done();
        }, interval);
      }, interval);
    }, 18);
  });

  it('should have delay', (done) => {
    const interval = defaultInterval;
    const delay = 1000;
    const instance = createQueueAnimInstance({ delay });
    shouldAnimatingThisOne(instance, 0);
    ticker.timeout(() => {
      shouldAnimatingThisOne(instance, 0);
      ticker.timeout(() => {
        shouldAnimatingThisOne(instance, 1);
        ticker.timeout(() => {
          shouldAnimatingThisOne(instance, 2);
          ticker.timeout(() => {
            shouldAnimatingThisOne(instance, 3);
            done();
          }, interval);
        }, interval);
      }, delay);
    }, 18);
  });

  it('should have duration', (done) => {
    const duration = 600;
    const instance = createQueueAnimInstance({
      duration,
    });
    let children;
    ticker.timeout(() => {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getOpacity(children[1])).to.be.above(0);
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getOpacity(children[1])).to.above(0.99);
        done();
      }, duration);
    }, 18);
  });

  it('should have leave animation', (done) => {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance();
    ticker.timeout(() => {
      const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getOpacity(children[3])).to.be(1);
      const removeIndex = instance.removeOne();
      ticker.timeout(() => {
        expect(getOpacity(children[removeIndex + 1])).to.below(1);
        expect(children.length).to.be(4);
        ticker.timeout(() => {
          expect(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div').length).to.be(3);
          done();
        }, 500);
      }, 18);
    }, interval * 3 + 500);
  });

  it('should support custom animation config', (done) => {
    const instance = createQueueAnimInstance({
      animConfig: {
        left: [100, 0],
      },
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(isNaN(children[1])).to.be.ok();
    ticker.timeout(() => {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getLeft(children[1])).to.above(0);
      done();
    }, 18);
  });

  it('should support custom animation config array', (done) => {
    const instance = createQueueAnimInstance({
      animConfig: [
        [{ left: [100, 0] }, { top: [100, 0] }],
      ],
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(isNaN(children[1])).to.be.ok();
    ticker.timeout(() => {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      console.log('left:', getLeft(children[1]));
      console.log('top:', getTop(children[1]));
      expect(getLeft(children[1])).to.be(100);
      expect(getTop(children[1])).to.be(100);
      done();
    }, 1030);
  });

  it('should support animation when change direction at animating', (done) => {
    const instance = createQueueAnimInstance({
      leaveReverse: true,
    });
    let index = 0;
    let maxOpacity;
    const opacityArray = [];
    const interval = ticker.interval(() => {
      index += 1;
      // 取第一个， 时间为 450 加间隔 100 ，，应该 550 为最高点。10不是最高点
      const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div')[1];
      const opacity = getOpacity(children);
      if (!isNaN(opacity)) {
        opacityArray.push(opacity);
      }
      console.log('time: ', index * 50, 'opacity: ',
        opacity || 0, 'children is remove:', !children);
      if (index === 10) {
        instance.toggle();
        console.log('toggle');
      }
      if (index === 11) {
        // tweenOne 在改变动画后是在下一帧再启动改变后的动画，，
        maxOpacity = opacity;
      }
      if (opacity >= 1 || opacity <= 0 || isNaN(opacity)) {
        ticker.clear(interval);
        console.log(maxOpacity);
        opacityArray.forEach((o) => {
          expect(maxOpacity >= o).to.be.ok();
        });
        done();
      }
    }, 18);
  });

  it('should has animating className', (done) => {
    const instance = createQueueAnimInstance({
      ease: 'easeInElastic',
    });
    ticker.timeout(() => {
      let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(children[1].className).to.contain('queue-anim-entering');
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(children[1].className).not.to.contain('queue-anim-entering');
        const removeIndex = instance.removeOne();
        ticker.timeout(() => {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(children[removeIndex + 1].className).to.contain('queue-anim-leaving');
          ticker.timeout(() => {
            expect(children[removeIndex + 1].className).not.to.contain('queue-anim-leaving');
            done();
          }, 550);
        }, 18);
      }, 550);
    }, 18);
  });

  it('should has animating config is func enter', (done) => {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return { top: [100, 0] };
        }
        return { left: [100, 0] };
      },
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    // expect(isNaN(getLeft(children[1]))).to.be.ok();
    // expect(isNaN(getTop(children[2]))).to.be.ok();
    ticker.timeout(() => {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getLeft(children[1])).to.above(0);
      expect(isNaN(getTop(children[1]))).to.be.ok();
      console.log('left:', getLeft(children[1]));
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getTop(children[2])).to.above(0);
        expect(isNaN(getLeft(children[2]))).to.be.ok();
        console.log('top:', getTop(children[2]));
        ticker.timeout(() => {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getTop(children[2])).to.above(99.99);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          console.log('top_end:', getTop(children[2]));
          done();
        }, 518);// +18 帧为 tween-one 补帧。。。。complete 在时间结束后下一帧跟上。
      }, interval);
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.above(99.99);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left_end:', getLeft(children[1]));
      }, 518);
    }, 18);
  });

  it('should has animating config is func leave', (done) => {
    const instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return { top: [100, 0] };
        }
        return { left: [100, 0] };
      },
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    ticker.timeout(() => {
      instance.toggle();
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      console.log('left:', getLeft(children[1]));
      console.log('top:', getTop(children[2]));
      expect(getLeft(children[1])).to.be(100);
      expect(getTop(children[2])).to.be(100);
      expect(isNaN(getTop(children[1]))).to.be.ok();
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.be(0);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left_end:', getLeft(children[1]));
      }, 500);
      ticker.timeout(() => {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getTop(children[2])).to.below(100);
        expect(isNaN(getLeft(children[2]))).to.be.ok();
        console.log('top:', getTop(children[2]));
        ticker.timeout(() => {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          console.log('top_end:', getTop(children[2]));
          expect(getTop(children[2])).to.be(0);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          done();
        }, 500);
      }, 118);
    }, 1018);
  });
});
