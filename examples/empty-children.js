/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

function QueueItem() {
  return (
    <QueueAnim>
      <div key="1">Item</div>
      <div key="2">Item</div>
      <div key="3">Item</div>
    </QueueAnim>
  );
}

function Item() {
  return (
    <div>Item</div>
  );
}

function Page1() {
  return (
    <div>
      <QueueAnim interval={1500}>
        <Item key="1" />
        <Item key="2" />
        <Item key="3" />
        <Item key="4" />
      </QueueAnim>
      <hr />
      <QueueAnim interval={1500}>
        <QueueItem key="1">11</QueueItem>
        <QueueItem key="2">11</QueueItem>
        <QueueItem key="3">11</QueueItem>
        <QueueItem key="4">11</QueueItem>
      </QueueAnim>
    </div>
  );
}

ReactDom.render(<Page1 />, document.getElementById('__react-content'));
