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

  const onSwitch = () => {
    if (items.length) {
      setItems([]);
    } else {
      setItems(data);
    }
  };
  const onRemove = () => {
    console.log('remove: 1');
    setItems([]);
    setTimeout(() => {
      console.log('remove: 2');
      setItems([]);
      setTimeout(() => {
        console.log('remove: 3');
        setItems([]);
      });
    });
  };
  const onExchange = () => {
    setItems([
      {
        children: '依次进入1',
        key: 1,
      },
      {
        children: '依次进入2',
        key: 2,
      },
    ]);
    setItems([
      {
        children: '依次进入1',
        key: 1,
      },
      {
        children: '依次进入2',
        key: 2,
      },
    ]);
    setItems([
      {
        children: '依次进入1',
        key: 1,
      },
      {
        children: '依次进入2',
        key: 2,
      },
    ]);
  };
  return (
    <div>
      <button onClick={onSwitch}>切换</button>
      <button onClick={onRemove}>多次刷空子级</button>
      <button onClick={onExchange}>多次切换同样子级</button>
      <QueueAnim type="left">
        {items.map((item) => (
          <div key={item.key}>{item.children}</div>
        ))}
      </QueueAnim>
    </div>
  );
};
