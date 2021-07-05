/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';
import './assets/switch.less';

const childrenKey = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }];
export default () => {
  const [children, setChildren] = useState(childrenKey);
  const onEnter = () => {
    setChildren([]);
  };
  const onLeave = () => {
    setChildren(childrenKey);
  };
  const childrenToRender = (children || []).map((item) => {
    return <li key={item.key} />;
  });
  return (
    <div>
      <h2>鼠标经过当前区域，再移出区域查看</h2>
      <div className="switch" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <QueueAnim component="ul" leaveReverse delay={[0, 300]} type="scale" forcedReplay>
          {childrenToRender}
        </QueueAnim>
        <QueueAnim component="ul" leaveReverse delay={150} type="scale" forcedReplay>
          {childrenToRender}
        </QueueAnim>
        <QueueAnim component="ul" leaveReverse delay={[300, 0]} type="scale" forcedReplay>
          {childrenToRender}
        </QueueAnim>
      </div>
    </div>
  );
};
