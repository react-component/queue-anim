/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';

const children = [
  <div key="1">依次进入</div>,
  <div key="2">依次进入</div>,
  <div key="3">依次进入</div>,
  <div key="4">依次进入</div>,
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
      <QueueAnim
        animConfig={[
          [{ x: [300, 20], opacity: [1, 0] }, { y: [100, 0] }],
          [{ x: [300, 500] }, { y: [100, -50], opacity: [1, 0] }],
        ]}
        ease="easeInOutQuart"
      >
        {show ? children : null}
      </QueueAnim>
    </div>
  );
};
