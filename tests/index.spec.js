import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect.js';
import QueueAnim from '../index';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const defaultInterval = 100;

describe('rc-queue-anim', function() {
  let div;

  function getOpacity(node) {
    return parseFloat($(node).css('opacity'));
  }

  function getLeft(node) {
    return parseFloat(node.style.left);
  }

  function getTop(node) {
    return parseFloat(node.style.top);
  }

  function shouldAnimatingThisOne(instance, index) {
    const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    children.forEach(function(node, i) {
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
    const QueueAnimExample = React.createClass({
      getInitialState() {
        return {
          show: true,
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
        };
      },
      toggle() {
        this.setState({
          show: !this.state.show,
        });
      },
      removeOne() {
        const items = this.state.items;
        const removeIndex = 0;
        items.splice(removeIndex, 1);
        this.setState({ items });
        return removeIndex;
      },
      render() {
        return (
          <QueueAnim {...props}>
            {this.state.show ? this.state.items.map((item) => <div key={item.key}>{item.content}</div>) : null}
          </QueueAnim>
        );
      },
    });
    return ReactDom.render(<QueueAnimExample />, div);
  }

  beforeEach(function() {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(function() {
    try {
      ReactDom.unmountComponentAtNode(div);
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  });

  it('should render children', function() {
    const instance = createQueueAnimInstance();
    const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(children.length).to.be(1);
  });

  it('should have queue animation', function(done) {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance();
    shouldAnimatingThisOne(instance, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(instance, 1);
      setTimeout(function() {
        shouldAnimatingThisOne(instance, 2);
        setTimeout(function() {
          shouldAnimatingThisOne(instance, 3);
          done();
        }, interval);
      }, interval);
    }, 30);
  });

  it('should have interval', function(done) {
    const interval = 300;
    const instance = createQueueAnimInstance({ interval });
    shouldAnimatingThisOne(instance, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(instance, 1);
      setTimeout(function() {
        shouldAnimatingThisOne(instance, 2);
        setTimeout(function() {
          shouldAnimatingThisOne(instance, 3);
          done();
        }, interval);
      }, interval);
    }, 30);
  });

  it('should have delay', function(done) {
    const interval = defaultInterval;
    const delay = 1000;
    const instance = createQueueAnimInstance({ delay });
    shouldAnimatingThisOne(instance, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(instance, 0);
      setTimeout(function() {
        shouldAnimatingThisOne(instance, 1);
        setTimeout(function() {
          shouldAnimatingThisOne(instance, 2);
          setTimeout(function() {
            shouldAnimatingThisOne(instance, 3);
            done();
          }, interval);
        }, interval);
      }, delay);
    }, 30);
  });

  it('should have duration', function(done) {
    const duration = 300;
    const instance = createQueueAnimInstance({ duration });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    shouldAnimatingThisOne(instance, 0);
    setTimeout(function() {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getOpacity(children[1])).to.be.above(0);
      setTimeout(function() {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getOpacity(children[1])).to.be(1);
        done();
      }, duration);
    }, 30);
  });

  it('should have leave animation', function(done) {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance();
    setTimeout(function() {
      const children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getOpacity(children[3])).to.be(1);
      const removeIndex = instance.removeOne();
      setTimeout(function() {
        expect(getOpacity(children[removeIndex + 1])).to.below(1);
        expect(children.length).to.be(4);
        setTimeout(function() {
          expect(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div').length).to.be(3);
          done();
        }, 550);
      }, 30);
    }, interval * 3 + 550);
  });

  it('should support custom animation config', function(done) {
    const instance = createQueueAnimInstance({
      animConfig: {
        left: [100, 0],
      },
    });
    setTimeout(function() {
      let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(isNaN(getLeft(children[1]))).to.be.ok();
      setTimeout(function() {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.above(0);
        done();
      }, 30);
    }, 0);
  });

  it('should support animation when change direction at animating', function(done) {
    const instance = createQueueAnimInstance({
      leaveReverse: true,
    });
    let index = 0;
    let maxOpacity;
    const opacityArray = [];
    const interval = setInterval(function() {
      index += 1;
      const opacity = getOpacity(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div')[1]);
      if (!isNaN(opacity)) {
        opacityArray.push(opacity);
      }
      console.log('time: ', index * 30, 'opacity: ', opacity);
      if (index === 10) {
        instance.toggle();
        maxOpacity = opacity;
        console.log('toggle');
      }
      if (opacity >= 1 || opacity <= 0 || isNaN(opacity)) {
        clearInterval(interval);
        console.log(maxOpacity);
        opacityArray.forEach(function(o) {
          expect(maxOpacity >= o).to.be.ok();
        });
        done();
      }
    }, 30);
  });

  it('should has animating className', function(done) {
    const instance = createQueueAnimInstance();
    setTimeout(function() {
      let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(children[1].className).to.contain('queue-anim-entering');
      setTimeout(function() {
        expect(children[1].className).not.to.contain('queue-anim-entering');
        const removeIndex = instance.removeOne();
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(children[removeIndex + 1].className).to.contain('queue-anim-leaving');
        setTimeout(function() {
          expect(children[removeIndex + 1].className).not.to.contain('queue-anim-leaving');
          done();
        }, 550);
      }, 550);
    }, 30);
  });

  it('should has animating config is func enter', function(done) {
    const interval = defaultInterval;
    const instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return { top: [100, 0] };
        }
        return { left: [100, 0] };
      },
    });
    setTimeout(function() {
      let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(isNaN(getLeft(children[1]))).to.be.ok();
      expect(isNaN(getTop(children[2]))).to.be.ok();
      setTimeout(function() {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.above(0);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left:', getLeft(children[1]));
        setTimeout(function() {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getTop(children[2])).to.above(0);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          console.log('top:', getTop(children[2]));
          setTimeout(function() {
            children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
            expect(getTop(children[2])).to.be(100);
            expect(isNaN(getLeft(children[2]))).to.be.ok();
            console.log('top_end:', getTop(children[2]));
            done();
          }, 500);
        }, interval);
        setTimeout(function() {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getLeft(children[1])).to.be(100);
          expect(isNaN(getTop(children[1]))).to.be.ok();
          console.log('left_end:', getLeft(children[1]));
        }, 500);
      }, 30);
    }, 0);
  });

  it('should has animating config is func leave', function(done) {
    const instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return { top: [100, 0] };
        }
        return { left: [100, 0] };
      },
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    setTimeout(function() {
      instance.toggle();
      setTimeout(function() {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.below(100);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left:', getLeft(children[1]));
        setTimeout(function() {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getLeft(children[1])).to.be(0);
          expect(isNaN(getTop(children[1]))).to.be.ok();
          console.log('left_end:', getLeft(children[1]));
        }, 500);
        setTimeout(function() {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getTop(children[2])).to.below(100);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          console.log('top:', getTop(children[2]));
          setTimeout(function() {
            children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
            console.log('top_end:', getTop(children[2]));
            expect(getTop(children[2])).to.be(0);
            expect(isNaN(getLeft(children[2]))).to.be.ok();
            done();
          }, 500);
        }, 130);
      }, 30);
    }, 1000);
  });
});
