/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';

const data = [
  {
    children: '依次进入1',
    key: 1,
  },
  {
    children: '依次进入2',
    key: 2,
  },
  {
    children: '依次进入3',
    key: 3,
  },
  {
    children: '依次进入4',
    key: 4,
  },
  {
    children: '依次进入5',
    key: 5,
  },
  {
    children: '依次进入6',
    key: 6,
  },
];

export default () => {
  const [items, setItems] = useState(data);
  return (
    <div>
      <QueueAnim
        type={['right', 'left']}
        interval={[100, 200]}
        delay={[0, 1000]}
        duration={[500, 2000]}
        ease={['easeOutBack', 'easeInOutCirc']}
        leaveReverse
      >
        {items.map((item) => (
          <div key={item.key}>{item.children}</div>
        ))}
      </QueueAnim>
      <button
        onClick={() => {
          setItems([]);
        }}
      >
        移出所有
      </button>
    </div>
  );
};
