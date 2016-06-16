/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<QueueAnim>
  <div key="1">依次进入</div>
  <div key="2">依次进入</div>
  <div key="3">依次进入</div>
  <div key="4">依次进入</div>
  <div key="5">依次进入</div>
  <QueueAnim key="6" style={{ backgroundColor: 'red' }} delay={1000}>
    <div key="7">依次进入</div>
    <div key="8">依次进入</div>
    <div key="9">依次进入</div>
    <QueueAnim key="10" style={{ backgroundColor: 'yellow' }}>
      <div key="11">依次进入</div>
      <div key="12">依次进入</div>
      <div key="13">依次进入</div>
    </QueueAnim>
  </QueueAnim>
</QueueAnim>, document.getElementById('__react-content'));
