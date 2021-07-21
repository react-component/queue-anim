/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';

export default () => (
  <QueueAnim animConfig={{ translateX: [100, 0] }}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
);
