/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim, { IQueueTypeOrArrayOrFunc } from 'rc-queue-anim';
import React, { useState } from 'react';

let index = 7;

export default () => {
  const [items, setItems] = useState([
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
  ]);
  const [type, setType] = useState<IQueueTypeOrArrayOrFunc>('left');
  const add = () => {
    const newItems = [...items];
    newItems.push({
      children: '新节点',
      key: index,
    });
    index++;
    setItems(newItems);
  };
  const addTwo = () => {
    const newItems = [...items];
    newItems.push({
      children: '新节点',
      key: index,
    });
    index++;
    newItems.push({
      children: '新节点',
      key: index,
    });
    index++;
    setItems(newItems);
  };
  const remove = (key: number, e: any) => {
    e.preventDefault();
    const newItems = [...items];
    const target = newItems.filter((c) => c.key === key);
    let i: number | undefined;
    if (target && target[0]) {
      i = newItems.indexOf(target[0]);
    }
    if (typeof i === 'number' && i >= 0) {
      newItems.splice(i, 1);
    }
    setItems(newItems);
  };
  const removeAll = () => {
    setItems([]);
  };
  const removeAndAdd = () => {
    const newItems = [...items];
    newItems.splice(newItems.length - 1, 1);
    newItems.push({
      children: `新节点${Date.now()}--${index}`,
      key: index,
    });
    index++;
    setItems(newItems);
  };
  const removeAndAddTow = () => {
    const newItems = [...items];
    newItems.splice(newItems.length - 1, 1);
    newItems.splice(newItems.length - 2, 1);
    newItems.push({
      children: `新节点${Date.now()}`,
      key: index,
    });
    index++;
    newItems.unshift({
      children: `新节点${Date.now()}-top`,
      key: index,
    });
    index++;
    setItems(newItems);
  };
  const removeTwo = () => {
    const newItems = [...items];
    newItems.splice(1, 1);
    setItems(newItems);
  };
  return (
    <div>
      <button onClick={add}>点击新增</button>
      <button onClick={addTwo}>点击新增两个</button>
      <button onClick={removeTwo}>点击移出第二个</button>
      <button onClick={removeAll}>移出所有</button>
      <button onClick={removeAndAdd}>移出与添加</button>
      <button onClick={removeAndAddTow}>头尾添加与移出两个</button>
      <QueueAnim type={type}>
        {items.map((item) => (
          <div key={item.key}>
            {item.children}{' '}
            <a
              href="#"
              onClick={(e) => {
                remove(item.key, e);
              }}
            >
              删除
            </a>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
};
