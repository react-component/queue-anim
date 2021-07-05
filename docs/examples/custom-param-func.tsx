/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';

const animConfigFunc = (e: any) => {
  if (e.key === '3') {
    return { opacity: [1, 0], translateX: [0, 30] };
  }
  return [
    { opacity: [1, 0], translateX: [0, -30] },
    { opacity: [1, 0], translateX: [0, 30] },
  ];
};
const durationFunc = (e: any) => {
  if (e.key === '3') {
    return [1500, 4000];
  }
  return 500;
};
const easeFunc = (e: any) => {
  if (e.key === '3') {
    return ['easeOutBack', 'easeInBack'];
  }
  return 'easeInOutQuart';
};
const delayFunc = (e: any) => {
  if (e.index >= 3) {
    return [1500, 0];
  }
  return 0;
};

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
      <QueueAnim
        interval={300}
        animConfig={animConfigFunc}
        duration={durationFunc}
        ease={easeFunc}
        delay={delayFunc}
      >
        {show
          ? [
              <div key="1">依次进入</div>,
              <div key="2">依次进入</div>,
              <div key="3">改变type</div>,
              <div key="4">依次进入</div>,
              <div key="5">依次进入</div>,
            ]
          : null}
      </QueueAnim>
    </div>
  );
};
