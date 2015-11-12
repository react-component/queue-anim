import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect.js';
import QueueAnim from '../index';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const defaultInterval = 100;

describe('rc-queue-anim', function () {
  let instance;
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
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    children.forEach(function(node, i) {
      console.log(i, node.style.visibility, getOpacity(node));
      if (i === 0) {
        return;
      }
      if (i <= index) {
        expect(node.style.visibility).to.be('visible');
        expect(getOpacity(node)).to.above(0);
      } else {
        expect(node.style.visibility).to.be('hidden');
      }
    });
  }

  function createQueueAnimInstance(props) {
    props = props || {};
    const QueueAnimExample = React.createClass({
      getInitialState() {
        return {
          show: true,
          items: [{
            key: 1,
            content: 'div'
          }, {
            key: 2,
            content: 'div'
          }, {
            key: 3,
            content: 'div'
          }]
        };
      },
      toggle() {
        this.setState({
          show: !this.state.show
        });
      },
      removeOne() {
        let items = this.state.items;
        const removeIndex = 0;
        items.splice(removeIndex, 1);
        this.setState({ items });
        return removeIndex;
      },
      render() {
        return <QueueAnim {...props}>
          {this.state.show ? this.state.items.map((item, i) => <div key={item.key}>{item.content}</div>) : null}
        </QueueAnim>;
      }
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
    instance = createQueueAnimInstance();
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(children.length).to.be(4);
  });

  it('should have queue animation', function(done) {
    const interval = defaultInterval;
    instance = createQueueAnimInstance();
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
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
    }, 10);
  });

  it('should have interval', function(done) {
    const interval = 300;
    instance = createQueueAnimInstance({ interval });
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
    }, 10);
  });

  it('should have delay', function(done) {
    const interval = defaultInterval;
    const delay = 1000;
    instance = createQueueAnimInstance({ delay });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
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
    }, 10);
  });

  it('should have duration', function(done) {
    const interval = defaultInterval;
    const duration = 300;
    instance = createQueueAnimInstance({ duration });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    shouldAnimatingThisOne(instance, 0);
    setTimeout(function() {
      expect(getOpacity(children[1])).to.be.above(0);
      setTimeout(function() {
        expect(getOpacity(children[1])).to.be(1);
        done();
      }, duration);
    }, 10);
  });

  it('should have leave animation', function(done) {
    const interval = defaultInterval;
    instance = createQueueAnimInstance();
    setTimeout(function() {
      let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getOpacity(children[3])).to.be(1);
      const removeIndex = instance.removeOne();
      setTimeout(function() {
        expect(getOpacity(children[removeIndex + 1])).to.below(1);
        expect(children.length).to.be(4);
        setTimeout(function() {
          expect(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div').length).to.be(3);
          done();
        }, 500);
      }, 10);
    }, interval * 3 + 500);
  });

  it('should support custom animation config', function(done) {
    instance = createQueueAnimInstance({
      animConfig: {
        left: [100, 0]
      }
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(isNaN(getLeft(children[1]))).to.be.ok();
    setTimeout(function() {
      expect(getLeft(children[1])).to.above(0);
      done();
    }, 10);
  });

  it('should support animation when change direction at animating', function(done) {
    instance = createQueueAnimInstance({
      leaveReverse: true
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    let index = 0;
    let maxOpacity;
    let opacityArray = [];
    let interval = setInterval(function() {
      index += 1;
      let opacity = getOpacity(children[1]);
      opacityArray.push(opacity);
      console.log('time: ', index * 30, 'opacity: ', opacity);
      if (index === 10) {
        instance.toggle();
        maxOpacity = opacity;
        console.log('toggle');
      }
      if (opacity >= 1 || opacity <= 0) {
        clearInterval(interval);
        opacityArray.forEach(function(o) {
          expect(maxOpacity >= o).to.be.ok();
        });
        done();
      }
    }, 30);
  });

  it('should has animating className', function(done) {
    const interval = defaultInterval;
    instance = createQueueAnimInstance();
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(children[1].className).to.contain('queue-anim-entering');
    setTimeout(function() {
      expect(children[1].className).not.to.contain('queue-anim-entering');
      let removeIndex = instance.removeOne();
      expect(children[removeIndex + 1].className).to.contain('queue-anim-leaving');
      setTimeout(function() {
        expect(children[removeIndex + 1].className).not.to.contain('queue-anim-leaving');
        done();
      }, 550);
    }, 550);
  });

  it('should has animating config is func enter', function (done) {
    const interval = defaultInterval;
    instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return {top: [100, 0]};
        }
        return {left: [100, 0]};
      }
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    expect(isNaN(getLeft(children[1]))).to.be.ok();
    expect(isNaN(getTop(children[2]))).to.be.ok();
    setTimeout(function () {
      children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(getLeft(children[1])).to.above(0);
      expect(isNaN(getTop(children[1]))).to.be.ok();
      console.log('left:', getLeft(children[1]));
      setTimeout(function () {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getTop(children[2])).to.above(0);
        expect(isNaN(getLeft(children[2]))).to.be.ok();
        console.log('top:', getTop(children[2]));
        setTimeout(function () {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getTop(children[2])).to.be(100);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          console.log('top_end:', getTop(children[2]));
          done();
        }, 500);
      }, interval);
      setTimeout(function () {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.be(100);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left_end:', getLeft(children[1]));
      }, 500);
    }, 10);
  });

  it('should has animating config is func leave', function (done) {
    const interval = defaultInterval;
    instance = createQueueAnimInstance({
      animConfig(e) {
        if (e.index === 1) {
          return {top: [100, 0]};
        }
        return {left: [100, 0]};
      }
    });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    setTimeout(function () {
      instance.toggle();
      setTimeout(function () {
        children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
        expect(getLeft(children[1])).to.below(100);
        expect(isNaN(getTop(children[1]))).to.be.ok();
        console.log('left:', getLeft(children[1]));
        setTimeout(function () {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getLeft(children[1])).to.be(0);
          expect(isNaN(getTop(children[1]))).to.be.ok();
          console.log('left_end:', getLeft(children[1]));
        }, 500);
        setTimeout(function () {
          children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
          expect(getTop(children[2])).to.below(100);
          expect(isNaN(getLeft(children[2]))).to.be.ok();
          console.log('top:', getTop(children[2]));
          setTimeout(function () {
            children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
            console.log('top_end:', getTop(children[2]));
            expect(getTop(children[2])).to.be(0);
            expect(isNaN(getLeft(children[2]))).to.be.ok();
            done();
          }, 500);
        }, 110);
      }, 10);
    }, 1000);
  });

});
