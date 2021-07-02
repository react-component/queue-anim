import QueueAnim, { IQueueTypeOrArrayOrFunc } from 'rc-queue-anim';
import React, { useState } from 'react';

const d = [
  <div key="1" style={{ display: 'inline-block' }}>
    依次进入
  </div>,
  <div key="2" style={{ display: 'inline-block' }}>
    依次进入
  </div>,
  <div key="3" style={{ display: 'inline-block' }}>
    依次进入
  </div>,
  <div key="4" style={{ display: 'inline-block' }}>
    依次进入
  </div>,
  <div key="5" style={{ display: 'inline-block' }}>
    依次进入
  </div>,
];
export default () => {
  const [type, setType] = useState<IQueueTypeOrArrayOrFunc>('left');
  const [child, setChild] = useState(d);

  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setType(e.target.value as IQueueTypeOrArrayOrFunc);
          if (child.length) {
            setChild([]);
          } else {
            setChild(d);
          }
        }}
      >
        <option value="left">left</option>
        <option value="right">right</option>
        <option value="bottom">bottom</option>
        <option value="top">top</option>
        <option value="alpha">alpha</option>
        <option value="scale">scale</option>
        <option value="scaleBig">scaleBig</option>
        <option value="scaleX">scaleX</option>
        <option value="scaleY">scaleY</option>
      </select>
      <QueueAnim type={type} style={{ margin: '20px 0' }} duration={1000}>
        {child}
      </QueueAnim>
    </div>
  );
};
