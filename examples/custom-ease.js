/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <div style={{ height: 500 }}>
    <QueueAnim ease={[0.175, 0.885, 0.32, 1.275]}>
      <div key="1">div 1</div>
      <div key="2">div 1</div>
      <div key="3">div 1</div>
      <div key="4">div 1</div>
      <div key="5">div 1</div>
    </QueueAnim>
    <br />
    <QueueAnim ease={[[0.42, 0, 0.58, 1], [0.42, 0, 0.58, 1]]}>
      <div key="1">div 2</div>
      <div key="2">div 2</div>
      <div key="3">div 2</div>
      <div key="4">div 2</div>
      <div key="5">div 2</div>
    </QueueAnim>
  </div>
, document.getElementById('__react-content'));
