/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';

const child = [
  <div key="1">依次进入</div>,
  <div key="2">依次进入</div>,
  <div key="3">依次进入</div>,
  <div key="4">依次进入</div>,
  <div key="5">依次进入</div>,
];
export default () => {
  const [items, setItems] = useState(child);
  return (
    <div>
      <QueueAnim appear={false}>{items}</QueueAnim>
      <button
        onClick={() => {
          if (items.length) {
            setItems([]);
          } else {
            setItems(child);
          }
        }}
      >
        切换
      </button>
    </div>
  );
};
