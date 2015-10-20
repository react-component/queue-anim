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

  function shouldAnimatingThisOne(children, index) {
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
    shouldAnimatingThisOne(children, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(children, 1);
      setTimeout(function() {
        shouldAnimatingThisOne(children, 2);
        setTimeout(function() {
          shouldAnimatingThisOne(children, 3);
          done();
        }, interval);
      }, interval);
    }, 10);
  });

  it('should have interval', function(done) {
    const interval = 300;
    instance = createQueueAnimInstance({ interval });
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    shouldAnimatingThisOne(children, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(children, 1);
      setTimeout(function() {
        shouldAnimatingThisOne(children, 2);
        setTimeout(function() {
          shouldAnimatingThisOne(children, 3);
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
    shouldAnimatingThisOne(children, 0);
    setTimeout(function() {
      shouldAnimatingThisOne(children, 0);
      setTimeout(function() {
        shouldAnimatingThisOne(children, 1);
        setTimeout(function() {
          shouldAnimatingThisOne(children, 2);
          setTimeout(function() {
            shouldAnimatingThisOne(children, 3);
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
    shouldAnimatingThisOne(children, 0);
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
    let children = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
    setTimeout(function() {
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

});
