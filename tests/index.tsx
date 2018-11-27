import * as React from 'react';

import QueueAnim from '../';

export default () => (
  <QueueAnim
    type="left"
    interval={100}
    delay={[100, 200]}
    duration={({ key, index }) => {
      if (key === '1' || index === 2) {
        return 200;
      }
      return 100;
    }}
    component="div"
    forcedReplay={false}
    animatingClassName={['enter', 'leave']}
    appear={false}
    ease="easeInOutCirc"
    leaveReverse={false}
    componentProps={{ id: 'Test' }}
    onEnd={({ key, type, target }) => { }}
  >
    <div key="0">test</div>
    <div key="1">test</div>
    <div key="2">test</div>
  </QueueAnim>
);
