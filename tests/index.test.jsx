import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import QueueAnim from '../src';

import TweenOne, { Ticker } from 'tween-one';

function getOpacity(node) {
  if (!node) {
    return NaN;
  }
  // console.log('node.style.opacity)', node.style)
  return parseFloat(node.style.opacity);
}

function getLeft(node) {
  if (!node) {
    return NaN;
  }
  return parseFloat(node.style.left);
}

function getTop(node) {
  if (!node) {
    return NaN;
  }
  return parseFloat(node.style.top);
}

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);

  TweenOne({}, { x: 100, duration: 2000000 });
  //jest.useFakeTimers();
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  //jest.useRealTimers();
});

const items = [
  {
    key: 1,
    content: 'div',
  },
  {
    key: 2,
    content: 'div',
  },
  {
    key: 3,
    content: 'div',
  },
];

const child = items.map((item) => (
  <span key={item.key} style={{ position: 'relative', display: 'block' }}>
    {item.content}
  </span>
));

const QueueAnimComp = (props) => {
  const [children, setChildren] = useState(child);
  const [unmount, setUnmount] = useState(false);
  return (
    <div>
      {!unmount && (
        <QueueAnim id="queue" {...props}>
          {children}
        </QueueAnim>
      )}
      <button
        data-testId="toggle"
        onClick={() => {
          setChildren((prevChild) => (prevChild ? null : child));
        }}
      >
        switch
      </button>
      <button
        data-testId="unmount"
        onClick={() => {
          setUnmount((prev) => !prev);
        }}
      >
        switch
      </button>
    </div>
  );
};

const interval = 100;

function shouldAnimatingThisOne(children, index) {
  children.forEach((node, i) => {
    console.log(index, i, getOpacity(node));
    if (i <= index) {
      expect(getOpacity(node)).toBeGreaterThan(0);
    } else {
      // placeholder
      // expect(node.innerHTML).to.be('');
    }
  });
}

it('should render children', (done) => {
  act(() => {
    render(<QueueAnim id="queue">{child}</QueueAnim>, container);
    // jest.advanceTimersByTime(50);
  }); /* Ticker.timeout 0 会直接返回
  let { children } = container.querySelector('[id=queue]');
  expect(children.length).toBe(0); */

  const { children } = container.querySelector('[id=queue]');

  Ticker.timeout(() => {
    // shouldAnimatingThisOne(0);
    expect(children.length).toBe(1);
    done();
  });
});

it('should render all children', () => {
  act(() => {
    render(
      <QueueAnim id="queue" appear={false}>
        {child}
      </QueueAnim>,
      container,
    );
  });
  const { children } = container.querySelector('[id=queue]');
  console.log(children.length);
  expect(children.length).toBe(3);
});

it('should have queue animation', (done) => {
  act(() => {
    render(<QueueAnim id="queue">{child}</QueueAnim>, container);
  });
  const { children } = container.querySelector('[id=queue]');
  Ticker.timeout(() => {
    shouldAnimatingThisOne(children, 0);
    Ticker.timeout(() => {
      shouldAnimatingThisOne(children, 1);
      Ticker.timeout(() => {
        shouldAnimatingThisOne(children, 2);
        done();
      }, interval);
    }, interval);
  }, 50);
  /* act(() => {
    jest.advanceTimersByTime(100);
  });
    shouldAnimatingThisOne(1);
*/
});

it('custom api queue animation', (done) => {
  act(() => {
    render(
      <QueueAnim
        id="queue"
        type="top"
        ease="easeOutSine"
        delay={1000}
        interval={300}
        duration={1000}
        component="p"
        componentProps={{ style: { top: '10px' } }}
        animatingClassName={['enter', 'leave']}
      >
        {child}
      </QueueAnim>,
      container,
    );
  });
  const node = container.querySelector('[id=queue]');
  const { children } = node;
  console.log('component style', getTop(node));
  expect(getTop(node)).toBe(10);
  console.log('component tagName', node.tagName);
  expect(node.tagName).toBe('P');
  Ticker.timeout(() => {
    expect(children.length).toBe(0);
    Ticker.timeout(() => {
      expect(children.length).toBe(1);
      done();
    }, 100);
  }, 950);
});

it('custom animConfig queue animation', (done) => {
  act(() => {
    render(
      <QueueAnim id="queue" animConfig={{ left: [100, 0] }}>
        {child}
      </QueueAnim>,
      container,
    );
  });
  const { children } = container.querySelector('[id=queue]');
  Ticker.timeout(() => {
    expect(getLeft(children[0])).toBe(100);
    done();
  }, 500);
});

it('custom forcedReplay queue animation', (done) => {
  act(() => {
    render(
      <QueueAnimComp forcedReplay animConfig={[{ left: [100, 0] }, { top: [100, 0] }]} />,
      container,
    );
  });
  const { children } = container.querySelector('[id=queue]');
  const button = document.querySelector('[data-testId=toggle]');
  Ticker.timeout(() => {
    // 出场
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    Ticker.timeout(() => {
      // 重新进入
      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(getLeft(children[0])).toBe(0);
      done();
    }, 500);
  }, 500);
});

it('should support custom animation config array', (done) => {
  act(() => {
    render(<QueueAnimComp animConfig={[{ left: [100, 0] }, { top: [100, 0] }]} />, container);
  });
  const { children } = container.querySelector('[id=queue]');
  const button = document.querySelector('[data-testId=toggle]');
  Ticker.timeout(() => {
    expect(getLeft(children[0])).toBe(100);
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    Ticker.timeout(() => {
      console.log('top', getTop(children[0]));
      expect(getTop(children[0])).toBe(0);
      done();
    }, 500);
  }, 500);
});
it('should has animating config is func enter', (done) => {
  act(() => {
    render(
      <QueueAnimComp
        animConfig={(e) => {
          if (e.index === 1) {
            return [[{ top: [100, 0] }, { left: [100, 0]}]];
          }
          return { left: [100, 0] };
        }}
      />,
      container,
    );
  });
  const { children } = container.querySelector('[id=queue]');
  const button = document.querySelector('[data-testId=toggle]');
  Ticker.timeout(() => {
    expect(getLeft(children[0])).toBe(100);
    expect(getTop(children[1])).toBe(100);
    done();
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    Ticker.timeout(() => {
      // expect(getLeft(children[0])).toBe(0);
      // expect(getTop(children[1])).toBe(0);
      done();
    }, 600);
  }, 600);
});
it('should have leave animation', (done) => {
  act(() => {
    render(<QueueAnimComp type="scale" />, container);
  });
  const { children } = container.querySelector('[id=queue]');
  const button = document.querySelector('[data-testId=toggle]');
  Ticker.timeout(() => {
    expect(children.length).toBe(3);
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    Ticker.timeout(() => {
      expect(children.length).toBe(0);
      done();
    }, 1000);
  }, 1000);
});

it('should have unmount animation', (done) => {
  act(() => {
    render(<QueueAnimComp type="scaleBig" />, container);

    const button = document.querySelector('[data-testId=unmount]');
    Ticker.timeout(() => {
      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      const node = container.querySelector('[id=queue]');
      expect(node).toBe(null);
      done();
    }, 1000);
  });
});
