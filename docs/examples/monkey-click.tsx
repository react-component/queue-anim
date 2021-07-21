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
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        切换
      </button>
      <span>{show ? '显示' : '隐藏'}</span>
      <QueueAnim leaveReverse>
        {show ? data.map((item) => <div key={item.key}>{item.children}</div>) : null}
      </QueueAnim>
    </div>
  );
};
